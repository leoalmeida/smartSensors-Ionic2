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
// Observable operators
import 'rxjs/add/operator/catch';
import { ShowMapModal } from '../modals/show-map-modal';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { AccessoryDetailsPage } from '../accessory-details/accessory-details';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
var AccessoryPage = (function () {
    function AccessoryPage(user, navCtrl, navParams, platform, actionsheetCtrl, modalCtrl, dataService) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.pageTitle = "Acessórios";
        this.imgdef = "assets/icons/img/ionic.png";
        this.shouldShowDelete = false;
        this.listed = false;
        this.objects = [];
        this.filteredItems = [];
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
    AccessoryPage.prototype.gotomap = function (ref) {
        var modal = this.modalCtrl.create(ShowMapModal, { item: ref, key: this.userKey });
        modal.present();
    };
    // Push a search term into the observable stream.
    AccessoryPage.prototype.getItems = function (term) {
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
    AccessoryPage.prototype.ngOnInit = function () { this.getObjects(); };
    AccessoryPage.prototype.getObjects = function () {
        var _this = this;
        /*this.objects = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
              // return the http search observable
              ? this.dataService.getData(["object", "actuator" , this.userKey])
              // or the observable of empty heroes if there was no search term
              : Observable.of<any[]>([]))
            .catch(error => {
              // TODO: add real error handling
              console.log(error);
              return Observable.of<any[]>([]);
            });*/
        this.dataService.getData(["actuator", "ownedBy", this.userKey], null)
            .subscribe(function (data) { return _this.objects = data; }, function (error) { return _this.errorMessage = error; });
    };
    AccessoryPage.prototype.addAccessory = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        this.dataService.createKnowledge(item)
            .subscribe(function (data) { return _this.objects.push(data); }, function (error) { return _this.errorMessage = error; });
    };
    AccessoryPage.prototype.toggleList = function () { this.listed = !this.listed; };
    ;
    AccessoryPage.prototype.toggleDelete = function () { this.shouldShowDelete = !this.shouldShowDelete; };
    ;
    AccessoryPage.prototype.addItem = function () {
    };
    AccessoryPage.prototype.updateItem = function (itemId) {
        this.navCtrl.push(CreateKnowledgePage, {
            item: itemId,
            key: this.userKey
        });
    };
    AccessoryPage.prototype.removeItem = function (event, itemId) {
        this.dataService.removeKnowledge(itemId);
    };
    AccessoryPage.prototype.itemTapped = function (event, itemId) {
        this.navCtrl.push(AccessoryDetailsPage, {
            item: itemId,
            key: this.userKey
        });
    };
    AccessoryPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Acessórios',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Novo',
                    icon: !this.platform.is('ios') ? 'add' : null,
                    handler: function () {
                        var modal = _this.modalCtrl.create(ChooseItemModal, { key: _this.userKey, listType: 'equipment', itemType: 'actuator', title: 'Novo Acessório' });
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
                    text: 'Voltar',
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
    return AccessoryPage;
}());
AccessoryPage = __decorate([
    Component({
        selector: 'page-accessory',
        templateUrl: '../templates/list-page.html'
    }),
    __metadata("design:paramtypes", [User,
        NavController,
        NavParams,
        Platform,
        ActionSheetController,
        ModalController,
        DataService])
], AccessoryPage);
export { AccessoryPage };
//# sourceMappingURL=accessory.js.map