import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { DataService } from '../../providers/apiData.service';

import { ReferenceService } from '../../providers/reference.service';
import { ActionModel, RuleModel } from '../../models/interfaces';
import { KnowledgeInterface, EquipmentModel, AssociationModel } from '../../models/interfaces';


@Component({
  templateUrl: './rule-item-modal.html'
})
export class RuleModalPage {
  objSelection: RuleModel;
  actionSelection: ActionModel;

  category: any;
  label: string = "";
  mode: string = "";
  hasConnector: boolean = false;
  userKey: string = "";
  pageTitle: string = "";
  categories: any;
  knowledge: string = "";

  knowledgeSelection: boolean = false;
  knowledges: Array<KnowledgeInterface<EquipmentModel, AssociationModel>> = [];

  evaluatedAttributes: any;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController,
    private dataService:DataService,
    private refService:ReferenceService
  ) {
    this.userKey = navParams.get('userKey');
    this.category = navParams.get('category');
    this.mode = navParams.get('mode');
    this.hasConnector = navParams.get('hasConnector');

    var updObj = navParams.get('object');
    if (this.mode === 'rule'){
      this.pageTitle = "Regra";
      if (!updObj){
        this.objSelection = {
          label: navParams.get('label'),
          enabled: true,
          knowledge: "",
          category: this.category.category,
          type: this.category.type,
          icon: this.category.icon,
          formula: "",
          multiple: this.category.multiple
        };
        if (this.category.multiple)
          this.objSelection.evaluatedAttributes = this.category.evaluatedAttributes;
        else
          this.objSelection.evaluatedAttribute = {
            "time" : 0,
            "name" : "value",
            "type" : "number",
            "dualKnobs" : false,
            "max" : 100,
            "min" : 0,
            "sign" : ">",
            "expectedResult" : 50
          };
      }else this.objSelection = updObj;

      if (!navParams.get('dynamic')){
        this.knowledgeSelection = true;
        this.getEquipmentList(this.objSelection.type, this.objSelection.category);
      }
    }else{
      this.pageTitle = "Ação";
      if (!updObj){
        this.actionSelection = {
          label: navParams.get('label'),
          enabled: true,
          knowledge: "",
          category: this.category.category,
          type: this.category.type,
          action: this.category.action,
          icon: this.category.icon,
          changedAttributes:  this.category.changedAttributes,
          configurations: this.category.configurations,
        };
      }else this.actionSelection = updObj;

      if (this.actionSelection.category === "relay"){
        this.knowledgeSelection = true;
        this.getEquipmentList(this.actionSelection.type, this.actionSelection.category);
      }
    }

    this.refService.categoriesSubject
        .subscribe(res => {
          this.categories = res;
        }, err => {
          console.log(err);
        });

  }

  private getEquipmentList(type, category){
    this.dataService.getData<EquipmentModel>(["eq",type.toLowerCase(), category.toLowerCase(), "ownedBy", this.userKey].join("/"), null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.knowledges = data,
        error =>  console.log(<any>error));
  }

  onSelectAttrs(item){
    console.log(item);
  }

  compareStringFn(e1: string, e2: string): boolean {
    return e1===e2;
  }

  compareAttrFn(e1: any, e2: any): boolean {
    return e1.name===e2.name;
  }

  doSave(){
    var returnValue = {};
    if (this.mode === 'rule'){
      //this.objSelection.label = this.label;
      //this.objSelection.knowledge = this.knowledge;

      returnValue = this.objSelection;
    }else{
      //this.actionSelection.label = this.label;
      //this.actionSelection.knowledge = this.knowledge;
      returnValue = this.actionSelection;
    }

    this.viewCtrl.dismiss({
      item: returnValue
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
