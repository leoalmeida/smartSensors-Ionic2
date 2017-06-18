import { Component, OnInit } from '@angular/core';
import { ModalController,NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import 'rxjs/add/operator/catch';

import { HubDetailsPage } from '../hub-details/hub-details';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';
import { ChooseItemModal }  from '../modals/choose-item-modal';
import { ShowMapModal }  from '../modals/show-map-modal';

import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { AssociationModel, EquipmentModel, KnowledgeModel } from '../../models/interfaces';

@Component({
  selector: 'page-hub',
  templateUrl: '../templates/list-page.html'
})
export class HubPage implements OnInit {
  pageTitle: string = "Hubs";
  imgdef:string = "assets/icons/img/ionic.png";
  shouldShowDelete:boolean = false;
  listed:boolean = false;

  errorMessage: string;
  selectedItem: any;
  userKey: any;
  objects: any[];
  filteredItems: any[];

  newItemWindow: Object = {
    title: "Novo Objeto",
    mensagem: "Qual o nome do objeto?",
    create: "Criar Objeto"
  };

  watchID = {};

  shouldAnimate: boolean = false;

  constructor(public user:User,
              public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              public modalCtrl: ModalController,
              public dataService:DataService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userKey = navParams.get('key');
  }

  // Push a search term into the observable stream.
  getItems(term: string) {
    // Reset items back to all of the items
    //this.initializeItems();
    // if the value is an empty string don't filter the items
    if (term.trim() == '') {
      return;
    }
    this.filteredItems = this.objects.filter((v) => {
      if (v.data["next"]["type"].toLowerCase().indexOf(term.toLowerCase()) > -1) return true;
        return false;
    })
  }

  ngOnInit() { this.getObjects(); }

  getObjects() {
    this.dataService.getData<EquipmentModel>(["board" , "ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeModel<EquipmentModel, AssociationModel>[]) => this.objects = data,
        error =>  this.errorMessage = <any>error);
  }

  toggleList(){this.listed = !this.listed};
  toggleDelete(){this.shouldShowDelete = !this.shouldShowDelete};

  toggleItemStatus(item: any){

    var body = {
      "boardKeys": [
        {"boardId": item}
      ]
    };

    this.dataService.toggleEquipmentStatus(body, !this.objects[item].data.connected)
                     .subscribe(
                       (data) => {
                         console.log ( data )
                         this.objects[item].data.connected = data.status;
                       },error =>  this.errorMessage = <any>error);
  }

  addItem() {
    let modal = this.modalCtrl.create(ChooseItemModal);
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
    });
  }

  updateItem(itemId: string) {
    this.navCtrl.push(CreateKnowledgePage, {
        item: itemId,
        key: this.userKey
    });
  }

  removeItem(event: any, itemId: string){
    this.dataService.removeKnowledge(itemId)
  }

  showMap() {
    let modal = this.modalCtrl.create(ShowMapModal,{ items: this.objects, key: this.userKey });
    modal.present();
  }

  itemTapped(event: any, itemId: string) {
    this.navCtrl.push(HubDetailsPage, {
        item: itemId,
        key: this.userKey
    });
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Hubs',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Novo',
          icon: !this.platform.is('ios') ? 'add' : null,
          handler: () => {
            let modal = this.modalCtrl.create(ChooseItemModal, {key: this.userKey, listType: 'equipment', itemType: 'board', title: 'Novo Hub'});
            modal.present();
            modal.onWillDismiss((data: any) => {
              if (data) {
                this.navCtrl.push(CreateKnowledgePage, {
                    template: data.itemTemplate,
                    item: "",
                    key: this.userKey
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
