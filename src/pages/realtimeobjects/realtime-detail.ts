import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavParams, NavController, Platform, AlertController  } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { NativeStorage } from '@ionic-native/native-storage';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Packet } from 'mqtt';
import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { DataService } from '../../providers/apiData.service';

import { SocialSharing } from '@ionic-native/social-sharing';

import { KnowledgeModel } from '../../models/knowledge.model';

import { Observable } from 'rxjs/Rx';

import {
  AddressModel,
  KnowledgeMessageModel,
  RelationModel, SyncObjectModel, AssociationModel, KnowledgeInterface, ProfileModel, MessageModel, EquipmentModel,
  KnowledgeChannelModel
} from '../../models/interfaces'

@Component({
  selector: 'page-realtime-detail',
  templateUrl: 'realtime-detail.html'
})
export class RealTimeDetailPage implements OnDestroy, OnInit {

  public messages: Observable<Packet>;
  public mq: Array<Packet> = [];
  public count = 0;
  public mqttconnection: any = {};
  public clientId:string;
  pushTopic: string = "";
  pushMessage: any = {};


  syncing: any = false;
  pageTitle: string = "";
  subTitle: string  = "";
  userKey: string;
  op: string = "$gt";
  inputMsg: string = "";

  channel: KnowledgeInterface<EquipmentModel, AssociationModel>;
  channelMsgs: SyncObjectModel<KnowledgeMessageModel> = new SyncObjectModel<KnowledgeMessageModel>();
  listSubscriptions: SyncObjectModel<KnowledgeInterface<ProfileModel, AssociationModel>>  = new SyncObjectModel<KnowledgeInterface<ProfileModel, AssociationModel>>();

  notifications: any[] = [];

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              public user:User,
              public auth:Auth,
              public alertCtrl: AlertController,
              public dataService:DataService,
              private _mqService: MQTTService,
              private localNotifications: LocalNotifications,
              private socialSharing: SocialSharing,
              private storage: NativeStorage) {

    this.userKey = navParams.get("key");
    this.channel = navParams.get("channel");

    this.getData();
  }

  ngOnInit() {
    this.messages = this._mqService.messages;
    this.messages.subscribe(this.on_next);
  }

  ngOnDestroy(){
    this.storage.remove("object.open" + this.userKey).then((channel) => {
      console.log ("removed: ", channel );
    },
    error => {
      console.error(error);
    });
  }

  getData(){
    this.syncing = true;
    this.dataService.getData<ProfileModel>( ["eq", "subscriberAt", this.channel._id ].join("/"),null)
      .subscribe ( subscribers => {
        this.listSubscriptions.objects = subscribers;
        for (let sub of subscribers){
          this.listSubscriptions.items[sub._id] = sub;
        }
        this.listSubscriptions.objects = subscribers;
        this.storage.getItem("object.open" + this.userKey).then((channel) => {
          console.log(channel);
          this.channel = channel;
          this.pageTitle = this.channel.data["label"];
          this.storage.getItem("objects.msgs" + channel._id + this.userKey).then((msgs) => {
            if (msgs) {
              this.channelMsgs = msgs;
              this.getMsgs(channel._id, this.channelMsgs['sync']);
            }else this.getMsgs(channel._id, 0);
            this.syncing = false;
          },
          error => {
            console.error(error);
          });
        },
        error => {
          console.error(error);
        });
      });
  }

  getMsgs(channelId, sync){
    var query = [];

    if (sync) query.push('sync='+ sync);

    this.dataService.getMessengerData([ "connectedTo", channelId ], query )
      .subscribe ( msgData => {
        for ( let msg of msgData )
            this.channelMsgs['objects'].push(msg);

        if (this.channelMsgs['objects'].length){
          this.channelMsgs['sync'] = this.channelMsgs['objects'][this.channelMsgs['objects'].length-1]["sync"];
          this.storage.setItem("objects.msgs" + channelId + this.userKey, this.channelMsgs)
          .then(value => {
                console.error(value);
              },
              error => {
                console.error(error);
              });
          this.subTitle = this.changed(this.channelMsgs['sync']);
        }else{
          this.subTitle = "";
        }
      });
  }

  publishMessage(channelId){
    var body: KnowledgeMessageModel;

    body = this.fillBody(channelId);

    this.dataService.publishMessage(body)
            .subscribe((data: any) => {
              console.log(data);
              this.getData();
              this.inputMsg = "";
            },(err: any) => {console.log(err);});
  }

  fillBody(channelId){
    var item = {
      "type": 'action',
      "category": 'message',
      "root": channelId,
      "location": this.getGeo(),
      "data": {
        "message": this.inputMsg,
        "enabled": true,
        "profile": this.userKey
      },
      "relations": {
        "connectedTo":[{
          id: channelId,
          view: true,
          publish: true
        }],
        "ownedBy": [{
          id: this.userKey,
          view: true,
          publish: true
        }],
        "subscribedBy": this.channel.relations.subscribedBy
      }
    };
    return new KnowledgeModel(item);
  }

  getGeo(){
    return {
      type: "Point",
      text: "",
      coordinates: [0, 0]
    };
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

  /** Consume a message from the _mqService */
  public on_next = (message: Packet) => {

    // Store message in "historic messages" queue
    this.mq.push(message);

    if (message) {
      this.pushTopic = message["topic"];
      let changedObj = message["payload"];
      this.pushMessage = JSON.parse(changedObj);
      if (this.pushTopic === this.channel._id && this.pushMessage.sync > this.channelMsgs.sync){
        this.channelMsgs.objects.unshift(this.pushMessage);
        this.channelMsgs.sync = this.pushMessage.sync;
        this.storage.setItem("objects.msgs" + this.channel._id + this.userKey, this.channelMsgs)
            .then(
              () => console.log('Stored lastMsgs!'),
              error => console.error('Error storing item', error)
            );
      }
    }
    // Count it
    this.count++;
  }

  trackBySync(index,item){
    return item.sync;
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
