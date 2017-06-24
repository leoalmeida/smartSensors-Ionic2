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
  ruleSelection: RuleModel;
  actionSelection: ActionModel;

  category: any;
  label: string = "";
  type: string = "";

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
    this.hasConnector = navParams.get('hasConnector');
    this.category = navParams.get('category');
    this.type = navParams.get('def');

    if (this.type === 'rule'){
      this.pageTitle = "Regra";
      this.ruleSelection = {
        label: this.category.label,
        enabled: true,
        knowledge: "",
        category: this.category.category,
        type: this.category.type,
        icon: this.category.icon,
        formula: "",
        multiple: this.category.multiple
      };
      if (this.category.multiple)
        this.ruleSelection.evaluatedAttributes = this.category.evaluatedAttributes;
      else
        this.ruleSelection.evaluatedAttribute = {};

      if (!navParams.get('dynamic')){
        this.knowledgeSelection = true;
        this.getEquipmentList(this.category.type, this.category.category);
      }
    }else{
      this.pageTitle = "Ação";
      this.actionSelection = {
        label: this.category.label,
        enabled: true,
        knowledge: "",
        category: this.category.category,
        type: this.category.type,
        action: this.category.action,
        icon: this.category.icon,
        changedAttributes:  this.category.changedAttributes,
        configurations: this.category.configurations,
      };
      if (this.category.category === "relay"){
        this.knowledgeSelection = true;
        this.getEquipmentList(this.category.type, this.category.category);
      }
    }

    this.refService.getCategories()
        .subscribe(res => {
          this.categories = res;
        }, err => {
          console.log(err);
        });

  }

  private getEquipmentList(type, category){
    this.dataService.getData<EquipmentModel>([type.toLowerCase(), category.toLowerCase(), "ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.knowledges = data,
        error =>  console.log(<any>error));
  }

  onSelectAttrs(item){
    console.log(item);
  }
  doSave(){
    let returnValue = {};
    if (this.type === 'rule'){
      this.ruleSelection.label = this.label;
      this.ruleSelection.knowledge = this.knowledge;

      returnValue = this.ruleSelection;
    }else{
      this.actionSelection.label = this.label;
      this.actionSelection.knowledge = this.knowledge;
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
