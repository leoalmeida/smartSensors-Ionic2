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
    params: NavParams,
    private viewCtrl: ViewController
  ) {}

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
