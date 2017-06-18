import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { ConnectionModel } from '../../models/connection.model';

@Component({
  templateUrl: './connection-conf.html'
})
export class ConnectionConfModal {
  item: ConnectionModel;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    let parameter = navParams.get('parameter');

    this.item = new ConnectionModel(parameter.connection);
  }

  doSave(){
    this.viewCtrl.dismiss({
      item: this.item
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
