import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '@ionic/cloud-angular';

import { DataService } from '../../providers/apiData.service';

@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html'
})
export class ConfigurationsPage {
  userKey: any;
  host: string = "";

  constructor(public platform: Platform,
              public user: User,
              public navCtrl: NavController,
              public navParams:NavParams,
              public dataService:DataService,
              private nativeStorage: NativeStorage) {
    this.userKey = navParams.get('key');
    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors')
        .then(
          data => {
            if (data.host)
              this.host = data.host;
          },
          error => console.error(error)
        );
    });
  }

  saveHost(){
    if (this.host)
      this.dataService.changeHost(this.host);
  }
}
