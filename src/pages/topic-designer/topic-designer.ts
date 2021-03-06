import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import { NativeGeocoder } from '@ionic-native/native-geocoder'

import { ShowMapModal }  from '../modals/show-map-modal';

import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';

import { ItemPopOverPage } from './item-popover';

import { AssociationModel, EquipmentModel, KnowledgeInterface, TopicModel } from '../../models/interfaces';
import { RelationModalPage } from '../modals/relation-item-modal';
import { RuleModalPage } from '../modals/rule-item-modal';
import { ReferenceService } from '../../providers/reference.service';
import { FormControl } from '@angular/forms';


import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-topic-designer',
  templateUrl: './topic-designer-page.html'
})
export class TopicDesignerPage implements OnInit{

  pageTitle: string;
  imgdef: string = "assets/icons/img/ionic.png";
  ruleSearchTerm: string = '';
  actionSearchTerm: string = '';
  ruleSearchControl: FormControl;
  actionSearchControl: FormControl;
  showListRules: any = false;
  showListActions: any = false;
  searchingRules: any = false;
  searchingActions: any = false;

  listRules: boolean = false;
  listActions: boolean = false;
  listed: boolean = false;
  shouldAnimate: boolean = false;

  selectedSegment: string = "rules";
  errorMessage: string;
  selectedItem: any;
  userKey: any;

  dynamic: boolean = false;

  object: KnowledgeInterface<TopicModel, AssociationModel>;

  ruleCategoryItems: any;
  actionCategoryItems: any;

  categories: any = {};

  constructor(public user:User,
              public navCtrl: NavController,
              public modalCtrl: ModalController,
              public nativegeocoder: NativeGeocoder,
              public loadingCtrl: LoadingController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private dataService:DataService,
              private refService:ReferenceService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userKey = navParams.get('key');
    this.ruleSearchControl = new FormControl();
    this.actionSearchControl = new FormControl();

    this.refService.categoriesSubject
            .subscribe(values => {
                this.categories = values;
            });
  }

  ionViewDidLoad() {
    //this.setFilteredRules();
    //this.setFilteredActions();

    this.ruleSearchControl.valueChanges.debounceTime(700).subscribe(search => {
      // if the value is an empty string don't filter the items
      if (search && search.trim() != '') {
        this.setFilteredRules ();
        this.showListRules = true;
      }else{
        this.showListRules = false;
      }
      this.searchingRules = false;
    });
    this.actionSearchControl.valueChanges.debounceTime(700).subscribe(search => {
      // if the value is an empty string don't filter the items
      if (search && search.trim() != '') {
        this.setFilteredActions ();
        this.showListActions = true;
      }else{
        this.showListActions = false;
      }
      this.searchingActions = false;
    });
  }

  setFilteredRules() {
    if (this.object){
      if (this.object.data.ruleContainer.length%2)
        this.ruleCategoryItems = this.categories["Connectors"].filter(this.filterRuleItems, this.ruleSearchTerm);
      else
        this.ruleCategoryItems = this.categories["RuleCategories"].filter(this.filterRuleItems, this.ruleSearchTerm);

      if (this.ruleSearchTerm && this.ruleSearchTerm.trim() != '')
          this.showListRules = true;
    }
  }

  setFilteredActions() {
    this.actionCategoryItems = this.categories["ActionCategories"].filter(this.filterRuleItems, this.actionSearchTerm);

    if (this.actionSearchTerm && this.actionSearchTerm.trim() != '')
        this.showListActions = true;
  }

  filterRuleItems(element, index, array){
    return (element.label.toLowerCase().indexOf(this["toLowerCase"]()) > -1 ||
      element.category.toLowerCase().indexOf(this["toLowerCase"]()) > -1 ||
      element.type.toLowerCase().indexOf(this["toLowerCase"]()) > -1);
  }

  onSearchInput(type){
    if (type === 'rule')
      this.searchingRules = true;
    else
      this.searchingActions = true;
  }

  ngOnInit() {
    this.dataService
      .getOne<EquipmentModel>(this.selectedItem)
      .subscribe((result: any) => {
        this.pageTitle  = result.data.name;
        this.object     = result;
        (this.object.category==='dynamic')?this.dynamic=true:this.dynamic=false;
        this.setFilteredRules();
        this.setFilteredActions();
      });
  }

  showMap(){
    let modal = this.modalCtrl.create(ShowMapModal,{ change: true, item: this.object, key: this.userKey });
    modal.present();

    modal.onWillDismiss((data: any) => {
      if (data) {
        this.object.location.coordinates = [data.newLocal.lat, data.newLocal.lng];
        console.log('MODAL DATA', data.newLocal);
        this.nativegeocoder.reverseGeocode(data.newLocal.lat, data.newLocal.lng)
          .then((result)=>{
            alert("The address is: \n\n" + result.street + " " + result.houseNumber + ", " + result.postalCode + " " + result.city + " " + result.district + " in " + result.countryName + " - " + result.countryCode);
          }).catch((err)=>{
            alert(JSON.stringify(err));
          });
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

  changeImage(){}

  changeIcon(){}

  toggleList(){this.listed = !this.listed};

  propertyTapped(event, item) {
      /*this.navCtrl.push(ComplexObjectDetailsPage, {
          item: item
      });*/
  }

  showPopover(myEvent, index) {

    let popover = this.popoverCtrl.create(ItemPopOverPage, {
      items: index
    });

    popover.present({
      ev: myEvent
    });
  }
  newRule(event, catItem){
    var category: any;

    if (catItem === undefined || !catItem){
      let catIndex = this.ruleCategoryItems.findIndex(this.findCategory, this.ruleSearchTerm.toLowerCase() );
      if (catIndex < 0) return;
      category = this.ruleCategoryItems[catIndex];
    }else category = catItem;

    if (category.type === 'operador') {
      this.object.data.ruleContainer.push(category);
      this.ruleSearchTerm = '';
      return;
    }

    var hasConnector = !!(this.object.data.ruleContainer.length);

    var modal = this.modalCtrl.create(RuleModalPage,{ mode:"rule", label: "Regra" + (this.object.data.ruleContainer.length+1), category: category, hasConnector: hasConnector, userKey: this.userKey, dynamic: (this.object.category === "dynamic") });
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        if (this.object.data.ruleContainer.length%2){
          let modal = this.modalCtrl.create(RuleModalPage,{ mode:"operador" });
          modal.present();
          modal.onWillDismiss((oper: any) => {
            if (oper) {
              this.object.data.ruleContainer.push(data.item);
              this.object.data.ruleContainer.push(oper.item);
            }
          })
        }else this.object.data.ruleContainer.push(data.item);

        this.ruleSearchTerm = '';
      }
    });
  }

  editRule(event, itemIndex)
  {
    if (itemIndex === undefined || itemIndex < 0) return;

    if (this.object.data.ruleContainer[itemIndex].type === 'operador') {
      //this.object.data.ruleContainer.push(category);
      //this.ruleSearchTerm = '';
      return;
    }

    let catIndex = this.categories["RuleCategories"].filter(this.filterRuleItems, this.object.data.ruleContainer[itemIndex].category.toLowerCase());
    if (catIndex.length <= 0) return;
    var category = catIndex[0];

    //let catIndex = this.ruleCategoryItems.findIndex(this.findCategory, this.object.data.ruleContainer[itemIndex].category.toLowerCase());
    //if (catIndex < 0) return;
    //let category = this.ruleCategoryItems[catIndex];

    var hasConnector = !!(this.object.data.ruleContainer.length);

    var modal = this.modalCtrl.create(RuleModalPage,{ mode: "rule", object: this.object.data.ruleContainer[itemIndex] , category: category, hasConnector: hasConnector, userKey: this.userKey, dynamic: (this.object.category === "dynamic") });
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        this.object.data.ruleContainer[itemIndex] = data.item;
        this.ruleSearchTerm = '';
      }
    });
  }

  findCategory(element, index, array) {
    if ( element.category.toLowerCase() === this )
      return true;
    else
      return false;
  }

  removeRule(event, indexId: number){
    this.object.data.ruleContainer.splice(indexId,1);
  }

  newAction(event, catItem){
    var category: any;
    if (!catItem){
      let catIndex = this.actionCategoryItems.findIndex(this.findCategory, this.actionSearchTerm.toLowerCase());
      if (!catIndex || catIndex < 0) return;
      category = this.actionCategoryItems[catIndex];
    }else category = catItem;

    var modal = this.modalCtrl.create(RuleModalPage,{ mode:"action", label: "Ação" + (this.object.data.actionContainer.length+1), category: category, userKey: this.userKey});
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        this.object.data.actionContainer.push(data.item);
        this.actionSearchTerm = '';
      }
    });
  }
  editAction(event, itemIndex)
  {
    if (itemIndex === undefined || itemIndex < 0) return;

    let catIndex = this.categories["ActionCategories"].filter(this.filterRuleItems, this.object.data.actionContainer[itemIndex].category.toLowerCase())
    if (catIndex.length <= 0) return;
    var category = catIndex[0];
    //let catIndex = this.actionCategoryItems.findIndex(this.findCategory, this.object.data.actionContainer[itemIndex].category.toLowerCase());
    //if (!catIndex || catIndex < 0) return;
    //let category = this.actionCategoryItems[catIndex];

    var modal = this.modalCtrl.create(RuleModalPage,{ mode: "action", object: this.object.data.actionContainer[itemIndex] , category: category, userKey: this.userKey});
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        this.object.data.actionContainer[itemIndex] = data.item;
        this.actionSearchTerm = '';
      }
    });
  }
  removeAction(event, indexId: number){
    this.object.data.actionContainer.splice(indexId,1);
  }

//  addAssociation(itemId: string, associationType: string, relation: RelationModel){


  addAssociation() {
    let modal = this.modalCtrl.create(RelationModalPage);
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        this.object.relations[data.reltype].push(data.item);
      }
    });
  }

  removeAssociation(associationType: string, relid: string){
    this.dataService.removeAssociation(this.object._id, associationType , relid);
  }

  itemTapped(event, item) {

  }

}
