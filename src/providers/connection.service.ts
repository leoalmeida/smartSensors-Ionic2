import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';

import {Http, Headers, RequestOptions} from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NetworkNotifierService } from './network.notifier';


@Injectable()
export class ConnectionService {
  private networkStatus:boolean = false;

  private webserverSubject: BehaviorSubject<any> = new BehaviorSubject({});
  private webserverSync: number = 0;
  private floatingHttp:boolean = true;

  private pubsubSubject: BehaviorSubject<any> = new BehaviorSubject({});
  private pubsubSync: number = 0;
  private floatingPubSub:boolean = true;

  constructor(private http:Http,
              private platform: Platform,
              private networkStatusService:NetworkNotifierService,
              private nativeStorage: NativeStorage){
    this.platform.ready().then((readySource) => {
      this.networkStatusService.getNetworkStatus()
            .subscribe((value) => {
                  console.log("Subscription got", value);
                  this.networkStatus = value.status;
                });
      this.nativeStorage.getItem('smartSensors.configurations')
            .then(data => {
                if (data){
                  this.floatingHttp = data.floatingHttp;
                  if (!this.floatingHttp)
                    this.nativeStorage.getItem('smartSensors.httpConnection')
                          .then(data => {
                            this.webserverSubject.next(data);
                          },error => console.error(error));

                  this.floatingPubSub = data.floatingPubSub;
                  if (!this.floatingPubSub)
                    this.nativeStorage.getItem('smartSensors.pubsubConnection')
                          .then(data => {
                            this.pubsubSubject.next(data);
                          },error => console.error(error));
                }
              },error => {
                console.error(error);
              });
    })
  }

  get Webserver(){
    return this.webserverSubject;
  }
  get Pubsub(){
    return this.pubsubSubject;
  }

  verifyNearWebServer(lat, lng, distance){
    // If last sync wasn`t last 30 minutes, do not perform a new request;
    if (!this.networkStatus || ((Date.now() - this.webserverSync) < 60000 * 30000)) return;
    this.http.get("api/connection/webserver/" + [lat, lng, distance].join('/'))
      .subscribe(data => {
        if (data){
          this.webserverSync = Date.now();
          this.webserverSubject.next(data.json());
        }
      });
  }

  verifyNearPubSubServer(lat, lng, distance){
    if (!this.networkStatus || ((Date.now() - this.pubsubSync) < 60000 * 30000)) return;
    this.http.get("api/connection/pubsub/" + [lat, lng, distance].join('/'))
      .subscribe(data => {
          if (data){
            this.webserverSync = Date.now();
            this.webserverSubject.next(data.json());
          }
      });
  }

  reportConnectionError(serverId){
    if (!this.networkStatus) return;
    this.http.post("api/connection/" + [serverId, "disconnect"].join('/'), null)
      .subscribe(data => {
          console.log("Server disconnected", serverId);
      });
  }
}
