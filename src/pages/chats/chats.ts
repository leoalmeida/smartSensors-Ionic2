import { Component } from '@angular/core';
import { NavParams, NavController, Platform, AlertController,LoadingController  } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { Storage } from '@ionic/storage';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { ChatsDetailPage } from './chats-detail';

import { SocialSharing } from '@ionic-native/social-sharing';

import { Packet } from 'mqtt';
import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { DataService } from '../../providers/apiData.service';

import { RelationModel } from '../../models/relation.model';
import {
  KnowledgeChannelModel, KnowledgeMessageModel, ProfileModel, AssociationModel,
  SyncObjectModel, EquipmentModel, ChannelModel, KnowledgeInterface
} from '../../models/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  syncing: any = false;
  // Stream of messages
  public messages: Observable<Packet>;

  // Array of historic message (bodies)
  public mq: Array<Packet> = [];

  // A count of messages received
  public count = 0;

  public config = {
    "host": "192.168.0.6",
    "port": 1883,
    "path": "",
    "clientId": "",
    "ssl": true,
    "user": "guest",
    "pass": "guest",
    "subscribe": [],
    "publish": [],
    "keepalive": 10
  };
  public clientId:string;

  errorMessage: string;
  selectedItem: any;
  userKey: any;

  keys: any[];
  notifications: any[] = [];
  lastSync: number = 0;
  op: string = "$gt";

  channels: string;
  public objectLastMsgs: {} = {};
  public myChannels: SyncObjectModel<KnowledgeChannelModel> = new SyncObjectModel<KnowledgeChannelModel>();
  public listSubscriptions: SyncObjectModel<KnowledgeInterface<ProfileModel, AssociationModel>>[]  = []
  public storeChannels: SyncObjectModel<KnowledgeChannelModel> = new SyncObjectModel<KnowledgeChannelModel>();
  public arrayChannels: KnowledgeChannelModel[];

  pushTopic: string = "";
  pushMessage: string = "push message will be displayed here";

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              public user:User,
              public auth:Auth,
              public alertCtrl: AlertController,
              public dataService:DataService,
              public loadingCtrl:LoadingController,
              private _mqService: MQTTService,
              private localNotifications: LocalNotifications,
              private socialSharing: SocialSharing,
              public storage: Storage) {
    this.userKey = navParams.get("key");
    this.channels = "myChannels";
    this.config.clientId = this.userKey;
    console.log(user);
    this.config.user      = this.user.id;
    this.config.pass      = this.user.id;
    this.config.subscribe = [];
    this.getItems();
  }

  getItems(){
    /*let loader = this.loadingCtrl.create({
      content: "Atualizando..."
    });
    loader.present();*/
    this.syncing = true;
    this.listSubscriptions = [];
    this.objectLastMsgs = {};
    this.myChannels.objects = [];
    this.storeChannels.objects = [];
    this.dataService.getData<KnowledgeInterface<ChannelModel, AssociationModel>>( [ "channels", "connected" ].join("/"),null)
      .subscribe ( newChannels => {
        for (let chan of newChannels){
          this.myChannels.objects.push(chan);
          this.dataService.getData<ProfileModel>( ["eq", "subscriberAt", chan._id ].join("/"),null)
            .subscribe ( subscribers => {
              let index = this.listSubscriptions.push(new SyncObjectModel<KnowledgeInterface<ProfileModel, AssociationModel>>());
              this.listSubscriptions[index-1].objects = subscribers;
              for (let sub of subscribers){
                this.listSubscriptions[index-1].items[sub._id] = sub;
              }
              this.storage.ready().then(() => {
                for ( let chan of this.myChannels.objects ) {
                  if (!this.objectLastMsgs[chan["_id"]]) this.objectLastMsgs[chan["_id"]] = new SyncObjectModel<KnowledgeMessageModel>();
                  this.storage.get("channelLastMsgs" + chan["_id"] + this.userKey).then((newMsgs) => {
                    if (newMsgs) {
                      this.objectLastMsgs[chan["_id"]] = newMsgs;
                      this.lastSync = newMsgs[newMsgs.length-1];
                    }
                    this.getLastMsgs(chan["_id"], this.lastSync);
                    //loader.dismissAll();
                  });
                }
                this.syncing = false;
              });
            });
        }
      });

    this.dataService.getData<ChannelModel>( [ "channels", "disconnected"].join("/"),null)
      .subscribe ( storeChannels => {
        this.storeChannels.objects = storeChannels;
      });
  }

  // Push a search term into the observable stream.
  /*getItems(selectedItem: string) {
    this.filteredItems = this.objects.filter((v) => {
      if (v.type.toLowerCase().indexOf(this.selectedItem.toLowerCase()) > -1) return true;
        return false;
    })
  }*/

  getLastMsgs(channelId, sync){
    var msgLimit = 5;
    var query = [];

    query.push('limit='+ msgLimit);
    if (sync) query.push('sync='+ sync);
    //query.op = '$gt';
    //query.sort = 'sync';
    //query.sortTp = -1;

    this.dataService.getMessengerData([ "connectedTo", channelId ], query )
      .subscribe ( msgData => {
        for ( let msg of msgData.reverse() ) {
          if (this.objectLastMsgs[channelId].objects.length >= msgLimit) this.objectLastMsgs[channelId].objects.pop();
          this.objectLastMsgs[channelId].objects.unshift(msg);
        }
        this.objectLastMsgs[channelId].sync = sync;
        this.storage.set("channelLastMsgs" + channelId + this.userKey, this.objectLastMsgs[channelId]);
      });
  }

  unsubscribe(itemid){
    let loader = this.loadingCtrl.create({
      content: "Cancelando assinatura..."
    });
    loader.present();
    this.dataService.removeAssociation(itemid, "subscribedBy", this.userKey)
              .subscribe((data: any) => {
                console.log(data);
                this.dataService.removeAssociation(this.userKey, "subscriberAt", itemid)
                          .subscribe((data: any) => {
                            loader.dismissAll();
                            console.log(data);
                            this.getItems();
                          });
              });
  }

  subscribe(itemid){
    let loader = this.loadingCtrl.create({
      content: "Ativando assinatura..."
    });
    loader.present();
    let chanRelation = new RelationModel({ id: this.userKey });
    this.dataService.addAssociation(itemid, "subscribedBy", chanRelation)
              .subscribe((data: any) => {
                console.log(data);
                let userRelation = new RelationModel({ id: itemid });
                this.dataService.addAssociation(this.userKey, "subscriberAt", userRelation)
                          .subscribe((data: any) => {
                            loader.dismissAll();
                            console.log(data);
                            this.getItems();
                          });
              });
  }

  likeit(itemid){
    let chanRelation = new RelationModel({ id: this.userKey });
    this.dataService.addAssociation(itemid, "likedBy", chanRelation)
              .subscribe((data: any) => {
                console.log(data);
                this.getItems();
              },(err: any) => {console.log(err);});
  }

  openChats($event, channel){
    this.storage.ready().then(() => {
      this.storage.set( "channelOpen" + this.userKey, channel);

      this.navCtrl.push(ChatsDetailPage, {
        channel: channel,
        key: this.userKey
      });
    });
  }

  share(info) {

    let alert = this.alertCtrl.create();
    alert.setTitle('Compartilhar alerta');

    alert.addInput({
      type: 'string',
      name: 'msg',
      label: 'Mensagem'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Face',
      handler: data => {
        console.log('Face data:', data);
        this.shareFacebook(info, data.msg);
      }
    });
    alert.addButton({
      text: 'Whats',
      handler: data => {
        console.log('Whats data:', data);
        this.shareWhats(info, data.msg);
      }
    });
    alert.present();
  }

  shareFacebook(info, message){
    // Check if sharing via email is supported
    this.socialSharing.shareViaFacebook(
      message,
      info.data.image
    ).then(() => { }).catch(() => {
      // Sharing via face is not possible
    });
  }

  shareWhats(info, message){
    // Check if sharing via email is supported
    this.socialSharing.shareViaWhatsApp(
      message,
      info.data.image
    ).then(() => {}).catch(() => {
      // Sharing via Whats is not possible
    });
  }

  addNotifications(){

    let firstNotificationTime = new Date();
    firstNotificationTime.setSeconds(firstNotificationTime.getSeconds() + 10);

    let notification = {
        id: 1,
        title: 'Hey!',
        text: 'You just got notified :)',
        at: firstNotificationTime,
        data: { secret: this.userKey }
    };

    this.notifications.push(notification);

    console.log("Notifications to be scheduled: ", this.notifications);

    if(this.platform.is('cordova')){

        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {

            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);

            this.notifications = [];

        });
    }

  }

  cancelAll(){

      this.localNotifications.cancelAll();

  }

  public on_connect = () => {

    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this._mqService.messages;

    // Subscribe a function to be run on_next message
    this.messages.subscribe(this.on_next);
  }

  /** Consume a message from the _mqService */
  public on_next = (message: Packet) => {

    // Store message in "historic messages" queue
    this.mq.push(message);

    if (message) {
      this.pushTopic = message["topic"];
      let changedObj = message["payload"];
      this.pushMessage = changedObj.toString();
      if (changedObj.sync > this.objectLastMsgs[message["topic"]].sync)
        this.objectLastMsgs[message["topic"]][changedObj.type] = changedObj.item;
    }

    // Count it
    this.count++;
  }

  public on_error = () => {
    console.error('Ooops, error in RawDataComponent');
  }

  ngOnDestroy() {
    this._mqService.disconnect();
  }



  trackBySync(index,item){
    return item._id;
  }
  changed(item){
    let now = Date.now();
    let diffMs = (now - item);
    let diffTime = Math.floor(diffMs / 86400000); // days
    if (diffTime==0){
      diffTime = Math.floor((diffMs % 86400000) / 3600000); // hours
      if (diffTime==0) {
        Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        if (diffTime<=1) return "1 minuto";
        else if (diffTime>1) return diffTime + " minutos";
      }else if (diffTime==1) return "1 hora";
       else if (diffTime>1) return diffTime + " horas";
    }else if (diffTime==1) return "1 dia";
     else return diffTime + " dias";
  }
}
