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
import { User } from '@ionic/cloud-angular';
// Observable operators
import 'rxjs/add/operator/catch';
import { ShowMapModal } from '../modals/show-map-modal';
import { ConnectionConfModal } from '../modals/connection-conf';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { AccessoryDetailsPage } from '../accessory-details/accessory-details';
import { SourceDetailsPage } from '../source-details/source-details';
import { HubDetailsPage } from '../hub-details/hub-details';
import { DataService } from '../../providers/apiData.service';
var EquipmentsPage = (function () {
    function EquipmentsPage(user, platform, navCtrl, actionsheetCtrl, modalCtrl, navParams, dataService) {
        this.user = user;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.objects = [];
        this.filteredItems = [];
        this.imgdef = "assets/icons/img/ionic.png";
        this.equipTitle = "equipamentos";
        this.isAndroid = false;
        this.connConf = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.isAndroid = platform.is('android');
        this.userKey = navParams.get('key');
        this.selectedItem = "board";
    }
    // Push a search term into the observable stream.
    EquipmentsPage.prototype.getItems = function (selectedItem) {
        var _this = this;
        this.filteredItems = this.objects.filter(function (v) {
            if (v.type.toLowerCase().indexOf(_this.selectedItem.toLowerCase()) > -1)
                return true;
            return false;
        });
    };
    EquipmentsPage.prototype.ngOnInit = function () { this.getEquipments(); };
    EquipmentsPage.prototype.getEquipments = function () {
        var _this = this;
        this.dataService.getData(["ownedBy", this.userKey], null)
            .subscribe(function (data) { return _this.objects = data; }, function (error) { return _this.errorMessage = error; });
    };
    EquipmentsPage.prototype.connectItem = function (event, item) {
        var _this = this;
        var modal = this.modalCtrl.create(ConnectionConfModal, { parameter: item.data });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.connConf = data.connConf;
                console.log('MODAL DATA', _this.connConf);
                /*this.serial.requestPermission().then(() => {
                  this.serial.open({
                    baudRate: this.connConf.baudRate
        
                  }).then(() => {
                    console.log('Serial connection opened');
                  });
                }).catch((error: any) => console.log(error));*/
            }
        });
    };
    EquipmentsPage.prototype.toggleItemStatus = function (item) {
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
        /*(
         socket.emit("startBoard", JSON.stringify({
         ip: vm.hostip,
         port: vm.hostport,
         email: currentUser.email,
         board: vm.listItems[currentNavItem].$id,
         serialport: ""
         }));
         */
        /*
    
        $mdDialog.show({
         controller: WaitController,
         parent: angular.element(document.body),
         targetEvent: $event,
         templateUrl: 'app/core/layouts/wait.dialog.templ.html',
         clickOutsideToClose: false,
         openFrom: {
         top: -50,
         width: 30,
         height: 80
         },
         closeTo: {
         left: 1500
         }
         });
    
         function WaitController($scope, $mdDialog) {
         $scope.hide = function() {vm.status = 'Processado com sucesso.'};
         $scope.close = function(result) {$mdDialog.hide(result)};
         $scope.cancel = function() {vm.status = 'You cancelled the dialog.'};
         };
    
    
        // var email = "leoalmeida.rj@gmail.com"; //currentUser.email,
        alert = ApiDataService.startBoard({
          ip: configurations.hostip,
          port: configurations.hostport,
          email: configurations.email,
          board: configurations.board,
          serialport: configurations.serialport
        }, cbStartBoardSuccess, cbStartBoardError);
    
        */
    };
    EquipmentsPage.prototype.removeItem = function (event, itemId) {
        this.dataService.removeKnowledge(itemId);
    };
    EquipmentsPage.prototype.editItem = function (event, item) {
    };
    EquipmentsPage.prototype.showMap = function () {
        var modal = this.modalCtrl.create(ShowMapModal, { items: this.objects, key: this.userKey });
        modal.present();
    };
    EquipmentsPage.prototype.itemTapped = function (event, item) {
        var nextPage = null;
        if (item.type === "sensor")
            nextPage = SourceDetailsPage;
        else if (item.type === "actuator")
            nextPage = AccessoryDetailsPage;
        else
            nextPage = HubDetailsPage;
        this.navCtrl.push(nextPage, {
            item: item._id,
            key: this.userKey
        });
    };
    EquipmentsPage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Equipamentos',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Novo',
                    icon: !this.platform.is('ios') ? 'add' : null,
                    handler: function () {
                        var modal = _this.modalCtrl.create(ChooseItemModal, { key: _this.userKey, listType: 'equipment', title: 'Novo Equipamento' });
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
    return EquipmentsPage;
}());
EquipmentsPage = __decorate([
    Component({
        selector: 'page-equipments',
        templateUrl: './equipments.html'
    }),
    __metadata("design:paramtypes", [User,
        Platform,
        NavController,
        ActionSheetController,
        ModalController,
        NavParams,
        DataService])
], EquipmentsPage);
export { EquipmentsPage };
//# sourceMappingURL=equipments.js.map