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
import { Http } from '@angular/http';
/**
 * An injected class which grabs the application
 * config variables (e.g. MQ  credentials)
 * for the user application.
 *
 * This makes an AJAX request to the server
 * api containing some user token and secret
 *
 * @type ConfigService
 */
var ConfigService = (function () {
    // TODO: Provide a user object to the constructor
    //       to allow retrieval of per-user configs
    //       or from a specific URL.
    function ConfigService(_http) {
        this._http = _http;
    }
    /** Make an http request for a config file, and
      * return a Promise for its resolution.
      */
    ConfigService.prototype.getConfig = function (path) {
        return this._http.get(path)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map