import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';
import { ReferenceService } from '../../providers/reference.service';

import { ConnectorTypes } from '../../references/references';

@Component({
  selector: 'popover-page',
  templateUrl: './item-popover.html'
})
export class ItemPopOverPage {
  objectEle: any;

  categories = {};

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private refService:ReferenceService) {
    if (this.navParams.data.items) {
      this.objectEle = this.navParams.data.items;
      this.refService.categoriesSubject
              .subscribe(values => {
                  this.categories = values;
              });
    }
  }

  close() {
    this.viewCtrl.dismiss();
  }

  displayConnector(connector){
    return this.categories["Connectors"][ConnectorTypes[connector]].name;
  }
}
