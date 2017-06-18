var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavParams, NavController, Platform } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { Facebook } from '@ionic-native/facebook';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DataService } from '../../providers/apiData.service';
var GraphPage = (function () {
    function GraphPage(navCtrl, platform, navParams, user, auth, dataService, barcodeScanner, fb, localNotifications) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.user = user;
        this.auth = auth;
        this.dataService = dataService;
        this.barcodeScanner = barcodeScanner;
        this.fb = fb;
        this.localNotifications = localNotifications;
        this.ouvintes = [];
        // Array of historic channels
        this.channels = [];
        this.lookup = {};
        // A count of messages received
        this.channel_count = 0;
        this.viewModel = [];
        this.notifications = [];
        this.userKey = navParams.get("key");
        console.log(user);
    }
    GraphPage.prototype.ngOnInit = function () { };
    GraphPage.prototype.changed = function (item) {
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
    GraphPage.prototype.login = function () {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', JSON.stringify(res)); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        this.fb.logEvent(this.fb.EVENTS.EVENT_PARAM_CONTENT_ID);
    };
    GraphPage.prototype.getdetails = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (response) {
            if (response.status == 'connected') {
                _this.fb.api('/' + response.authResponse.userID + '?fields=id,name,gender', []).then(function (response) {
                    alert(JSON.stringify(response));
                }, function (error) {
                    alert(error);
                });
            }
            else {
                alert('Not Logged in');
            }
        });
    };
    GraphPage.prototype.logout = function () {
        this.fb.logout().then(function (response) {
            alert(JSON.stringify(response));
        }, function (error) {
            alert(error);
        });
    };
    GraphPage.prototype.scanBarCode = function () {
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log(barcodeData);
        }, function (error) {
            alert(error);
        });
    };
    GraphPage.prototype.addNotifications = function (info) {
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
    GraphPage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
    };
    return GraphPage;
}());
GraphPage = __decorate([
    Component({
        selector: 'page-graph',
        templateUrl: 'graph.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        NavParams,
        User,
        Auth,
        DataService,
        BarcodeScanner,
        Facebook,
        LocalNotifications])
], GraphPage);
export { GraphPage };
//# sourceMappingURL=graph.js.map