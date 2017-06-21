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


  pageTitle: string = "";

  categories: any;
  knowledge: string = "";

  knowledges: Array<KnowledgeInterface<EquipmentModel, AssociationModel>> = [];

  evaluatedAttributes: any;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController,
    private dataService:DataService,
    private refService:ReferenceService
  ) {
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
    }

    this.refService.getCategories()
        .subscribe(res => {
          this.categories = res;
        }, err => {
          console.log(err);
        });

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
