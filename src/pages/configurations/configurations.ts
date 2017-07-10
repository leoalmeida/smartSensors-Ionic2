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
  connection = {
    host: "191.189.96.74",
    httpPort: 3001,
    wsPort: 3005
  };
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
      this.nativeStorage.getItem('smartSensors.connection')
            .then(
              connection => {
                if (connection)
                  this.connection = connection;
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
    this.nativeStorage.setItem('smartSensors.connection', this.connection)
      .then(
        () => console.log('Stored item!', this.connection),
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
