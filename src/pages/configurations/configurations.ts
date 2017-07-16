import { Component } from '@angular/core';
import { Events, Platform, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';
import { DataService } from '../../providers/apiData.service';

@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html'
})
export class ConfigurationsPage {
  userKey: any;
  private _allItems: boolean = false;
  error: number = 0;
  configurations: any;
  httpConnection: any = {
    schema : "http",
    host: "127.0.0.1",
    port: 3001
  };
  pubsubConnection: any = {
    schema : "ws",
    host: "127.0.0.1",
    port: 3004,
    path: "",
    ssl: false,
    keepalive: 10
  };

  constructor(public platform: Platform,
              public events: Events,
              public user: User,
              public navCtrl: NavController,
              public navParams:NavParams,
              private nativeStorage: NativeStorage) {

    this.userKey = navParams.get('key');
    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors.configurations')
            .then(data => {
                if (data)
                  this.configurations = data;
              },
              error => {
                console.error(error);
                this.saveConfigurations();
              });
      this.nativeStorage.getItem('smartSensors.pubsubConnection')
            .then(
              connection => {
                if (connection)
                  this.pubsubConnection = connection;
              },
              error => {
                console.error("PubSubConnection not-found");
              });

      this.nativeStorage.getItem('smartSensors.httpConnection')
            .then(
              connection => {
                if (connection)
                  this.httpConnection = connection;
              },
              error => {
                console.error("httpConnection not-found");
              });
    });
    if (!this.userKey) this.navCtrl.setRoot(LoginPage, {"home": this.configurations.homepage});
  }

  get allItems() {
    return this._allItems;
  }
  set allItems(value) {
    this._allItems = value;
    for (let item of Object.keys(this.configurations))
      if (item !== "homepage" && item !== "floatingHttp") this.configurations[item] = value;
  }

  saveConfigurations(){
    this.nativeStorage.setItem('smartSensors.configurations', this.configurations)
      .then(
        () => {
          this.events.publish('configurations:updated', this.configurations, Date.now());
          console.log('Stored configurations!', this.configurations);
        },
        error => console.error('Error storing item', error)
      );
  };

  saveConnection(){
    if (this.configurations.floatingHttp)
      this.nativeStorage.remove('smartSensors.httpConnection')
        .then(
          () => console.log('Stored http connection removed!'),
          error => console.error('Error storing item', error)
        );
    else
      this.nativeStorage.setItem('smartSensors.httpConnection', this.httpConnection)
        .then(
          () => {
            this.events.publish('connection:updated', this.httpConnection, Date.now());
            console.log('Stored connection!', this.httpConnection)
          },
          error => console.error('Error storing item', error)
        );
  };

  savePubSubConnection(){
    if (this.configurations.floatingPubSub)
      this.nativeStorage.remove('smartSensors.pubsubConnection')
        .then(
          () => console.log('Stored pubsub connection removed!'),
          error => console.error('Error storing item', error)
        );
    else
      this.nativeStorage.setItem('smartSensors.pubsubConnection', this.pubsubConnection)
        .then(
          () => {
            this.events.publish('pubsubConnection:updated', this.pubsubConnection, Date.now());
            console.log('Stored pubsubConnection!', this.pubsubConnection)
          },
          error => console.error('Error storing item', error)
        );
  };

  saveSettings(){
    this.saveConfigurations();
    this.saveConnection();
    this.savePubSubConnection();
    this.navCtrl.pop();
  }
}
