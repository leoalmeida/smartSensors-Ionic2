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
import { NavParams, ViewController, Platform } from 'ionic-angular';
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
var colors = ["green", "grey", "orange", "red", "violet", "yellow", "black"];
var newIcon = function (color) {
    if (!color)
        color = 'default';
    return new Leaflet.Icon({
        iconUrl: iconUrls[color], shadowUrl: iconUrls.shadow, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
    });
};
var ShowMapModal = (function () {
    function ShowMapModal(navParams, viewCtrl, platform, geolocation) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.imgdef = "assets/icons/img/ionic.png";
        this.categoryColor = {};
        this.equipLayers = {};
        this.layerControl = false;
        this.map = false;
        this.baseLayout = {};
        this.items = [];
        this.change = navParams.get('change');
        if (this.change)
            this.item = navParams.get('item');
        else
            this.items = navParams.get('items');
        this.userKey = navParams.get('key');
        platform.ready().then(function () {
            Leaflet.Icon.Default.imagePath = "assets/leaflet/images/";
        });
    }
    ShowMapModal.prototype.ngOnInit = function () {
        this.drawMap();
    };
    ShowMapModal.prototype.drawMap = function () {
        if (!this.map) {
            this.map = Leaflet.map("mapitem", { zoom: 10 })
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
        this.drawLayers();
        //web location
        this.map.locate({ setView: true, maxZoom: 12 });
    };
    ShowMapModal.prototype.drawLayers = function () {
        var qtdcolor = 0;
        var overlayMaps = {};
        if (!this.change) {
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var equip = _a[_i];
                if (!this.equipLayers[equip.category]) {
                    if (!this.categoryColor[equip.category])
                        this.categoryColor[equip.category] = colors[qtdcolor++];
                    this.equipLayers[equip.category] = Leaflet.layerGroup([]);
                    this.equipLayers[equip.category].addTo(this.map);
                    overlayMaps[equip.category] = this.equipLayers[equip.category];
                    if (qtdcolor >= colors.length)
                        qtdcolor = 0;
                }
                var itemMarker = Leaflet.marker(Leaflet.latLng(equip.location.coordinates), {
                    icon: newIcon(this.categoryColor[equip.category]),
                    draggable: this.change
                }).bindPopup(equip.data.name);
                this.equipLayers[equip.category].addLayer(itemMarker);
            }
        }
        else {
            this.equipLayers[this.item.category] = Leaflet.layerGroup([]);
            this.equipLayers[this.item.category].addTo(this.map);
            overlayMaps[this.item.category] = this.equipLayers[this.item.category];
            this.marker = Leaflet.marker(Leaflet.latLng(this.item.location.coordinates), {
                icon: newIcon(this.categoryColor[this.item.category]),
                draggable: this.change
            }).bindPopup(this.item.data.name)
                .on('moveend', this.onMoveEnd.bind(this));
            this.equipLayers[this.item.category].addLayer(this.marker);
        }
        this.layerControl = Leaflet.control.layers(this.baseLayout, overlayMaps).addTo(this.map);
    };
    ShowMapModal.prototype.onMoveEnd = function (e) {
        if (this.change) {
            this.latLng = e.latlng;
        }
    };
    //when we have a location draw a marker and accuracy circle
    ShowMapModal.prototype.onLocationFound = function (e) {
        this.map.setZoom(13);
        if (!this.change) {
            this.marker = Leaflet.marker(e.latlng)
                .addTo(this.map)
                .bindPopup("Você");
            this.latLng = e.latlng;
        }
    };
    //alert on location error
    ShowMapModal.prototype.onLocationError = function (e) {
        alert(e.message);
    };
    ShowMapModal.prototype.onMapClicked = function (e) {
        if (this.change) {
            this.latLng = e.latlng;
        }
    };
    Object.defineProperty(ShowMapModal.prototype, "latLng", {
        get: function () {
            return this._latLng;
        },
        set: function (value) {
            this._latLng = value;
            this.marker.setLatLng(value);
        },
        enumerable: true,
        configurable: true
    });
    ShowMapModal.prototype.saveChanges = function () {
        this.viewCtrl.dismiss({
            newLocal: this.latLng
        });
    };
    ShowMapModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ShowMapModal;
}());
__decorate([
    ViewChild('mapitem'),
    __metadata("design:type", ElementRef)
], ShowMapModal.prototype, "mapElement", void 0);
ShowMapModal = __decorate([
    Component({
        templateUrl: './show-map-modal.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        ViewController,
        Platform,
        Geolocation])
], ShowMapModal);
export { ShowMapModal };
//# sourceMappingURL=show-map-modal.js.map