var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams, MenuController, Platform, LoadingController } from "ionic-angular";
import * as Leaflet from "leaflet";
import { DataService } from "../../providers/apiData.service";
import { GeofencePluginMock, TransitionType } from "../../providers/geofence-plugin-mock";
import { LocationTracker } from '../../providers/location-tracker';
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
var newIcon = function (color) {
    if (!color)
        color = 'default';
    return new Leaflet.Icon({
        iconUrl: iconUrls[color], shadowUrl: iconUrls.shadow, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
};
var GeofenceDetailsPage = (function () {
    function GeofenceDetailsPage(nav, platform, navParams, loadingCtrl, locationTracker, dataService, menu) {
        this.nav = nav;
        this.platform = platform;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.locationTracker = locationTracker;
        this.dataService = dataService;
        this.menu = menu;
        this.layerControl = false;
        this.map = false;
        this.userKey = navParams.get('key');
        this.loader = this.loadingCtrl.create({
            content: "Buscando..."
        });
        this.loader.present();
        this.platform.ready().then(function () {
            Leaflet.Icon.Default.imagePath = "assets/leaflet/images/";
            if (window.geofence === undefined) {
                console.warn("Geofence Plugin not found. Using mock instead.");
                window.geofence = GeofencePluginMock;
                window.TransitionType = TransitionType;
            }
            window.geofence.initialize().then(function (initStatus) {
                console.log("Geofence Plugin has been initialized", initStatus);
                window.geofence.onTransitionReceived = function (geofences) {
                    geofences.forEach(function (geo) {
                        console.log("Geofence transition detected", geo);
                    });
                };
                window.geofence.onNotificationClicked = function (notificationData) {
                    console.log("App opened from Geo Notification!", notificationData);
                };
            }).catch(function (error) {
                console.error(error);
            });
        });
    }
    GeofenceDetailsPage.prototype.ngOnInit = function () {
        this.drawMap();
    };
    GeofenceDetailsPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    GeofenceDetailsPage.prototype.drawMap = function () {
        if (!this.map) {
            this.map = Leaflet.map("fencemap")
                .on("click", this.onMapClicked.bind(this))
                .on('locationfound', this.onLocationFound.bind(this))
                .on('locationerror', this.onLocationError.bind(this));
        }
        if (this.layerControl === false) {
            this.layerControl = Leaflet.control.layers().addTo(this.map);
        }
        if (!this.map.hasLayer("MapID")) {
            var mapa = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                id: 'MapID',
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map);
            this.layerControl.addBaseLayer(mapa, "Mapa Padrão");
        }
        //web location
        this.map.locate({ setView: true });
    };
    //when we have a location draw a marker and accuracy circle
    GeofenceDetailsPage.prototype.onLocationFound = function (e) {
        this.map.setZoom(13);
        this.locationTracker.startTracking(e.latlng);
        this.locationTracker.marker.addTo(this.map);
        this.locationTracker.circle.addTo(this.map);
        this.getEquipmentSpots();
        this.loader.dismissAll();
    };
    //alert on location error
    GeofenceDetailsPage.prototype.onLocationError = function (e) { alert(e.message); };
    GeofenceDetailsPage.prototype.onMapClicked = function (e) {
        //this.latLng = e.latlng;
        //this.getEquipmentSpots();
    };
    GeofenceDetailsPage.prototype.onMarkerPositionChanged = function (e) { this.getEquipmentSpots(); };
    GeofenceDetailsPage.prototype.getEquipmentSpots = function () {
        var _this = this;
        if (!this.equipLayer) {
            this.equipLayer = Leaflet.layerGroup([]);
            this.layerControl.addOverlay(this.equipLayer, "Equipamentos");
        }
        this.dataService.getData(["loc", this.locationTracker.latLng.lat, this.locationTracker.latLng.lng, this.locationTracker.radius], null)
            .subscribe(function (equipments) {
            _this.equipments = equipments;
            _this.equipLayer.clearLayers();
            var connected = "red";
            for (var _i = 0, equipments_1 = equipments; _i < equipments_1.length; _i++) {
                var equip = equipments_1[_i];
                if (equip.data.connected)
                    connected = "green";
                else
                    connected = "red";
                _this.equipLayer.addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates), { icon: newIcon(connected) }).bindPopup(equip.data.label));
            }
            _this.equipLayer.addTo(_this.map);
        }, function (error) { return console.log(error); });
    };
    return GeofenceDetailsPage;
}());
__decorate([
    ViewChild('map'),
    __metadata("design:type", ElementRef)
], GeofenceDetailsPage.prototype, "mapElement", void 0);
GeofenceDetailsPage = __decorate([
    Component({
        selector: 'geofence-page',
        templateUrl: "geofence.html"
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        NavParams,
        LoadingController,
        LocationTracker,
        DataService,
        MenuController])
], GeofenceDetailsPage);
export { GeofenceDetailsPage };
//# sourceMappingURL=geofence.js.map