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
import 'rxjs/add/operator/catch';
import { HubDetailsPage } from '../hub-details/hub-details';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { ShowMapModal } from '../modals/show-map-modal';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
var HubPage = (function () {
    function HubPage(user, navCtrl, navParams, platform, actionsheetCtrl, modalCtrl, dataService) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.pageTitle = "Hubs";
        this.imgdef = "assets/icons/img/ionic.png";
        this.shouldShowDelete = false;
        this.listed = false;
        this.newItemWindow = {
            title: "Novo Objeto",
            mensagem: "Qual o nome do objeto?",
            create: "Criar Objeto"
        };
        this.shouldAnimate = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.userKey = navParams.get('key');
    }
    // Push a search term into the observable stream.
    HubPage.prototype.getItems = function (term) {
        // Reset items back to all of the items
        //this.initializeItems();
        // if the value is an empty string don't filter the items
        if (term.trim() == '') {
            return;
        }
        this.filteredItems = this.objects.filter(function (v) {
            if (v.data["next"]["type"].toLowerCase().indexOf(term.toLowerCase()) > -1)
                return true;
            return false;
        });
    };
    HubPage.prototype.ngOnInit = function () { this.getObjects(); };
    HubPage.prototype.getObjects = function () {
        var _this = this;
        this.dataService.getData(["board", "ownedBy", this.userKey], null)
            .subscribe(function (data) { return _this.objects = data; }, function (error) { return _this.errorMessage = error; });
    };
    HubPage.prototype.toggleList = function () { this.listed = !this.listed; };
    ;
    HubPage.prototype.toggleDelete = function () { this.shouldShowDelete = !this.shouldShowDelete; };
    ;
    HubPage.prototype.toggleItemStatus = function (item) {
        var _this = this;
        var body = {
            "boardKeys": [
                { "boardId": item }
            ]
        };
        this.dataService.toggleEquipmentStatus(body, !this.objects[item].data.connected)
            .subscribe(function (data) {
            console.log(data);
            _this.objects[item].data.connected = data.status;
        }, function (error) { return _this.errorMessage = error; });
    };
    HubPage.prototype.addItem = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ChooseItemModal);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.navCtrl.push(CreateKnowledgePage, {
                    info: data,
                    item: "",
                    key: _this.userKey
                });
                console.log('MODAL DATA', data);
            }
        });
    };
    HubPage.prototype.updateItem = function (itemId) {
        this.navCtrl.push(CreateKnowledgePage, {
            item: itemId,
            key: this.userKey
        });
    };
    HubPage.prototype.removeItem = function (event, itemId) {
        this.dataService.removeKnowledge(itemId);
    };
    HubPage.prototype.showMap = function () {
        var modal = this.modalCtrl.create(ShowMapModal, { items: this.objects, key: this.userKey });
        modal.present();
    };
    HubPage.prototype.itemTapped = function (event, itemId) {
        this.navCtrl.push(HubDetailsPage, {
            item: itemId,
            key: this.userKey
        });
    };
    HubPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Hubs',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Novo',
                    icon: !this.platform.is('ios') ? 'add' : null,
                    handler: function () {
                        var modal = _this.modalCtrl.create(ChooseItemModal, { key: _this.userKey, listType: 'equipment', itemType: 'board', title: 'Novo Hub' });
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
                    text: 'Remover items',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Sair',
                    role: 'quit',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Sair clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return HubPage;
}());
HubPage = __decorate([
    Component({
        selector: 'page-hub',
        templateUrl: '../templates/list-page.html'
    }),
    __metadata("design:paramtypes", [User,
        NavController,
        NavParams,
        Platform,
        ActionSheetController,
        ModalController,
        DataService])
], HubPage);
export { HubPage };
//# sourceMappingURL=hub.js.map