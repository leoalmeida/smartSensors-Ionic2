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
  configurations = {
    resourcesPages: false,
    facebookPage: false,
    geofencePage: false,
    barcodePage: false
  };

  constructor(public platform: Platform,
              public user: User,
              public navCtrl: NavController,
              public navParams:NavParams,
              public dataService:DataService,
              private nativeStorage: NativeStorage) {
    this.userKey = navParams.get('key');
    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors.host')
        .then(
          data => {
            if (data.host)
              this.host = data.host;
          },
          error => console.error(error)
        );

      this.nativeStorage.getItem('smartSensors.configurations')
        .then(data => {
            if (data)
              this.configurations = data;
          },
          error => {
            console.error(error);
            this.setConfiguration(this.configurations);
          });
    });

  }

  saveHost(){
    if (this.host && this.userKey)
      this.dataService.changeHost(this.host);
    else
      this.nativeStorage.setItem('smartSensors.host', {host: this.host})
        .then(
          () => console.log('Stored item!', this.host),
          error => console.error('Error storing item', error)
        );
  }

  setConfiguration(configItem){
    this.configurations[configItem] = !this.configurations[configItem];
    this.nativeStorage.setItem('smartSensors.configurations', this.configurations)
      .then(
        () => console.log('Stored item!', this.configurations[configItem]),
        error => console.error('Error storing item', error)
      );
  }
}
