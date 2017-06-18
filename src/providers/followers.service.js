var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
var FollowersService = (function () {
    function FollowersService(platform, http) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        // Your stuff
        // ...
        this.data = null;
        this.dismissObserver = null;
        this.dismiss = Observable.create(function (observer) {
            _this.dismissObserver = observer;
        });
    }
    FollowersService.prototype.load = function () {
        if (this.data) {
            return Observable.of(this.data);
        }
        else {
            return this.http.get("assets/data/followers.json")
                .map(this.processData, this)
                .catch(this.handleError);
        }
    };
    FollowersService.prototype.processData = function (data) {
        this.data = data;
        return this.data;
    };
    FollowersService.prototype.findAll = function () {
        return this.load().map(function (res) { return res.json(); });
    };
    FollowersService.prototype.handleError = function (error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
    return FollowersService;
}());
FollowersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Platform,
        Http])
], FollowersService);
export { FollowersService };
//# sourceMappingURL=followers.service.js.map