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
import { ActionSheetController, ModalController, NavController, NavParams, Platform } from 'ionic-angular';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { ShowMapModal } from '../modals/show-map-modal';
import { AccessoryDetailsPage } from '../accessory-details/accessory-details';
import { HubDetailsPage } from '../hub-details/hub-details';
import { ProfilePage } from '../profile/profile';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { TopicDesignerPage } from '../topic-designer/topic-designer';
import { RelationModalPage } from '../modals/relation-item-modal';
var SourceDetailsPage = SourceDetailsPage_1 = (function () {
    function SourceDetailsPage(user, navCtrl, navParams, platform, modalCtrl, actionsheetCtrl, dataService) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.dataService = dataService;
        this.imgdef = "assets/icons/img/ionic.png";
        this.listAttributes = false;
        this.listConfigurations = false;
        this.configurations = [];
        this.info = [];
        this.knowledges = [];
        this.constantsWindows = {
            newItemWindow: {
                title: "Nova Associação",
                mensagem: "Qual o nome da associação?"
            },
            create: "Criar Associação",
            update: "Salvar"
        };
        this.shouldAnimate = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.userKey = navParams.get('key');
        this.changed = [];
    }
    SourceDetailsPage.prototype.ngOnInit = function () {
        this.selectObject();
        this.selectAssociations();
    };
    SourceDetailsPage.prototype.selectObject = function () {
        var _this = this;
        this.dataService.getOne([this.selectedItem])
            .subscribe(function (result) {
            _this.pageTitle = result.data.name;
            _this.info = result.data.info;
            _this.configurations = result.data.configurations;
            _this.data = result.data;
            _this.object = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    SourceDetailsPage.prototype.selectAssociations = function () {
        var _this = this;
        this.dataService.getData(["connectedTo", this.selectedItem], null)
            .subscribe(function (objects) {
            _this.knowledges = objects;
        });
    };
    SourceDetailsPage.prototype.transformDate = function (date) {
        return new Date(date).toLocaleString();
    };
    SourceDetailsPage.prototype.propertyTapped = function (event, item) {
        /*this.navCtrl.push(HubDetailsPage, {
            item: item
        });*/
    };
    SourceDetailsPage.prototype.toggleUpdateAttr = function (evt, ref, item) {
        if (evt.checked !== this.data[ref][item])
            this.updateAttribute(["data", ref, item].join("."), this.data[ref][item]);
        //this.changed[ref + item]=! this.changed[ref + item];
    };
    SourceDetailsPage.prototype.addAssociation = function (itemId, associationType, relation) {
        this.dataService.addAssociation(itemId, associationType, relation);
    };
    SourceDetailsPage.prototype.removeAssociation = function (itemId, associationType, relid) {
        this.dataService.removeAssociation(itemId, associationType, relid);
    };
    SourceDetailsPage.prototype.openModal = function (type, ref) {
        var _this = this;
        var modal = this.modalCtrl.create(RelationModalPage);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                console.log('MODAL DATA', data);
                if (type === 'add') {
                    var index = _this.object.data[ref].push(data.item);
                    _this.updateAttribute(["data", ref].join("."), index);
                }
                _this.updateAttribute(["data", ref].join("."), _this.object[ref][index]);
            }
        });
    };
    SourceDetailsPage.prototype.updateAttribute = function (ref, item) {
        //let changes = {};
        //changes[ref + item] = this.values[ref + item];
        this.dataService.updateAttribute(this.selectedItem, { ref: item })
            .subscribe(function (data) {
            console.log(data['ok']);
        });
    };
    SourceDetailsPage.prototype.removeAttribute = function (item) {
        var _this = this;
        this.dataService.removeAttribute(this.selectedItem, item)
            .subscribe(function (data) {
            console.log(data['ok']);
            _this.selectObject();
        });
    };
    SourceDetailsPage.prototype.showMap = function () {
        var modal = this.modalCtrl.create(ShowMapModal, { items: [].push(this.object), key: this.userKey });
        modal.present();
    };
    SourceDetailsPage.prototype.itemTapped = function (event, item) {
        var nextPage = null;
        if (item.type === "sensor")
            nextPage = SourceDetailsPage_1;
        else if (item.type === "actuator")
            nextPage = AccessoryDetailsPage;
        else if (item.type === "board")
            nextPage = HubDetailsPage;
        else if (item.type === "topic")
            nextPage = TopicDesignerPage;
        else
            nextPage = ProfilePage;
        this.navCtrl.push(nextPage, {
            item: item._id,
            key: this.userKey
        });
    };
    SourceDetailsPage.prototype.updateItem = function () {
        this.navCtrl.push(CreateKnowledgePage, {
            item: this.selectedItem,
            key: this.userKey
        });
    };
    SourceDetailsPage.prototype.editItem = function (event, itemIndex) {
    };
    SourceDetailsPage.prototype.enableItem = function (event, itemIndex) {
    };
    SourceDetailsPage.prototype.removeItem = function () {
        this.dataService.removeKnowledge(this.selectedItem);
    };
    SourceDetailsPage.prototype.createItem = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ChooseItemModal, { key: this.userKey, listType: 'equipment', itemType: 'sensor', title: 'Novo Sensor' });
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
    };
    SourceDetailsPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Sensors',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Novo',
                    icon: !this.platform.is('ios') ? 'add' : null,
                    handler: function () {
                        _this.createItem();
                    }
                },
                {
                    text: 'Editar',
                    icon: !this.platform.is('ios') ? 'create' : null,
                    handler: function () {
                        _this.updateItem();
                    }
                },
                {
                    text: 'Remover',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                        _this.removeItem();
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
    return SourceDetailsPage;
}());
SourceDetailsPage = SourceDetailsPage_1 = __decorate([
    Component({
        selector: 'page-source-details',
        templateUrl: '../templates/details-page.html'
    }),
    __metadata("design:paramtypes", [User,
        NavController,
        NavParams,
        Platform,
        ModalController,
        ActionSheetController,
        DataService])
], SourceDetailsPage);
export { SourceDetailsPage };
var SourceDetailsPage_1;
//# sourceMappingURL=source-details.js.map