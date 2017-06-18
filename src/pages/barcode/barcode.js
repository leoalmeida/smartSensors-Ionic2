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
import { NavParams, NavController, Platform, ActionSheetController } from 'ionic-angular';
//import { LocalNotifications } from '@ionic-native/local-notifications';
//import { DataService } from '../../providers/apiData.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Dialogs } from '@ionic-native/dialogs';
var BarcodePage = (function () {
    function BarcodePage(navCtrl, platform, navParams, barcodeScanner, actionsheetCtrl, iab, dialogs) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.actionsheetCtrl = actionsheetCtrl;
        this.iab = iab;
        this.dialogs = dialogs;
    }
    BarcodePage.prototype.ngOnInit = function () {
        var data = localStorage.getItem("LocalData");
        console.log(data);
        this.barcodes = JSON.parse(data);
    };
    BarcodePage.prototype.openUrl = function (data) {
        this.iab.create("'" + data + "'");
    };
    BarcodePage.changed = function (item) {
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
    BarcodePage.prototype.scanBarCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log(barcodeData);
            _this.dialogs.prompt("Please enter name of data").then(function (input) {
                var name = input.input1;
                var value = barcodeData.text;
                var data = localStorage.getItem("LocalData");
                console.log(data);
                data = JSON.parse(data);
                data[data.length] = [name, value];
                localStorage.setItem("LocalData", JSON.stringify(data));
            });
        }, function (error) {
            alert("Scanning failed: " + error);
        });
    };
    BarcodePage.prototype.scanQrCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled) {
                if (barcodeData.format == "QR_CODE") {
                    _this.dialogs.prompt("Please enter name of data").then(function (input) {
                        var name = input.input1;
                        var value = barcodeData.text;
                        var data = localStorage.getItem("LocalData");
                        console.log(data);
                        data = JSON.parse(data);
                        data[data.length] = [name, value];
                        localStorage.setItem("LocalData", JSON.stringify(data));
                        alert("Done");
                    });
                }
            }
        }, function (error) {
            alert("Scanning failed: " + error);
        });
    };
    BarcodePage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Equipamentos',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'General BarCode',
                    icon: !this.platform.is('ios') ? 'barcode' : null,
                    handler: function () {
                        _this.scanBarCode();
                    }
                },
                {
                    text: 'QRbarCode',
                    icon: !this.platform.is('ios') ? 'qr-scanner' : null,
                    handler: function () {
                        _this.scanQrCode();
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
    return BarcodePage;
}());
BarcodePage = __decorate([
    Component({
        selector: 'page-barcode',
        templateUrl: 'barcode.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        NavParams,
        BarcodeScanner,
        ActionSheetController,
        InAppBrowser,
        Dialogs])
], BarcodePage);
export { BarcodePage };
//# sourceMappingURL=barcode.js.map