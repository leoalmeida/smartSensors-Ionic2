import {Injectable, InjectionToken, Injector} from '@angular/core';
import {Http, ConnectionBackend, Request, RequestOptions, RequestMethod, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {ErrorNotifierService} from './error.notifier';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Events } from 'ionic-angular';

import { User, Auth } from '@ionic/cloud-angular';
import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { NetworkNotifierService } from './network.notifier';
import { ConnectionService } from './connection.service';

export const WEBAPI_URL_TOKEN = new InjectionToken('webApiBaseUrl');
export const WSAPI_URL_TOKEN = new InjectionToken('wsApiBaseUrl');

@Injectable()
export class CustomHttp extends Http {
  private httpUrl: string = 'http://localhost:3001/';
  //private wsUrl: string;
  //private dbUrl: string = 'http://200.18.98.244:3001/';
  //private mqttUrl: string = 'mqtt://192.168.0.6:1883/';
  //private dbUrl: string = 'http://localhost:3001/';
  private connection = {};
  private webserverSubject: BehaviorSubject<any>;
  private webserverSync: number = 0;
  private floatingHttp:boolean = true;
  private networkStatus:boolean = false;
  private defConn = {"properties":{
                      "schema": "http",
                      "host" : "127.0.0.1",
                      "port" : 3001
                    }};
  private lastVerify: number = 0;
  constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private errorService: ErrorNotifierService,
        private networkStatusService:NetworkNotifierService,
        private geolocation: Geolocation,
        public user:User,
        public auth:Auth,
        public events: Events,
        public platform: Platform,
        public nativeStorage: NativeStorage) {
    super(backend, defaultOptions);
    this.webserverSubject = new BehaviorSubject(this.defConn);
    this.platform.ready().then((readySource) => {
      this.networkStatusService.getNetworkStatus()
            .subscribe((value) => {
                  console.log("Subscription got", value);
                  this.networkStatus = value.status;
            });
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        if (auth.isAuthenticated())
          this.verifyNearWebServer(data.coords.latitude, data.coords.longitude, 0);
      });
      this.nativeStorage.getItem('smartSensors.configurations')
            .then(data => {
                if (data){
                  this.floatingHttp = data.floatingHttp;
                  if (!this.floatingHttp)
                    this.nativeStorage.getItem('smartSensors.httpConnection')
                          .then(data => this.webserverSubject.next(data)
                            ,error => {
                              console.error(error)
                              this.webserverSubject.next(this.defConn);
                            });
                  else this.subscribeFloatingServer();
                }
              },error => {
                console.error(error);
              });
    })
  }

  verifyNearWebServer(lat, lng, distance){
    // If last sync wasn`t last 30 minutes, do not perform a new request;
    if ((Date.now() - this.webserverSync) < 60000 * 3) return;
    this.get("api/connection/webserver/" + [lat, lng].join('/'))
      .subscribe(data => {
        if (data){
          this.webserverSync = Date.now();
          this.webserverSubject.next(data.json());
        }
      });
  }

  subscribeFloatingServer(){
    this.webserverSubject
          .subscribe((value) => {
                console.log("Webserver got", value.properties);
                this.connection = value.properties;
                this.httpUrl = value.properties.schema + "://" + value.properties.host + ":" + value.properties.port + "/";
                this.nativeStorage.setItem('smartSensors.httpConnection', value.properties)
                  .then(
                    () => console.log('Stored item!', value.properties),
                    error => console.error('Error storing item', error)
                  );
              });
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before the request...');
    return super.request(url, options)
         .catch((err: any): any => {
             if (err.status === 400 || err.status === 422) {
               this.events.publish('app:hideLoader');
               return Observable.throw(err);
             } else if (err.status === 401) {
               this.events.publish('unAuthorizedRequest', err);
               return Observable.empty();
             } else {
               this.errorService.notifyError(err);
               return Observable.empty();
             }
           })
         .retryWhen(error => error.delay(1000))
         .timeoutWith(10000, Observable.throw(new Error('delay exceeded')))
         .do(
           () => {
             console.log('do1');
             return Observable.empty();
           },
           () => {
             console.log('do2');
             return Observable.empty();
           }
         )
         .finally(() => {
           console.log('After the request...');
           this.events.publish('app:hideLoader');
         });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
     console.log('Before the request...');
     this.events.publish('app:showLoader');

     return super.get(url, this.setOptions(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
     console.log('Before the request...');
     this.events.publish('app:showLoader');
     return super.post(url, body, this.setOptions(url, options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before the request...');
    this.events.publish('app:showLoader');
    return super.put(url, body, this.setOptions(url, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before the request...');
    this.events.publish('app:showLoader');
    return super.delete(url, this.setOptions(url, options));
  }

  setOptions(url: string, options: RequestOptionsArgs){
    if (options == null) options = new RequestOptions();
    options.url = this.httpUrl + url;
    //else newRequestOptions.url = this.webApiBaseUrl + newRequestOptions.url;
    if (options.headers == null) options.headers = new Headers();
    options.headers.append("Accept", "application/json");
    if (options.method === 'put' ||
          options.method === 'post' ||
          options.method === 'patch') {
            options.headers.append("Content-Type", "application/json");
    }
    if (this.auth.isAuthenticated()) {
      options.headers.append("Authorization", "Basic " + btoa(this.user.id + ":" + this.auth.getToken()));
    }
    return options;
  }
}
