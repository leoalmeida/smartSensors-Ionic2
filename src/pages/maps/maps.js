var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams, NavController, Platform, ActionSheetController, LoadingController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DataService } from '../../providers/apiData.service';
import * as Leaflet from "leaflet";
import { Geolocation } from '@ionic-native/geolocation';
var iconUrls = {
    shadow: 'assets/leaflet/images/marker-shadow.png',
    default: 'assets/leaflet/images/marker-icon.png',
    default2x: 'assets/leaflet/images/marker-icon-2x.png',
    black2x: 'assets/leaflet/images/marker-icon-2x-black.png',
    blue2x: 'assets/leaflet/images/marker-icon-2x-blue.png',
    green2x: 'assets/leaflet/images/marker-icon-2x-green.png',
    grey2x: 'assets/leaflet/images/marker-icon-2x-grey.png',
    orange2x: 'assets/leaflet/images/marker-icon-2x-orange.png',
    red2x: 'assets/leaflet/images/marker-icon-2x-red.png',
    violet2x: 'assets/leaflet/images/marker-icon-2x-violet.png',
    yellow2x: 'assets/leaflet/images/marker-icon-2x-yellow.png',
    black: 'assets/leaflet/images/marker-icon-black.png',
    blue: 'assets/leaflet/images/marker-icon-blue.png',
    green: 'assets/leaflet/images/marker-icon-green.png',
    grey: 'assets/leaflet/images/marker-icon-grey.png',
    orange: 'assets/leaflet/images/marker-icon-orange.png',
    red: 'assets/leaflet/images/marker-icon-red.png',
    violet: 'assets/leaflet/images/marker-icon-violet.png',
    yellow: 'assets/leaflet/images/marker-icon-yellow.png',
};
//const colors = ["green", "grey", "orange", "red", "violet", "yellow", "black"];
var newIcon = function (color) {
    if (!color)
        color = 'default';
    return new Leaflet.Icon({
        iconUrl: iconUrls[color], shadowUrl: iconUrls.shadow, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
};
var MapsPage = (function () {
    function MapsPage(navCtrl, platform, navParams, user, auth, dataService, localNotifications, actionSheetCtrl, loadingCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.user = user;
        this.auth = auth;
        this.dataService = dataService;
        this.localNotifications = localNotifications;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this._radius = 3000;
        this.layerControl = false;
        this.map = false;
        this.selectedEquipmentType = "";
        this.selectedEquipmentCategory = "";
        this.baseLayout = {};
        this.equipLayers = {};
        // Array of historic channels
        this.channels = [];
        this.notifications = [];
        this.userKey = navParams.get("key");
        this.selectedEquipmentType = navParams.get("type");
        this.selectedEquipmentCategory = navParams.get("category");
        this.loader = this.loadingCtrl.create({
            content: "Buscando..."
        });
        this.loader.present();
        platform.ready().then(function () {
            Leaflet.Icon.Default.imagePath = "assets/leaflet/images/";
        });
    }
    MapsPage.prototype.ngOnInit = function () {
        this.drawMap();
    };
    MapsPage.prototype.drawMap = function () {
        if (!this.map) {
            this.map = Leaflet.map("map")
                .on("click", this.onMapClicked.bind(this))
                .on('locationfound', this.onLocationFound.bind(this))
                .on('locationerror', this.onLocationError.bind(this));
        }
        if (!this.map.hasLayer("MapID")) {
            var mapa = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                id: 'MapID',
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map);
            this.baseLayout = { "Padrão": mapa };
        }
        //web location
        this.map.locate({ setView: true });
    };
    MapsPage.prototype.getEquipmentSpots = function () {
        var _this = this;
        var overlayMaps = {};
        var parameters = ["loc", this._latLng.lat, this._latLng.lng, this._radius];
        if (this.selectedEquipmentType)
            parameters.push(this.selectedEquipmentType);
        if (this.selectedEquipmentCategory)
            parameters.push(this.selectedEquipmentCategory);
        //parameters.push("ownedBy", this.userKey);
        for (var _i = 0, _a = Object.keys(this.equipLayers); _i < _a.length; _i++) {
            var layer = _a[_i];
            this.equipLayers[layer].clearLayers();
        }
        //this.dataService.getData<EquipmentModel>(["loc", this.locationTracker.latLng.lat, this.locationTracker.latLng.lng, this.locationTracker.radius],null)
        this.dataService.getData(parameters, null)
            .subscribe(function (equipments) {
            _this.equipments = equipments;
            var connected = "red";
            for (var _i = 0, equipments_1 = equipments; _i < equipments_1.length; _i++) {
                var equip = equipments_1[_i];
                if (equip.data.connected)
                    connected = "green";
                if (!_this.equipLayers[equip.category]) {
                    _this.equipLayers[equip.category] = Leaflet.layerGroup([]);
                    overlayMaps[equip.category] = _this.equipLayers[equip.category];
                    _this.equipLayers[equip.category].addTo(_this.map);
                }
                _this.equipLayers[equip.category].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates), { icon: newIcon(connected) }).bindPopup(equip.data.label));
            }
            _this.layerControl = Leaflet.control.layers(_this.baseLayout, overlayMaps).addTo(_this.map);
        }, function (error) { return console.log(error); });
    };
    //when we have a location draw a marker and accuracy circle
    MapsPage.prototype.onLocationFound = function (e) {
        //var radius = e.accuracy / 2;
        this.map.setZoom(13);
        this.marker = Leaflet.marker(e.latlng)
            .addTo(this.map)
            .bindPopup("Você");
        this.circle = Leaflet.circle(e.latlng, this.radius).addTo(this.map);
        this.latLng = e.latlng;
        this.getEquipmentSpots();
        this.loader.dismissAll();
    };
    //alert on location error
    MapsPage.prototype.onLocationError = function (e) {
        alert(e.message);
    };
    MapsPage.prototype.onMapClicked = function (e) {
        this.latLng = e.latlng;
        this.getEquipmentSpots();
    };
    MapsPage.prototype.onMarkerPositionChanged = function (e) {
        var latlng = e.target.getLatLng();
        console.log(latlng);
        //this.latLng = latlng;
    };
    Object.defineProperty(MapsPage.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
            this.circle.setRadius(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapsPage.prototype, "latLng", {
        get: function () {
            return this._latLng;
        },
        set: function (value) {
            this._latLng = value;
            this.circle.setLatLng(value);
            this.marker.setLatLng(value);
        },
        enumerable: true,
        configurable: true
    });
    MapsPage.prototype.addMarker = function (position, title) {
        var content = "<h4>" + title + "</h4>";
        Leaflet.marker(position)
            .addTo(this.map)
            .bindPopup(content)
            .openPopup();
    };
    MapsPage.prototype.changed = function (item) {
        var now = Date.now();
        var diffMs = (now - item);
        var diffTime = Math.floor(diffMs / 86400000); // days
        if (diffTime > 0)
            return diffTime;
        diffTime = Math.floor((diffMs % 86400000) / 3600000); // hours
        if (diffTime > 0)
            return diffTime;
        return Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    };
    MapsPage.prototype.addNotifications = function (info) {
        var _this = this;
        var firstNotificationTime = new Date();
        firstNotificationTime.setSeconds(firstNotificationTime.getSeconds() + 1000);
        var notification = {
            id: 1,
            title: 'Barcode',
            text: info,
            at: firstNotificationTime,
            data: { secret: this.userKey }
        };
        this.notifications.push(notification);
        console.log("Notifications to be scheduled: ", this.notifications);
        if (this.platform.is('cordova')) {
            // Cancel any existing notifications
            this.localNotifications.cancelAll().then(function () {
                // Schedule the new notifications
                _this.localNotifications.schedule(_this.notifications);
                _this.notifications = [];
            });
            this.localNotifications.on("click", function (notification) {
                console.log("clicked: ", notification);
            });
        }
    };
    MapsPage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
    };
    MapsPage.prototype.openMenu = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Equipamentos',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Maps',
                    icon: !this.platform.is('ios') ? 'barcode' : null,
                    handler: function () {
                    }
                },
                {
                    text: 'Sair',
                    role: 'quit',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return MapsPage;
}());
__decorate([
    ViewChild('map'),
    __metadata("design:type", ElementRef)
], MapsPage.prototype, "mapElement", void 0);
MapsPage = __decorate([
    Component({
        selector: 'maps-page',
        templateUrl: 'maps.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        NavParams,
        User,
        Auth,
        DataService,
        LocalNotifications,
        ActionSheetController,
        LoadingController,
        Geolocation])
], MapsPage);
export { MapsPage };
//# sourceMappingURL=maps.js.map