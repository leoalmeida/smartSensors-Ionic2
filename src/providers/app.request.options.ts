import { Injectable, Inject, InjectionToken} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import {User, Auth} from '@ionic/cloud-angular';
import { NativeStorage } from '@ionic-native/native-storage';

export const WEBAPI_URL_TOKEN = new InjectionToken('webApiBaseUrl');

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {
  //private dbUrl: string = 'http://200.18.98.244:3001/';
  private httpUrl: string = 'http://191.189.96.74:3001/';
  //private mqttUrl: string = 'mqtt://192.168.0.6:1883/';
  //private dbUrl: string = 'http://localhost:3001/';
  private wsUrl: string = 'ws://191.189.96.74:3005/';
  private connection = {};


  constructor(@Inject(WEBAPI_URL_TOKEN) private webApiBaseUrl:string,
              public user:User,
              public auth:Auth,
              public platform: Platform,
              public nativeStorage: NativeStorage) {
  	  super();
      this.getHost();
  	  console.log('webApiBaseUrl = '+webApiBaseUrl);
  }
  getHost(){
    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors.connection')
        .then(connection => {
            if (connection)
              this.connection = connection;
            this.httpUrl = "http://" + connection.host + ":" + connection.httpPort + "/";
            this.wsUrl = "ws://" + connection.host + ":" + connection.wsPort + "/";
          },
          error => {
            console.error(error);
            this.saveHost({
              host: "191.189.96.74",
              httpPort: 3001,
              wsPort: 3005
            })
          });
    });
  }

  saveHost(connection){
    this.nativeStorage.setItem('smartSensors.connection', connection)
      .then(
        () => console.log('Stored item!', connection),
        error => console.error('Error storing item', error)
      );
  }

  merge(options?:RequestOptionsArgs):RequestOptions {

    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append("Authorization", "Basic " + btoa(this.user.id + ":" + this.auth.getToken()));
    options.headers.append("Accept", "application/json");
    options.url = (this.webApiBaseUrl ? this.webApiBaseUrl : this.httpUrl) + options.url;
    if (options.method === 'put' ||
          options.method === 'post' ||
          options.method === 'patch') {
       options.headers.append("Content-Type", "application/json");
    }

    return super.merge(options);
  }
}
