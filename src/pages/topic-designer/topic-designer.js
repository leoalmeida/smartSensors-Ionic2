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
import { LoadingController, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { ShowMapModal } from '../modals/show-map-modal';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { ItemPopOverPage } from './item-popover';
import { RelationModalPage } from '../modals/relation-item-modal';
import { RuleModalPage } from '../modals/rule-item-modal';
var TopicDesignerPage = (function () {
    function TopicDesignerPage(user, navCtrl, modalCtrl, nativegeocoder, loadingCtrl, navParams, popoverCtrl, dataService) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.nativegeocoder = nativegeocoder;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.dataService = dataService;
        this.imgdef = "assets/icons/img/ionic.png";
        this.listRules = false;
        this.listActions = false;
        this.listed = false;
        this.shouldAnimate = false;
        this.selectedSegment = "rules";
        this.dynamic = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.userKey = navParams.get('key');
    }
    TopicDesignerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getOne([this.selectedItem])
            .subscribe(function (result) {
            _this.pageTitle = result.data.name;
            _this.object = result;
            (_this.object.category === 'dynamic') ? _this.dynamic = true : _this.dynamic = false;
        });
    };
    TopicDesignerPage.prototype.showMap = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ShowMapModal, { change: true, item: this.object, key: this.userKey });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.object.location.coordinates = [data.newLocal.lat, data.newLocal.lng];
                console.log('MODAL DATA', data.newLocal);
                _this.nativegeocoder.reverseGeocode(data.newLocal.lat, data.newLocal.lng)
                    .then(function (result) {
                    alert("The address is: \n\n" + result.street + " " + result.houseNumber + ", " + result.postalCode + " " + result.city + " " + result.district + " in " + result.countryName + " - " + result.countryCode);
                }).catch(function (err) {
                    alert(JSON.stringify(err));
                });
            }
        });
    };
    TopicDesignerPage.prototype.onSubmit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Salvando..."
        });
        loader.present();
        if (!this.object._id)
            this.dataService.createKnowledge(this.object)
                .subscribe(function (data) {
                console.log(data);
                loader.dismissAll();
                _this.navCtrl.pop();
            }, function (error) { return _this.errorMessage = error; });
        else
            this.dataService.updateKnowledge(this.object._id, this.object)
                .subscribe(function (data) {
                console.log(data);
                loader.dismissAll();
                _this.navCtrl.pop();
            }, function (error) { return _this.errorMessage = error; });
    };
    TopicDesignerPage.prototype.saveObject = function () {
    };
    TopicDesignerPage.prototype.changeImage = function () { };
    TopicDesignerPage.prototype.changeIcon = function () { };
    TopicDesignerPage.prototype.toggleList = function () { this.listed = !this.listed; };
    ;
    TopicDesignerPage.prototype.propertyTapped = function (event, item) {
        /*this.navCtrl.push(HubDetailsPage, {
            item: item
        });*/
    };
    TopicDesignerPage.prototype.showPopover = function (myEvent, index) {
        var popover = this.popoverCtrl.create(ItemPopOverPage, {
            items: index
        });
        popover.present({
            ev: myEvent
        });
    };
    TopicDesignerPage.prototype.newRule = function () {
        var _this = this;
        var modal = this.modalCtrl.create(RuleModalPage, { type: "rule", index: this.object.data.ruleContainer.length });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                console.log('MODAL DATA', data);
                _this.object.data.ruleContainer.push(data.item);
            }
        });
    };
    TopicDesignerPage.prototype.editRule = function (itemIndex) {
    };
    TopicDesignerPage.prototype.removeRule = function (itemIndex) {
    };
    TopicDesignerPage.prototype.newAction = function () {
        var _this = this;
        var modal = this.modalCtrl.create(RuleModalPage, { type: "action", index: this.object.data.actionContainer.length });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                console.log('MODAL DATA', data);
                _this.object.data.actionContainer.push(data.item);
            }
        });
    };
    TopicDesignerPage.prototype.editAction = function (itemIndex) {
    };
    TopicDesignerPage.prototype.removeAction = function (itemIndex) {
    };
    //  addAssociation(itemId: string, associationType: string, relation: RelationModel){
    TopicDesignerPage.prototype.addAssociation = function () {
        var _this = this;
        var modal = this.modalCtrl.create(RelationModalPage);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                console.log('MODAL DATA', data);
                _this.object.relations[data.reltype].push(data.item);
            }
        });
    };
    TopicDesignerPage.prototype.removeAssociation = function (associationType, relid) {
        this.dataService.removeAssociation(this.object._id, associationType, relid);
    };
    TopicDesignerPage.prototype.itemTapped = function (event, item) {
    };
    return TopicDesignerPage;
}());
TopicDesignerPage = __decorate([
    Component({
        selector: 'page-topic-designer',
        templateUrl: './topic-designer-page.html'
    }),
    __metadata("design:paramtypes", [User,
        NavController,
        ModalController,
        NativeGeocoder,
        LoadingController,
        NavParams,
        PopoverController,
        DataService])
], TopicDesignerPage);
export { TopicDesignerPage };
//# sourceMappingURL=topic-designer.js.map