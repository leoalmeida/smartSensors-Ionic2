var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import * as Leaflet from "leaflet";
var LocationTracker = (function () {
    function LocationTracker(zone, backgroundGeolocation, geolocation) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this._radius = 700;
    }
    LocationTracker.prototype.startTracking = function (latlng) {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this._marker = Leaflet.marker(latlng)
            .bindPopup("Você");
        this._circle = Leaflet.circle(latlng, this.radius);
        this._latLng = latlng;
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.latLng = { lat: location.latitude, lng: location.longitude };
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options)
            .filter(function (p) { return p.code === undefined; })
            .subscribe(function (position) {
            console.log(position);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.latLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            });
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    Object.defineProperty(LocationTracker.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
            this._circle.setRadius(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationTracker.prototype, "latLng", {
        get: function () {
            return this._latLng;
        },
        set: function (latlng) {
            this._latLng = latlng;
            this._circle.setLatLng(latlng);
            this._marker.setLatLng(latlng);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationTracker.prototype, "circle", {
        get: function () {
            return this._circle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationTracker.prototype, "marker", {
        get: function () {
            return this._marker;
        },
        enumerable: true,
        configurable: true
    });
    return LocationTracker;
}());
LocationTracker = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgZone,
        BackgroundGeolocation,
        Geolocation])
], LocationTracker);
export { LocationTracker };
//# sourceMappingURL=location-tracker.js.map