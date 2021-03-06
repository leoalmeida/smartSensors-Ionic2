import { Component, OnInit } from '@angular/core';
import { ModalController,NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { User } from '@ionic/cloud-angular';
// Observable operators
import 'rxjs/add/operator/catch';

import { ShowMapModal }  from '../modals/show-map-modal';
import { ConnectionConfModal } from '../modals/connection-conf';
import { ChooseItemModal }  from '../modals/choose-item-modal';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { AccessoryDetailsPage } from '../accessory-details/accessory-details';
import { SourceDetailsPage } from '../source-details/source-details';
import { ComplexObjectDetailsPage } from '../complex-details/complex-details';

import { DataService } from '../../providers/apiData.service';

import { AssociationModel, EquipmentModel, KnowledgeInterface } from '../../models/interfaces';


@Component({
  selector: 'page-equipments',
  templateUrl: './equipments.html'
})
export class EquipmentsPage  implements OnInit {
  syncing: any = false;
  errorMessage: string;
  selectedItem: string;
  objects: Array<KnowledgeInterface<EquipmentModel, AssociationModel>> = [];

  filteredItems: Array<KnowledgeInterface<EquipmentModel, AssociationModel>> = [];
  imgdef:string = "assets/icons/img/ionic.png";

  isAndroid: boolean = false;
  userKey: any;

  connConf: any = {};

  constructor(public user:User,
              public platform: Platform,
              public navCtrl: NavController,
              public actionsheetCtrl: ActionSheetController,
              public modalCtrl: ModalController,
              navParams: NavParams,
              public dataService:DataService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.isAndroid = platform.is('android');
    this.userKey = navParams.get('key');
    this.selectedItem = "sensor";

    platform.registerBackButtonAction(()=>this.getEquipments());
  }

  // Push a search term into the observable stream.
  getItems(selectedItem: string) {
    this.filteredItems = this.objects.filter((v) => {
      if (v.type.toLowerCase().indexOf(this.selectedItem.toLowerCase()) > -1) return true;
        return false;
    })
  }

  ngOnInit() { this.getEquipments(); }

  getEquipments() {
    this.syncing = true;
    this.dataService.getData<EquipmentModel>(["eq","ownedBy", this.userKey].join("/"),null)
                     .subscribe(
                       data => {
                         this.objects = data;
                         this.syncing = false;
                       },
                       error =>  {
                         this.errorMessage = <any>error
                         this.syncing = false;
                       });
  }

  connectItem(event: any, item: KnowledgeInterface<EquipmentModel, AssociationModel>){
    let modal = this.modalCtrl.create(ConnectionConfModal, {parameter: item.data});
    modal.present();

    modal.onWillDismiss((data: any) => {
      if (data) {
        this.connConf = data.connConf;
        console.log('MODAL DATA', this.connConf);

        /*this.serial.requestPermission().then(() => {
          this.serial.open({
            baudRate: this.connConf.baudRate

          }).then(() => {
            console.log('Serial connection opened');
          });
        }).catch((error: any) => console.log(error));*/
      }
    });
  }

  toggleItemStatus(item: any){
    var body = {
      "keys": [
        {"keyId": this.objects[item]._id, "status": this.objects[item].data.connected}
      ]
    };

    this.dataService.toggleEquipmentStatus(body, !this.objects[item].data.connected)
                     .subscribe( (data) => {
                       console.log ( data )
                       this.objects[item].data.connected = data.status;
                     },error =>  this.errorMessage = <any>error);

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
  }

  removeItem(event: any, itemId){
    this.dataService.removeKnowledge(itemId)
            .subscribe((res) => {
              console.log("item removido com sucesso: ", res)
              this.ngOnInit();
            });
  }

  showMap() {
    let modal = this.modalCtrl.create(ShowMapModal,{ items: this.objects, key: this.userKey });
    modal.present();
  }

  itemTapped(event, item) {
    var nextPage:any = null;
    if (item.type === "sensor")
      nextPage = SourceDetailsPage;
    else if (item.type === "actuator")
      nextPage = AccessoryDetailsPage;
    else nextPage = ComplexObjectDetailsPage;

    this.navCtrl.push(nextPage, {
        item: item._id,
        key: this.userKey
    });
  }

  openModal(type){
    let modal = this.modalCtrl.create(ChooseItemModal, {key: this.userKey, listType: 'equipment', title: 'Novo Equipamento'});
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        if (data.type)
          this.openModal(data.type);
        else{
          this.navCtrl.push(CreateKnowledgePage, {
              template: data.itemTemplate,
              connectedBoard : data.connectedBoard,
              item: "",
              key: this.userKey
          });
          console.log('MODAL DATA', data);
        };
      }
    });
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Equipamentos',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Novo',
          icon: !this.platform.is('ios') ? 'add' : null,
          handler: () => {
            this.openModal('equipment');
          }
        },
        {
          text: 'Remover items',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Sair',
          role: 'quit', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Sair clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
