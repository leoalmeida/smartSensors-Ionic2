import { Component } from '@angular/core';
import {
  AlertController, LoadingController, ModalController, NavController, NavParams,
  Platform
} from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';


import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { ShowMapModal }  from '../modals/show-map-modal';

import { AccessoryDetailsPage } from '../accessory-details/accessory-details';
import { HubDetailsPage } from '../hub-details/hub-details';
import { ProfilePage } from '../profile/profile';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';

import { RelationModel } from '../../models/relation.model';

import {
  AssociationModel, AttributeModel, EquipmentModel, KnowledgeInterface
} from '../../models/interfaces';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { TopicDesignerPage } from '../topic-designer/topic-designer';
import { RelationModalPage } from '../modals/relation-item-modal';
import { ReferenceService } from '../../providers/reference.service';

@Component({
  selector: 'page-source-details',
  templateUrl: '../templates/details-page.html'
})
export class SourceDetailsPage {
  pageTitle: string;
  imgdef:string = "assets/icons/img/ionic.png";
  listAttributes: boolean = false;
  listConfigurations: boolean = false;

  errorMessage: string;
  selectedItem: any;
  userKey: any;

  selectedSegment: string = "basics";

  object: KnowledgeInterface<EquipmentModel, AssociationModel>;
  configurations: Array<AttributeModel> = [];

  data: EquipmentModel;
  info: Array<AttributeModel> = [];
  knowledges: Array<KnowledgeInterface<EquipmentModel, AssociationModel>> = [];
  changed: boolean[];

  refData = {};

  constantsWindows: Object = {
    newItemWindow: {
      title: "Nova Associação",
      mensagem: "Qual o nome da associação?"
    },
    create: "Criar Associação",
    update: "Salvar"
  };

  shouldAnimate: boolean = false;

  selectComponentOpen: boolean;
  connectedParent: any = {};
  componentList: KnowledgeInterface<EquipmentModel, AssociationModel>[] = [];
  complexCompList: KnowledgeInterface<EquipmentModel, AssociationModel>[] = [];

  constructor(public user:User,
              public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              private geolocation: Geolocation,
              private geocoder: NativeGeocoder,
              private locac: LocationAccuracy,
              private diagnostic: Diagnostic,
              private dataService:DataService,
              private refService: ReferenceService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userKey = navParams.get('key');
    this.changed = [];
    this.getRefData();
    this.getComplexList();
    this.getEquipmentList();
  }

  ngOnInit() {
    this.selectObject();
    this.selectAssociations();
  }

  selectObject() {
    this.dataService.getOne<EquipmentModel>([ this.selectedItem])
                     .subscribe((result:KnowledgeInterface<EquipmentModel, AssociationModel>) => {
                       this.pageTitle  = result.data.name;
                       this.info = result.data.info;
                       this.configurations = result.data.configurations;
                       this.data = result.data;
                       this.object = result;
                     },error =>  this.errorMessage = <any>error);
  }

  getRefData() {
    this.refService.getRefData()
      .subscribe((values) => {
        this.refData = values;
      });
  }

  selectAssociations() {
    this.dataService.getData(["connectedTo", this.selectedItem],null)
                  .subscribe((objects: any[]) => {
      this.knowledges = objects;
    });
  }

  transformDate(date){
    return new Date(date).toLocaleString();
  }

  propertyTapped(event, item) {
      /*this.navCtrl.push(HubDetailsPage, {
          item: item
      });*/
  }


  toggleUpdateAttr(evt, ref, item){
    if(evt.checked !== this.data[ref][item])
      this.updateAttribute(["data", ref, item].join("."), this.data[ref][item]);
      //this.changed[ref + item]=! this.changed[ref + item];
  }

  addAssociation(associationType: string, selectedRel, relation1: RelationModel, relation2: RelationModel){
    this.dataService.addAssociation(this.selectedItem, associationType, relation1)
              .subscribe((res) => {
                //TODO Create Toast message
                console.log("Associação inserida com sucesso")
                this.dataService.addAssociation(selectedRel, associationType, relation2)
                          .subscribe((res) => {
                            //TODO Create Toast message
                            console.log("Associação inserida com sucesso");
                            this.selectAssociations();
                          });
              });
  }

  removeAssociation(associationType: string, relid: string){
    this.dataService.removeAssociation(this.selectedItem, associationType , relid)
              .subscribe((res) => {
                //TODO Create Toast message
                console.log("Associação removida com sucesso")
                this.dataService.removeAssociation(relid, associationType, this.selectedItem)
                          .subscribe((relres) => {
                            //TODO Create Toast message
                            console.log("Associação removida com sucesso");
                            this.selectAssociations();
                          });
              });
  }

  geoLocate(){

    let options = {
      enableHighAccuracy: true
    };

    if (this.platform.is('cordova')) {
      this.locac.canRequest ().then ( ( res: boolean ) => {
        if ( res ) {
          this.locac.request ( this.locac.REQUEST_PRIORITY_HIGH_ACCURACY ).then ( () => {
            this.geolocation.getCurrentPosition ( options ).then ( ( position: Geoposition ) => {
                this.geocoder.reverseGeocode ( position.coords.latitude, position.coords.longitude )
                              .then (( res: NativeGeocoderReverseResult ) => {
                                this.object.location.coordinates = [position.coords.latitude, position.coords.longitude];
                                this.object.location.text = res.countryName;
                                console.log(res);
                              });
            } ).catch ( ( error ) => {
              console.error ( "Accuracy request failed: error code=" + error.code + "; error message=" + error.message );

              if ( error.code !== this.locac.ERROR_USER_DISAGREED ) {
                let prompt = this.alertCtrl.create ( {
                  title:   'Falha ao buscar a localização',
                  message: "Gostaria de ir para a página de configurações?",
                  buttons: [
                    {
                      text:    'Voltar',
                      handler: data => {
                        console.log ( 'Cancel clicked' );
                      }
                    },
                    {
                      text:    'Configurar',
                      handler: data => {
                        console.log ( 'go clicked' );
                        this.diagnostic.switchToLocationSettings ();
                      }
                    }
                  ]
                } );

                prompt.present ();
              }

            } );
          }, ( error ) => {
            console.log ( 'Error getting location', error );
            let alert = this.alertCtrl.create ( {
              title:    'Falha na Geolocalização!',
              subTitle: error,
              buttons:  [ 'OK' ]
            } );
            alert.present ();
          } )
        }
      } )
    }else{
      this.geolocation.getCurrentPosition ( options )
        .then ((position: Geoposition ) => {
            this.object.location.coordinates = [position.coords.latitude, position.coords.longitude];
            this.object.location.text = "";
          }).catch (( error ) => {
            console.error ( "Accuracy request failed: error code=" + error.code + "; error message=" + error.message );
          });
    }

  }

  openModal(type, ref) {
    let modal = this.modalCtrl.create(RelationModalPage);
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        if (type==='add') {
          var index = this.object.data[ref].push(data.item);
          this.updateAttribute(["data", ref].join("."), index);
        }
        this.updateAttribute(["data", ref].join("."), this.object[ref][index]);
      }
    });
  }


  updateAttribute(ref, item){
    //let changes = {};
    //changes[ref + item] = this.values[ref + item];
    this.dataService.updateAttribute(this.selectedItem, {ref: item})
          .subscribe((data: any) => {
            console.log(data['ok']);
          });
  }

  removeAttribute(item){
    this.dataService.removeAttribute(this.selectedItem, item)
        .subscribe((data: any) => {
          console.log(data['ok']);
          this.selectObject();
        });
  }

  showMap() {
    let modal = this.modalCtrl.create(ShowMapModal,{ items: [].push(this.object), key: this.userKey });
    modal.present();
  }

  itemTapped(event, item) {
    var nextPage:any = null;
    if (item.type === "sensor") nextPage = SourceDetailsPage;
    else if (item.type === "actuator") nextPage = AccessoryDetailsPage;
    else if (item.type === "board") nextPage = HubDetailsPage;
    else if (item.type === "topic") nextPage = TopicDesignerPage;
    else nextPage = ProfilePage;

    this.navCtrl.push(nextPage, {
        item: item._id,
        key: this.userKey
    });
  }

  updateItem() {
    this.navCtrl.push(CreateKnowledgePage, {
      item: this.selectedItem,
      key: this.userKey
    });
  }

  editItem(event: any, itemIndex: number){
  }
  enableItem(event: any, itemIndex: number){
  }

  removeItem(){
    this.dataService.removeKnowledge(this.selectedItem);
  }

  createItem(){
    let modal = this.modalCtrl.create(ChooseItemModal, {key: this.userKey, listType: 'equipment', itemType: 'sensor', title: 'Novo Sensor'});
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

  private getEquipmentList(){
    this.dataService.getData<EquipmentModel>(["ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.componentList = data,
        error =>  this.errorMessage = <any>error);
  }
  private getComplexList(){
    this.dataService.getData<EquipmentModel>(["complex" , "ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.complexCompList = data,
        error =>  this.errorMessage = <any>error);
  }
  private selectComponent() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione componente');

    let i = 0;
    for (let comp of this.componentList)
      if (comp.type !== this.object.type)
        alert.addInput({
          type: 'radio',
          label: comp.data.name,
          value: comp._id,
          checked: (i++)?false:true
        });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Continuar',
      handler: data => {
        if (data)
          console.log('Radio data:', data);
          this.selectComponentOpen = false;
          let newRelation1 = new RelationModel({ id: data });
          let newRelation2 = new RelationModel({ id: this.selectedItem });
          this.addAssociation("connectedTo", data, newRelation1, newRelation2);
        }
    });
    alert.present().then(() => {
      this.selectComponentOpen = true;
    });
  }
  selectParent() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione o Componente');

    let i = 0;
    for (let comp of this.componentList)
      if (comp.type !== this.object.type)
        alert.addInput({
          type: 'radio',
          label: comp.data.name,
          value: comp._id,
          checked: (i++)?false:true
        });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Continuar',
      handler: data => {
        if (data)
          console.log('Radio data:', data);
          this.selectComponentOpen = false;
          let newRelation1 = new RelationModel({ id: data });
          let newRelation2 = new RelationModel({ id: this.selectedItem });
          this.addAssociation("connectedTo", data, newRelation1, newRelation2);
        }
    });
    alert.present().then(() => {
      this.selectComponentOpen = true;
    });
  }

  onSubmit() {
    let loader = this.loadingCtrl.create({
      content: "Salvando..."
    });
    loader.present();

    if (!this.object._id)
      this.dataService.createKnowledge(this.object)
        .subscribe(
          data => {
            console.log ( data );
            loader.dismissAll();
            this.navCtrl.pop();
          },
          error =>  this.errorMessage = <any>error
        );
    else
      this.dataService.updateKnowledge(this.object._id, this.object.data)
        .subscribe(
          data => {
            console.log ( data );
            loader.dismissAll();
            this.navCtrl.pop();
          },
          error =>  this.errorMessage = <any>error
        );
  }

}
