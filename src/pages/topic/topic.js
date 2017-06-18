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
import { ModalController, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { TopicDesignerPage } from '../topic-designer/topic-designer';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { Geolocation } from '@ionic-native/geolocation';
var TopicPage = (function () {
    function TopicPage(user, navCtrl, navParams, platform, actionsheetCtrl, modalCtrl, dataService, geolocation) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.geolocation = geolocation;
        this.pageTitle = "Automação";
        this.imgdef = "assets/icons/img/ionic.png";
        this.shouldShowDelete = false;
        this.listed = false;
        this.newItemWindow = {
            title: "Novo Objeto",
            mensagem: "Qual o nome do objeto?",
            create: "Criar Objeto"
        };
        this.watchID = {};
        this.shouldAnimate = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.userKey = navParams.get('key');
    }
    TopicPage.prototype.ngOnInit = function () { this.getObjects(); };
    TopicPage.prototype.getObjects = function () {
        var _this = this;
        this.dataService.getData(["topic", "ownedBy", this.userKey], null)
            .subscribe(function (data) { return _this.objects = data; }, function (error) { return _this.errorMessage = error; });
    };
    TopicPage.prototype.addTopic = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        this.dataService.createKnowledge(item)
            .subscribe(function (data) { return _this.objects.push(data); }, function (error) { return _this.errorMessage = error; });
    };
    TopicPage.prototype.toggleList = function () { this.listed = !this.listed; };
    ;
    TopicPage.prototype.toggleDelete = function () { this.shouldShowDelete = !this.shouldShowDelete; };
    ;
    TopicPage.prototype.toggleItemStatus = function (item) {
        var _this = this;
        if (!this.watchID[item] || this.watchID[item].closed)
            this.watchID[item] = this.geolocation.watchPosition({ enableHighAccuracy: true, timeout: 60000, maximumAge: 0 })
                .filter(function (p) { return p.coords !== undefined; })
                .subscribe(function (position) {
                var options = {
                    "topicKeys": [
                        { "topicId": item }
                    ],
                    "coordinates": [position.coords.latitude, position.coords.longitude],
                    "radius": 3000
                };
                _this.dataService.evaluateTopic(options)
                    .subscribe(function (data) {
                    console.log(data);
                }, function (error) { return _this.errorMessage = error; });
            }, function (error) { return _this.errorMessage = error; });
        else
            this.watchID[item].unsubscribe();
    };
    ;
    TopicPage.prototype.addItem = function () {
        /*let modal = this.modalCtrl.create(ChooseItemModal);
        modal.present();
        modal.onWillDismiss((data: any) => {
          if (data) {
            this.navCtrl.push(CreateKnowledgePage, {
              info: data,
              item: "",
              key: this.userKey
            });
            console.log('MODAL DATA', data);
          }
        });*/
    };
    TopicPage.prototype.updateItem = function (itemId) {
        this.navCtrl.push(CreateKnowledgePage, {
            item: itemId,
            key: this.userKey
        });
    };
    TopicPage.prototype.removeItem = function (event, itemId) {
        this.dataService.removeKnowledge(itemId);
    };
    TopicPage.prototype.itemTapped = function (event, itemId) {
        this.navCtrl.push(TopicDesignerPage, {
            item: itemId,
            key: this.userKey
        });
    };
    TopicPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Tópicos',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Novo Tópico',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        var modal = _this.modalCtrl.create(ChooseItemModal, { key: _this.userKey, listType: 'equipment', itemType: 'topic', title: 'Novo Tópico' });
                        modal.present();
                        modal.onWillDismiss(function (data) {
                            if (data) {
                                _this.navCtrl.push(CreateKnowledgePage, {
                                    template: data.itemTemplate,
                                    item: "",
                                    key: _this.userKey
                                });
                                console.log('MODAL DATA', data);
                            }
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return TopicPage;
}());
TopicPage = __decorate([
    Component({
        selector: 'page-topic',
        templateUrl: '../templates/list-page.html'
    }),
    __metadata("design:paramtypes", [User,
        NavController,
        NavParams,
        Platform,
        ActionSheetController,
        ModalController,
        DataService,
        Geolocation])
], TopicPage);
export { TopicPage };
//# sourceMappingURL=topic.js.map