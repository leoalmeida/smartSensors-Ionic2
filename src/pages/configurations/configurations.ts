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
  masterConnection: any = {
    schema : "http",
    host: "127.0.0.1",
    port: 3001,
    path: "",
    ssl: false,
    keepalive: 10
  };
  connections: any = {
    "http": {},
    "https": {},
    "ws": {},
    "tls": {},
    "mqtt": {},
    "mqtts": {}
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
      this.nativeStorage.getItem('smartSensors.masterConnection')
            .then(
              connection => {
                if (connection)
                  this.masterConnection = connection;
              },
              error => {
                console.error("masterConnection not-found");
              });

      this.nativeStorage.getItem('smartSensors.connections')
            .then(
              connection => {
                if (connection)
                  this.connections = connection;
              },
              error => {
                console.error("connections not-found");
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
      if (item !== "homepage" && item !== "floatingConnections") this.configurations[item] = value;
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

  saveMasterConnection(){
      this.nativeStorage.setItem('smartSensors.masterConnection', this.masterConnection)
        .then(
          () => {
            this.events.publish('connection:updated', this.masterConnection, Date.now());
            console.log('Stored connection!', this.masterConnection)
          },
          error => console.error('Error storing item', error)
        );
  };

  saveConnections(){
    if (this.configurations.floatingConnections)
      this.nativeStorage.remove('smartSensors.connections')
        .then(
          () => console.log('Stored pubsub connection removed!'),
          error => console.error('Error storing item', error)
        );
    else
      this.nativeStorage.setItem('smartSensors.connections', this.connections)
        .then(
          () => {
            this.events.publish('connections:updated', this.connections, Date.now());
            console.log('Stored connections!', this.connections)
          },
          error => console.error('Error storing item', error)
        );
  };

  saveSettings(){
    this.saveConfigurations();
    this.saveMasterConnection();
    this.saveConnections();
    this.navCtrl.pop();
  }
}
