var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AlertController, NavParams, ViewController, Slides, ToastController } from 'ionic-angular';
import { DataService } from '../../providers/apiData.service';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Camera } from '@ionic-native/camera';
var ChooseItemModal = (function () {
    function ChooseItemModal(navParams, dataService, geolocation, geocoder, toaster, locac, camera, alertCtrl, viewCtrl) {
        this.navParams = navParams;
        this.dataService = dataService;
        this.geolocation = geolocation;
        this.geocoder = geocoder;
        this.toaster = toaster;
        this.locac = locac;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.slideList = [];
        this.selectedType = "";
        this.selectedName = "";
        this.firstSlide = 0;
        this.userKey = this.navParams.get('key');
        this.pageTitle = this.navParams.get('title');
        this.listType = this.navParams.get('listType');
        this.itemType = this.navParams.get('itemType');
        this.getReferenceData();
    }
    ChooseItemModal.prototype.ionSlideWillChange = function () {
        // Initialize the flag
        //this.slides.lockSwipes(true);
        if (this.slideList.length - this.slides.getActiveIndex() >= 2)
            this.slides.lockSwipeToNext(false);
        else
            this.slides.lockSwipeToNext(true);
        if (this.slides.getActiveIndex() <= 2)
            this.slides.lockSwipeToPrev(true);
        else
            this.slides.lockSwipeToPrev(false);
    };
    ChooseItemModal.prototype.itemSelected = function (itemIndex, slideIndex) {
        //if (lastSlide) this.doSave(this.listTemplates[itemIndex], this.selectedType);
        this.selectedItem = this.slideList[slideIndex][itemIndex];
        if (this.selectedItem.options.length) {
            this.pageTitle = "Novo " + this.selectedItem.name;
            this.selectedType = this.selectedItem.name;
            this.slideList.push("");
            this.slideList[slideIndex + 1] = this.selectedItem.options;
            this.slides.lockSwipeToNext(false);
            this.slides.slideTo(slideIndex + 1, 500, true);
            this.firstSlide++;
            //this.slides.slideNext(500, true);
        }
        else if (this.selectedItem.properties.length) {
            this.slideList[slideIndex + 1] = this.selectedItem.info[0];
            for (var _i = 0, _a = this.selectedItem.properties; _i < _a.length; _i++) {
                var attr = _a[_i];
                if (!attr.hidden)
                    this.slideList.push(attr);
            }
            this.slides.lockSwipeToNext(false);
            //this.slides.slideTo(slideIndex+1, 500, true);
            this.slides.slideTo(slideIndex + 1, 500, true);
        }
    };
    ChooseItemModal.prototype.goBack = function () {
        this.slides.lockSwipeToPrev(false);
        this.slides.slidePrev(500, true);
    };
    ChooseItemModal.prototype.goNext = function () {
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext(500, true);
    };
    ChooseItemModal.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log("Current index is", currentIndex);
        if (this.slides.getActiveIndex() < 2)
            return;
        if (this.slides.getActiveIndex() >= 2) {
            this.pageTitle = this.slideList[this.slides.getActiveIndex()].display;
        }
    };
    ChooseItemModal.prototype.takePicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.slideList[_this.slides.getActiveIndex()].image.type = 'data:image/png;base64';
            _this.slideList[_this.slides.getActiveIndex()].image.value = imageData;
        }, function (err) {
            // Handle error
        });
    };
    ChooseItemModal.prototype.geoLocate = function (slideIndex) {
        var _this = this;
        var options = {
            enableHighAccuracy: true
        };
        this.locac.canRequest().then(function (res) {
            if (res) {
                _this.locac.request(_this.locac.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.geolocation.getCurrentPosition(options).then(function (position) {
                        _this.updateGeoLocation(position, slideIndex);
                    }).catch(function (error) {
                        console.error("Accuracy request failed: error code=" + error.code + "; error message=" + error.message);
                        var alert = _this.alertCtrl.create({
                            title: "Falha ao buscar a localização",
                            subTitle: "Não foi possível buscar sua localização!",
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }, function (error) {
                    console.log('Error getting location', error);
                    var alert = _this.alertCtrl.create({
                        title: "Falha ao buscar a localização",
                        subTitle: "Não foi possível buscar sua localização!",
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
        });
    };
    ChooseItemModal.prototype.updateGeoLocation = function (pos, slideIndex) {
        var _this = this;
        slideIndex.location.coordinates.value = pos.coords;
        this.geocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude).then(function (res) {
            slideIndex.location.text.value = res.countryName;
            var toaster = _this.toaster.create({
                message: "Endereço atualizado",
                duration: 2000
            });
            toaster.present();
        });
    };
    ChooseItemModal.prototype.rangeChange = function (valA, valB) {
        return { below: valA, top: valB };
        //this.myForm.controls['formRange'].updateValue(this.val);
    };
    ChooseItemModal.prototype.getReferenceData = function () {
        var _this = this;
        this.dataService.getReferenceData(["all"])
            .subscribe(function (data) {
            _this.listReferences = data[0];
            if (_this.itemType)
                _this.slideList.push(_this.listReferences[[_this.listType, "Types"].join("")][_this.itemType]);
            else
                _this.slideList.push(_this.listReferences[[_this.listType, "Types"].join("")]);
            _this.firstSlide++;
            _this.slideList.push("");
        }, function (error) { return _this.errorMessage = error; });
        /*this.dataService.getReferenceData([[this.listType,"Types"].join(""), this.itemType])
                         .subscribe(
                           data => {
                             this.listReferences = data[[this.listType,"Types"].join("")];
                             if (this.itemType) this.slideList.push(this.listReferences[this.itemType]);
                             else this.slideList.push(this.listReferences);
                             this.slideList.push("");
                           },
                           error =>  this.errorMessage = <any>error);*/
    };
    ChooseItemModal.prototype.doSave = function () {
        this.selectedItem.type = this.selectedType;
        this.viewCtrl.dismiss({
            itemTemplate: this.selectedItem
        });
    };
    ChooseItemModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ChooseItemModal;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], ChooseItemModal.prototype, "slides", void 0);
ChooseItemModal = __decorate([
    Component({
        templateUrl: 'choose-item-modal.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        DataService,
        Geolocation,
        NativeGeocoder,
        ToastController,
        LocationAccuracy,
        Camera,
        AlertController,
        ViewController])
], ChooseItemModal);
export { ChooseItemModal };
var ChooseItemPage = (function () {
    function ChooseItemPage() {
    }
    return ChooseItemPage;
}());
//# sourceMappingURL=choose-item-modal.js.map