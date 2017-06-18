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
import { ModalContentPage } from '../modals/attribute-item';
import { ShowMapModal } from '../modals/show-map-modal';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { AccessoryDetailsPage } from '../accessory-details/accessory-details';
import { SourceDetailsPage } from '../source-details/source-details';
import { ProfilePage } from '../profile/profile';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { TopicDesignerPage } from '../topic-designer/topic-designer';
var HubDetailsPage = (function () {
    function HubDetailsPage(user, navCtrl, navParams, platform, modalCtrl, actionsheetCtrl, dataService) {
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
        this.update = false;
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
    HubDetailsPage.prototype.ngOnInit = function () {
        this.selectObject();
        this.selectAssociations();
    };
    HubDetailsPage.prototype.selectObject = function () {
        var _this = this;
        this.dataService.getOne([this.selectedItem])
            .subscribe(function (result) {
            _this.object = result;
            _this.pageTitle = _this.object.data.name;
            _this.info = _this.object.data.info;
            _this.configurations = _this.object.data.configurations;
            _this.data = _this.object.data;
        }, function (error) { return _this.errorMessage = error; });
    };
    HubDetailsPage.prototype.selectAssociations = function () {
        var _this = this;
        this.dataService.getData(["connectedTo", this.selectedItem], null)
            .subscribe(function (objects) {
            _this.knowledges = objects;
        });
    };
    HubDetailsPage.prototype.transformDate = function (date) {
        return new Date(date).toLocaleString();
    };
    HubDetailsPage.prototype.propertyTapped = function (event, item) {
        /*this.navCtrl.push(HubDetailsPage, {
            item: item
        });*/
    };
    HubDetailsPage.prototype.toggleUpdateAttr = function (evt, ref, item) {
        if (evt.checked !== this.data[ref][item])
            this.updateAttribute(["data", ref, item].join("."), this.data[ref][item]);
        //this.changed[ref + item]=! this.changed[ref + item];
    };
    HubDetailsPage.prototype.addAssociation = function (itemId, associationType, relation) {
        this.dataService.addAssociation(itemId, associationType, relation);
    };
    HubDetailsPage.prototype.removeAssociation = function (itemId, associationType, relid) {
        this.dataService.removeAssociation(itemId, associationType, relid);
    };
    HubDetailsPage.prototype.openModal = function (type, ref) {
        var _this = this;
        var modal = this.modalCtrl.create(ModalContentPage);
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
    HubDetailsPage.prototype.updateAttribute = function (ref, item) {
        //let changes = {};
        //changes[ref + item] = this.values[ref + item];
        this.dataService.updateAttribute(this.selectedItem, { ref: item })
            .subscribe(function (data) {
            console.log(data['ok']);
        });
    };
    HubDetailsPage.prototype.removeAttribute = function (item) {
        var _this = this;
        this.dataService.removeAttribute(this.selectedItem, item)
            .subscribe(function (data) {
            console.log(data['ok']);
            _this.selectObject();
        });
    };
    HubDetailsPage.prototype.showMap = function () {
        var modal = this.modalCtrl.create(ShowMapModal, { items: [].push(this.object), key: this.userKey });
        modal.present();
    };
    HubDetailsPage.prototype.itemTapped = function (event, item) {
        var nextPage = null;
        if (item.type === "sensor")
            nextPage = SourceDetailsPage;
        else if (item.type === "actuator")
            nextPage = AccessoryDetailsPage;
        else if (item.type === "topic")
            nextPage = TopicDesignerPage;
        else
            nextPage = ProfilePage;
        this.navCtrl.push(nextPage, {
            item: item._id,
            key: this.userKey
        });
    };
    HubDetailsPage.prototype.updateItem = function () {
        this.navCtrl.push(CreateKnowledgePage, {
            item: this.selectedItem,
            key: this.userKey
        });
    };
    HubDetailsPage.prototype.editItem = function (event, itemIndex) {
    };
    HubDetailsPage.prototype.enableItem = function (event, itemIndex) {
    };
    HubDetailsPage.prototype.removeItem = function () {
        this.dataService.removeKnowledge(this.selectedItem);
    };
    HubDetailsPage.prototype.createItem = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ChooseItemModal, { key: this.userKey, listType: 'equipment', itemType: 'board', title: 'Novo Hub' });
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
    HubDetailsPage.prototype.toggleItemStatus = function () {
        var _this = this;
        var body = {
            "boardKeys": [
                { "boardId": this.selectedItem }
            ]
        };
        this.dataService.toggleEquipmentStatus(body, !this.object.data.connected)
            .subscribe(function (data) {
            console.log(data);
            _this.object.data.connected = data.status;
        }, function (error) { return _this.errorMessage = error; });
    };
    HubDetailsPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Hubs',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Iniciar',
                    icon: !this.platform.is('ios') ? 'play' : null,
                    handler: function () {
                        _this.toggleItemStatus();
                    }
                },
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
    return HubDetailsPage;
}());
HubDetailsPage = __decorate([
    Component({
        selector: 'page-hub-details',
        templateUrl: '../templates/details-page.html'
    }),
    __metadata("design:paramtypes", [User,
        NavController,
        NavParams,
        Platform,
        ModalController,
        ActionSheetController,
        DataService])
], HubDetailsPage);
export { HubDetailsPage };
//# sourceMappingURL=hub-details.js.map