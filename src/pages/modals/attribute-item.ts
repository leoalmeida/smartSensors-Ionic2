import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { AttributeModel } from '../../models/attribute.model';

@Component({
  templateUrl: './attribute-item.html'
})
export class ModalContentPage {
  item: AttributeModel;
  index: string;
  ref: string;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.item = navParams.get('item');
    if (!this.item)
      this.item = new AttributeModel();
    this.index = navParams.get('index');
    this.ref = navParams.get('ref');
  }

  doSave(){
    this.viewCtrl.dismiss({
      item: this.item,
      index: this.index,
      ref: this.ref
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
