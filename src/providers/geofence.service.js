var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import generateUUID from "../utils/uuid";
var GeofenceService = (function () {
    function GeofenceService() {
    }
    GeofenceService.prototype.create = function (attributes) {
        var defaultGeofence = {
            id: generateUUID(),
            latitude: 50,
            longitude: 50,
            radius: 1000,
            transitionType: window.TransitionType.ENTER,
            notification: {
                id: this.getNextNotificationId(),
                title: "Ionic geofence example",
                text: "",
                icon: "res://ic_menu_mylocation",
                openAppOnClick: true,
            },
        };
        return Object.assign(defaultGeofence, attributes);
    };
    GeofenceService.prototype.clone = function (geofence) {
        return JSON.parse(JSON.stringify(geofence));
    };
    GeofenceService.prototype.addOrUpdate = function (geofence) {
        var _this = this;
        return window.geofence.addOrUpdate(geofence)
            .then(function () { return _this.findById(geofence.id); })
            .then(function (found) {
            if (!found) {
                _this.geofences.push(geofence);
            }
            else {
                var index = _this.geofences.indexOf(found);
                _this.geofences[index] = geofence;
            }
        });
    };
    GeofenceService.prototype.findAll = function () {
        var _this = this;
        return window.geofence.getWatched()
            .then(function (geofencesJson) {
            var geofences = JSON.parse(geofencesJson);
            _this.geofences = geofences;
            return geofences;
        });
    };
    GeofenceService.prototype.findById = function (id) {
        var found = this.geofences.filter(function (g) { return g.id === id; });
        if (found.length > 0) {
            return found[0];
        }
        return undefined;
    };
    GeofenceService.prototype.removeAll = function () {
        var _this = this;
        return window.geofence.removeAll().then(function () {
            _this.geofences.length = 0;
        });
    };
    GeofenceService.prototype.remove = function (geofence) {
        var _this = this;
        return window.geofence.remove(geofence.id).then(function () {
            _this.geofences.splice(_this.geofences.indexOf(geofence), 1);
        });
    };
    GeofenceService.prototype.getNextNotificationId = function () {
        var max = 0;
        this.geofences.forEach(function (gf) {
            if (gf.notification && gf.notification.id) {
                if (gf.notification.id > max) {
                    max = gf.notification.id;
                }
            }
        });
        return max + 1;
    };
    return GeofenceService;
}());
GeofenceService = __decorate([
    Injectable()
], GeofenceService);
export { GeofenceService };
//# sourceMappingURL=geofence.service.js.map