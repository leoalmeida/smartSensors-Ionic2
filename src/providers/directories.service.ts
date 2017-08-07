import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';

import {Http, Headers, RequestOptions} from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NetworkNotifierService } from './network.notifier';


@Injectable()
export class DirectoriesService {
  private networkStatus:boolean = false;

  private masterConnectionSubject: BehaviorSubject<any> = new BehaviorSubject({});
  private webserverSync: number = 0;
  
  private connectionsSubject: BehaviorSubject<any> = new BehaviorSubject({});
  private connectionsSync: number = 0;
  private floatingConnections:boolean = true;

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
                  this.nativeStorage.getItem('smartSensors.masterConnection')
                        .then(data => {
                          this.masterConnectionSubject.next(data);
                        },error => console.error(error));

                  this.floatingConnections = data.floatingConnections;
                  if (!this.floatingConnections)
                    this.nativeStorage.getItem('smartSensors.connections')
                          .then(data => {
                            this.connectionsSubject.next(data);
                          },error => console.error(error));
                }
              },error => {
                console.error(error);
              });
    })
  }

  get MasterConnection(){
    return this.masterConnectionSubject;
  }
  get Connections(){
    return this.connectionsSubject;
  }

  verifyNearDomainServer(lat, lng, distance){
    // If last sync wasn`t last 30 minutes, do not perform a new request;
    if (!this.networkStatus || ((Date.now() - this.webserverSync) < 60000 * 30000)) return;
    this.http.get("api/directory/domainCatalog/" + [lat, lng, distance].join('/'))
      .subscribe(data => {
        if (data){
          this.webserverSync = Date.now();
          this.masterConnectionSubject.next(data.json());
        }
      });
  }

  verifyNearConnectionServer(lat, lng, distance){
    if (!this.networkStatus || ((Date.now() - this.connectionsSync) < 60000 * 30000)) return;
    this.http.get("api/directory/resolution/" + [lat, lng, distance].join('/'))
      .subscribe(data => {
          if (data){
            this.webserverSync = Date.now();
            this.masterConnectionSubject.next(data.json());
          }
      });
  }

  reportConnectionError(serverId){
    if (!this.networkStatus) return;
    this.http.post("api/directory/" + [serverId, "disconnect"].join('/'), null)
      .subscribe(data => {
          console.log("Server disconnected", serverId);
      });
  }
}
