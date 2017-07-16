import { Component } from '@angular/core';
import { ModalController,NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

import { ChooseItemModal }  from '../modals/choose-item-modal';

import { TopicDesignerPage } from '../topic-designer/topic-designer';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';

import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';


import { Geolocation } from '@ionic-native/geolocation';
import { ShowMapModal } from '../modals/show-map-modal';

@Component({
  selector: 'page-topic',
  templateUrl: '../templates/list-page.html'
})
export class TopicPage {
  syncing: any = false;
  pageTitle: string = "Minhas Regras";
  imgdef:string = "assets/icons/img/ionic.png";
  shouldShowDelete:boolean = false;
  listed:boolean = false;


  errorMessage: string;
  selectedItem: any;
  userKey: any;
  objects: Array<{}>;

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
              public dataService:DataService,
              private geolocation: Geolocation) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userKey = navParams.get('key');

    platform.registerBackButtonAction(()=>this.getObjects());
  }

  ngOnInit() { this.getObjects(); }

  getObjects() {
    this.syncing = true;
    this.dataService.getData(["eq", "topic" , "ownedBy", this.userKey].join("/"),null)
      .subscribe(
        data => {
          this.objects = data;
          this.syncing = false;
        },
        error =>  {
          this.errorMessage = <any>error;
          this.syncing = false;
        });
  }

  addTopic(item) {
    if (!item) { return; }
    this.dataService.createKnowledge(item)
      .subscribe(
        data  => this.objects.push(data),
        error =>  this.errorMessage = <any>error);
  }

  toggleList(){this.listed = !this.listed};
  toggleDelete(){this.shouldShowDelete = !this.shouldShowDelete};

  toggleItemStatus(item: any) {
    /*if (!this.watchID[item] || this.watchID[item].closed)
      this.watchID[item] = this.geolocation.watchPosition({ enableHighAccuracy : true,timeout : 60000,maximumAge : 0 })
          .filter((p) => p.coords !== undefined)
          .subscribe(position => {
              var options = {
                "topicKeys": [
                  { "topicId": item }
                ],
                "coordinates": [position.coords.latitude, position.coords.longitude],
                "radius": 3000
              };

              this.dataService.evaluateTopic(options)
                .subscribe((data) => {
                    console.log ( data );
                  },error =>  this.errorMessage = <any>error);
            }, error => this.errorMessage = <any>error);
    else this.watchID[item].unsubscribe();
*/

    let modal = this.modalCtrl.create(ShowMapModal,{ item: item, model: "dynamicTopic", key: this.userKey});

    modal.present();
  };


  showMap() {
    let modal = this.modalCtrl.create(ShowMapModal,{ items: this.objects, key: this.userKey, type: "topic"});
    modal.present();
  }

  addItem() {
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

  itemTapped(event: any, itemId: string) {
    this.navCtrl.push(TopicDesignerPage, {
      item: itemId,
      key: this.userKey
    });
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Tópicos',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Novo Tópico',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            let modal = this.modalCtrl.create(ChooseItemModal, {key: this.userKey, listType: 'equipment', itemType: 'topic', title: 'Novo Tópico'});
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
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
