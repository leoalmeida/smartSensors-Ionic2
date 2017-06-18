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
import { User } from '@ionic/cloud-angular';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
var DataService = (function () {
    // Publishes new info to Observers
    function DataService(platform, user, http) {
        this.platform = platform;
        this.user = user;
        this.http = http;
        //private dbUrl: string = 'http://200.18.98.244:3001/';
        //private dbUrl: string = 'http://192.168.0.7:3001/';
        //private mqttUrl: string = 'mqtt://192.168.0.6:1883/';
        this.dbUrl = 'http://localhost:3001/';
    }
    DataService.prototype.toggleEquipmentStatus = function (body, status) {
        //let transactionObj = new KnowledgeModel(newObject);
        var url = this.dbUrl + "api/action/boards/" + (status) ? "connect" : "disconnect";
        return this.http.post(url, body, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DataService.prototype.evaluateTopic = function (body) {
        //let transactionObj = new KnowledgeModel(newObject);
        var url = this.dbUrl + "api/action/topic/dynamic";
        return this.http.post(url, body, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    DataService.prototype.getReferenceData = function (resource) {
        return this.http.get(this.dbUrl + "api/reference/" + resource.join("/"), this.generateHeader(false))
            .map(function (response) { return response.json(); });
        //.map(this.processData)
        //.catch(this.handleError);
    };
    DataService.prototype.getMessengerData = function (resource, query) {
        var url = this.dbUrl + "api/messenger/" + resource.join("/");
        if (query != null) {
            url += '?' + query.join("&");
        }
        return this.http.get(url, this.generateHeader(false))
            .map(function (response) { return response.json(); });
        //.map(this.processData)
        //.catch(this.handleError);
    };
    DataService.prototype.publishMessage = function (newObject) {
        return this.http.put(this.dbUrl + "api/messenger/", newObject, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getData = function (resource, query) {
        var url = this.dbUrl + "api/knowledge/" + resource.join("/");
        if (query != null) {
            url += '?' + query.join("=");
        }
        return this.http.get(url, this.generateHeader(false))
            .map(function (response) { return response.json(); });
        //.map(this.processData)
        //.catch(this.handleError);
    };
    DataService.prototype.getOne = function (resource) {
        return this.http.get(this.dbUrl + "api/knowledge/" + resource.join("/"), this.generateHeader(false))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getStaticData = function (resource, requestedCols) {
        var url = this.dbUrl + "api/knowledge/" + resource.join("/") + '?columns=' + requestedCols;
        return this.http.get(url, this.generateHeader(false))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleStaticError);
    };
    DataService.prototype.createKnowledge = function (newObject) {
        //let transactionObj = new KnowledgeModel(newObject);
        //console.log(transactionObj);
        return this.http.put(this.dbUrl + "api/knowledge", newObject, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateKnowledge = function (resource, newData) {
        //let transactionObj = new KnowledgeModel(changes);
        var url = this.dbUrl + "api/knowledge/" + resource;
        return this.http.post(url, newData, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateAttribute = function (documentId, newValues) {
        var url = this.dbUrl + "api/knowledge/" + documentId;
        return this.http.post(url, newValues, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    DataService.prototype.removeKnowledge = function (resource) {
        return this.http.delete(this.dbUrl + "api/knowledge/" + resource, this.generateHeader(false))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.removeAttribute = function (documentId, attribute) {
        var url = this.dbUrl + "api/knowledge/" + documentId + "/" + attribute;
        return this.http.delete(url, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addAttrInfo = function (documentId, attrName, body) {
        var url = this.dbUrl + "api/knowledge/" + documentId + "/attr/" + attrName;
        return this.http.post(url, body, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.removeAttrInfo = function (documentId, attrName) {
        var url = this.dbUrl + "api/knowledge/" + documentId + "/attr/" + attrName;
        return this.http.delete(url, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addAssociation = function (documentId, associationType, body) {
        var url = this.dbUrl + "api/knowledge/" + documentId + "/relation/" + associationType;
        return this.http.post(url, body, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.removeAssociation = function (documentId, associationType, relid) {
        var url = this.dbUrl + "api/knowledge/" + documentId + "/" + associationType + "/" + relid;
        return this.http.delete(url, this.generateHeader(true))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.generateHeader = function (hasbody) {
        var headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(this.user.id + ":" + this.user.details.password));
        if (hasbody) {
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
        }
        ;
        return new RequestOptions({ headers: headers });
    };
    DataService.prototype.handleStaticError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Platform,
        User,
        Http])
], DataService);
export { DataService };
//# sourceMappingURL=apiData.service.js.map