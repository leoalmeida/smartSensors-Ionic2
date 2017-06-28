import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { AssociationModel, EquipmentModel, KnowledgeInterface, RelationModel } from '../../models/interfaces';
import { DataService } from '../../providers/apiData.service';
import { ReferenceService } from '../../providers/reference.service';

@Component({
  templateUrl: './relation-item-modal.html'
})
export class RelationModalPage {
  item: RelationModel = {id: ""};
  relationType: string;
  relations: Array<KnowledgeInterface<EquipmentModel,AssociationModel>>;

  refData = {};

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController,
    private dataService:DataService,
    private refService:ReferenceService
  ) {
    //this.item = this.navParams.get('item');
    this.refService.refdataSubject
            .subscribe(values => {
                this.refData = values;
            });
  }

  doSave(){
    this.dataService.addAssociation(this.item.id, this.relationType, this.item);
    this.viewCtrl.dismiss({
      item: this.item,
      reltype: this.relationType
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
