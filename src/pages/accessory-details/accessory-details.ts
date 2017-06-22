import { Component } from '@angular/core';
import {
  AlertController, LoadingController, ModalController, NavController, NavParams,
  Platform
} from 'ionic-angular';
// Observable operators
import 'rxjs/add/operator/catch';

import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { ModalContentPage }  from '../modals/attribute-item';
import { ShowMapModal }  from '../modals/show-map-modal';

import { SourceDetailsPage } from '../source-details/source-details';
import { HubDetailsPage } from '../hub-details/hub-details';
import { ProfilePage } from '../profile/profile';
import { CreateKnowledgePage } from '../create-knowledge/create-knowledge';

import { RelationModel } from '../../models/relation.model';

import {
  EquipmentModel, AttributeModel, KnowledgeInterface, AssociationModel
} from '../../models/interfaces';
import { ChooseItemModal } from '../modals/choose-item-modal';
import { TopicDesignerPage } from '../topic-designer/topic-designer';
import { ReferenceService } from '../../providers/reference.service';

@Component({
  selector: 'page-accessory-details',
  templateUrl: '../templates/details-page.html'
})
export class AccessoryDetailsPage {
  pageTitle: string;
  imgdef:string = "assets/icons/img/ionic.png";
  listAttributes: boolean = false;
  listConfigurations: boolean = false;
  update: boolean = false;

  errorMessage: string;
  selectedItem: any;
  userKey: any;

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
                     .subscribe((result: KnowledgeInterface<EquipmentModel, AssociationModel>) => {
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

  addAssociation(itemId: string, associationType: string, relation: RelationModel){
    this.dataService.addAssociation(itemId, associationType, relation)
              .subscribe((data: any) => {
                console.log(data);
              });
  }

  removeAssociation(itemId: string, associationType: string, relid: string){
    this.dataService.removeAssociation(itemId, associationType , relid)
              .subscribe((data: any) => {
                console.log(data);
              });
  }

  openModal(type, ref) {
    let modal = this.modalCtrl.create(ModalContentPage);
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

  private selectComponent(ref) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione componente');

    let i = 0;
    for (let comp of this.componentList)
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
          let newRelation = new RelationModel({ id: data });
          ref.push(newRelation.getFormGroup());
        }
    });
    alert.present().then(() => {
      this.selectComponentOpen = true;
    });
  }

  selectParent(ref) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione o Componente');

    let i = 0;
    for (let object of this.componentList)
      alert.addInput({
        type: 'radio',
        label: object.data.name,
        value: object._id,
        checked: (i++)?false:true
      });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Continuar',
      handler: data => {
        if (data)
          console.log('Radio data:', data);
          this.selectComponentOpen = false;
          let newRelation = new RelationModel({ id: data });
          ref = newRelation.getFormGroup();
        }
    });
    alert.present().then(() => {
      this.selectComponentOpen = true;
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
    let modal = this.modalCtrl.create(ChooseItemModal, {key: this.userKey, listType: 'equipment', itemType: 'actuator', title: 'Novo Acessório'});
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
