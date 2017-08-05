import { Component, OnDestroy, OnInit} from '@angular/core';

import { ModalController,Events, NavParams, NavController, Platform, AlertController,LoadingController  } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { NativeStorage } from '@ionic-native/native-storage';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { RealTimeDetailPage } from './realtime-detail';

import { SocialSharing } from '@ionic-native/social-sharing';

import { Packet } from 'mqtt';
import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { TransportState } from '../../providers/mqtt/transport.service';
import { DataService } from '../../providers/apiData.service';
import { ConnectionService } from '../../providers/connection.service';

import { ShowMapModal }  from '../modals/show-map-modal';
import { RelationModel } from '../../models/relation.model';
import {
  KnowledgeChannelModel, KnowledgeMessageModel, ProfileModel, AssociationModel,
  SyncObjectModel, EquipmentModel, ChannelModel, KnowledgeInterface
} from '../../models/interfaces';
import { Observable, BehaviorSubject, Subscription } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';

import { PlotlyComponent } from '../plotly/plotly.component';

@Component({
  selector: 'page-realtime',
  templateUrl: 'realtime.html'
})
export class RealTimePage implements OnDestroy, OnInit{
  syncing: any = false;
  // Stream of messages
  public messages: Observable<Packet>;
  public state: Observable<string>;
  // Array of historic message (bodies)
  public mq: Array<Packet> = [];

  // A count of messages received
  public count = 0;

  public clientId:string;

  errorMessage: string;
  selectedItem: any;
  userKey: any;

  keys: any[];
  notifications: any[] = [];
  lastSync: number = 0;
  op: string = "$gt";

  channels: string;
  public objectLastMsgs:any = {};
  public lastmsg:any = {};
  public myChannels: SyncObjectModel<KnowledgeChannelModel> = new SyncObjectModel<KnowledgeChannelModel>();
  public listSubscriptions:any = {};
  public storeChannels: SyncObjectModel<KnowledgeChannelModel> = new SyncObjectModel<KnowledgeChannelModel>();
  public arrayChannels: KnowledgeChannelModel[];

  pushTopic: string = "";
  pushMessage: any = {};
  loader: any;
  loadingCount: number = 0;

  myChannelSearchTerm: string = '';
  storeSearchTerm: string = '';
  myChannelSearchControl: FormControl;
  storeSearchControl: FormControl;
  searching: any = false;

  storeChannelsSubject: BehaviorSubject<any> = new BehaviorSubject({});
  myChannelsSubject: BehaviorSubject<any> = new BehaviorSubject({});
  myChannelMsgSubject: BehaviorSubject<any> = new BehaviorSubject(null);;
  filteredStoreChannels: any = [];
  myFilteredChannels: any = [];
  msgLimit = 1;

  public PlotlyLayout: any;
  public PlotlyData: any;
  public PlotlyOptions: any;
  public channelMsgList = {};

  constructor(public navCtrl: NavController,
              public events: Events,
              public platform: Platform,
              public navParams: NavParams,
              public user:User,
              public auth:Auth,
              public alertCtrl: AlertController,
              public dataService:DataService,
              public loadingCtrl:LoadingController,
              public modalCtrl: ModalController,
              private _mqService: MQTTService,
              private localNotifications: LocalNotifications,
              private socialSharing: SocialSharing,
              public connectionService:ConnectionService,
              private storage: NativeStorage) {
    this.userKey = navParams.get("key");
    this.channels = "myChannels";
    console.log(user);
    this.myChannelSearchControl = new FormControl();
    this.storeSearchControl = new FormControl();
    //platform.registerBackButtonAction(()=>this.startRealTimePage());
    this.configurePage();
    this.startRealTimePage();

    this.myChannelMsgSubject
            .subscribe(msg => {
              if(msg){
                this.lastmsg[msg.topic].profile = msg.message.data.profile;
                this.lastmsg[msg.topic].message = msg.message.data.message;
                this.lastmsg[msg.topic].sync = msg.message.sync;
                this.lastmsg[msg.topic].sync = msg.message.sync;
                this.channelMsgList[msg.topic].push(msg.message.data.updatedValue);
                this.setPlot(msg.topic);
                this.storage.setItem("last.msgs" + msg.topic + this.userKey, msg.message)
                    .then(
                      () => console.log('Stored lastMsgs!'),
                      error => console.error('Error storing item', error)
                    );
              }
            });
    this.storeChannelsSubject
            .subscribe(data => {
              if(data){
                if (data.action === 'pushAll')
                  this.storeChannels["objects"] = this.storeChannels["objects"].concat(data.item);
                else if (data.action === 'push')
                  this.storeChannels["objects"].push(data.item);
                else if (data.action === 'splice'){
                  let array = this.storeChannels["objects"];
                  let idx = array.findIndex(this.findItem, data.item);
                  if (idx>=0)
                    this.storeChannels["objects"].splice(idx, 1);
                  else
                    console.log("storeChannels not found")
                }
                this.setFilteredStore();
              }
            });
    this.myChannelsSubject
            .subscribe(data => {
              if(data){
                if (data.action === 'push'){
                  this.lastmsg[data.item._id] = {profile: "", message: "", sync: 0};
                  this.myChannels["objects"].push(data.item);
                  //this.getItems(itemIDX-1)
                }else if (data.action === 'splice'){
                  let array = this.myChannels["objects"];
                  let idx = array.findIndex(this.findItem, data.item);
                  if (idx>=0){
                    delete this.objectLastMsgs[data.item];
                    this.myChannels["objects"].splice(idx, 1);
                  }else console.log("myChannels not found")
                }
                this.setFilteredChannels();
              }
            });

    this.state = this._mqService.state
      .map((state: number) => {
        this.syncing = (state === TransportState.ENVIANDO);
        return TransportState[state];
      });
  }

  ngOnInit() {
    this.PlotlyLayout = {
        title: "Variação",
        height: 500,
        width: 1200
    };
  }

  setPlot(topic){
    this.PlotlyData = [
           {
               x: Object.keys(this.channelMsgList[topic]),
               y: this.channelMsgList[topic],
               name: "Leituras",
               mode: 'markers',
               type: 'scatter'
           }
       ];
  }

  ionViewDidLoad() {
    //this.setFilteredRules();
    //this.setFilteredActions();

    this.myChannelSearchControl.valueChanges.debounceTime(700).subscribe(search => {
      // if the value is an empty string don't filter the items
      if (search && search.trim() != '') {
        if (search.length <= 3) return;
        this.setFilteredChannels();
      }else{
        this.myFilteredChannels = this.myChannels["objects"];
      }
      this.searching = false;
    });
    this.storeSearchControl.valueChanges.debounceTime(700).subscribe(search => {
      // if the value is an empty string don't filter the items
      if (search && search.trim() != '') {
        if (search.length <= 3) return;
        this.setFilteredStore();
      }else{
        this.filteredStoreChannels = this.storeChannels["objects"];
      }
      this.searching = false;
    });
  }

  findItem(element){
    return (element._id === this);
  }
  configurePage(){
    let config:any = {}
    config.clientId = this.user.get('key','');
    config.user = this.user.id;
    config.pass = this.auth.getToken();
    config.lat = 0;
    config.lng = 0;
    config.subscriptions = {};
    config.publish = [];
    config.path = "";

    // ... then pass it to (and connect) the message queue:
    this._mqService.configure(config);
    this._mqService.try_connect()
     .then(this.on_connect)
     .catch(this.on_error);
  }

  startRealTimePage(){
    this.syncing = true;
    this.listSubscriptions = {};
    this.objectLastMsgs = {};
    this.myChannels["objects"] = [];
    this.dataService.getData<KnowledgeInterface<EquipmentModel, AssociationModel>>( [ "eq", "subscribedBy", this.userKey ].join("/"),null)
      .subscribe ( newChannels => {
        for (let chan of newChannels)
          this.includeChannel(chan);
      });

    this.storeChannels["objects"] = [];
    this.dataService.getData<KnowledgeInterface<EquipmentModel, AssociationModel>>( [ "not", "subscribedBy", this.userKey ].join("/"),null)
      .subscribe ( storeChannels => {
        //this.storeChannels["objects"] = storeChannels;
        this.storeChannelsSubject.next({item: storeChannels, action: 'pushAll'});
      });
    this.syncing = false;
  };

  getItems(index){
    this.platform.ready().then((readySource) => {
      let lastSync = 0;
      let channel = this.myChannels["objects"][index];
      //if (!this.objectLastMsgs[channel["_id"]]) this.objectLastMsgs[channel["_id"]] = new SyncObjectModel<KnowledgeMessageModel>();
      this.storage.getItem("last.msgs." + channel["_id"] + this.userKey).then((newMsgs) => {
        if (newMsgs) {
          this.objectLastMsgs[channel["_id"]] = newMsgs;
          lastSync = newMsgs[newMsgs.length-1];
        }
        //this.getLastMsgs(channel["_id"], lastSync);
      },
      error => {
        console.error(error);
      });
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
    var query = [];

    query.push('limit='+ this.msgLimit);
    if (sync) query.push('sync='+ sync);
    //query.op = '$gt';
    //query.sort = 'sync';
    //query.sortTp = -1;

    this.dataService.getMessengerData([ "connectedTo", channelId ], query )
      .subscribe ( msgData => {
        for ( let msg of msgData.reverse() ) {
          if (this.objectLastMsgs[channelId].objects.length >= this.msgLimit) this.objectLastMsgs[channelId].objects.pop();
          this.objectLastMsgs[channelId].objects.unshift(msg);
        }
        this.objectLastMsgs[channelId].sync = sync;
        this.storage.setItem("last.msgs" + channelId + this.userKey, this.objectLastMsgs[channelId])
              .then(
                () => console.log('Stored lastMsgs!'),
                error => console.error('Error storing item', error)
              );
      });
  }

  showMap() {
    let modal = this.modalCtrl.create(ShowMapModal,{ items: this.myFilteredChannels, key: this.userKey });
    modal.present();
  }

  unsubscribe(channel){
    let loader = this.loadingCtrl.create({
      content: "Cancelando assinatura..."
    });
    loader.present();
    this._mqService.unsubscribe(channel._id);
    this.dataService.removeAssociation(channel._id, "subscribedBy", this.userKey)
              .subscribe((data: any) => {
                console.log(data);
                this.dataService.removeAssociation(this.userKey, "subscriberAt", channel._id)
                          .subscribe((data: any) => {
                            this.myChannelsSubject.next({item: channel._id, action: 'splice'});
                            this.storeChannelsSubject.next({item: channel, action: 'push'});
                            console.log(data);
                            loader.dismissAll();
                          });
              });
  }

  subscribe(channel){
    let loader = this.loadingCtrl.create({
      content: "Ativando assinatura..."
    });
    loader.present();
    let chanRelation = new RelationModel({ id: this.userKey });
    this.dataService.addAssociation(channel._id, "subscribedBy", chanRelation)
              .subscribe((data: any) => {
                console.log(data);
                let userRelation = new RelationModel({ id: channel._id });
                this.dataService.addAssociation(this.userKey, "subscriberAt", userRelation)
                          .subscribe((data: any) => {
                            console.log(data);
                            this.includeChannel(channel);
                            this.storeChannelsSubject.next({item: channel._id, action: 'splice'});
                            loader.dismissAll();
                          });
              });
  }

  doAction(channel){
    /*
      //--------------------------------------------//
      /// resolution = 0x3FF;
      /// range = opts.range || [0, resolution];
      /// limit = opts.limit || null;
      /// this.threshold = opts.threshold === undefined ? 1 : opts.threshold;
      /// isScaled = false;
      ///
      /// state = {
            enabled: typeof opts.enabled === "undefined" ? true : opts.enabled,
            booleanBarrier: opts.type === "digital" ? 0 : null,
            intervalId: null,
            scale: null,
            value: 0,
            median: 0,
            freq: opts.freq || 25,
            previousFreq: opts.freq || 25,
          }
      ///if Digital
      ///commands:
      ///   command: "", mode: 0
      ///if I2C
      ///commands:
      ///   command: "", mode: 6
      ////*** address = addresses
      ///if Analog
      ///commands:
      ///   command: "", mode: 2
      ///   calibrationDelay: 10
      ///   toBoolean: {
      ///     value: function(raw) {
      ///       return raw >> 9 === 0;
      ///     }
      ///   }
      //--------------------------------------------//
      commands:[{
        command: "",
        mode: "",
      }],
      pin: 12,
      freq: freq || 25,
      calibrationDelay: 2000,
      toBoolean: {
        value: function(raw) {
          return !!raw;
        }
      }
    */
    let actionMsg = {
      type: "action",
      category: "command",
      data: channel.data["configurations"],
      sync: Date.now(),
      access: channel._id
    };
    this._mqService.publish([channel._id,"action"].join(), JSON.stringify(actionMsg));
  }

  includeChannel(channel){
    console.log("channel: ", channel)
    this.myChannelsSubject.next({item: channel, action: 'push'});
    this.channelMsgList[channel._id] = [];
    //this.myChannelMsgSubject = new BehaviorSubject({});
    this._mqService.subscribe(channel._id);
    this.dataService.getData<ProfileModel>( [ "eq", "subscriberAt", channel._id ].join("/"),null)
      .subscribe ( subscribers => {
        this.listSubscriptions[channel._id] = new SyncObjectModel<KnowledgeInterface<ProfileModel, AssociationModel>>();
        this.listSubscriptions[channel._id].objects = subscribers;
        for (let sub of subscribers){
          this.listSubscriptions[channel._id].items[sub._id] = sub;
        }
      });
  }

  onSearchInput(type){
    this.searching = true;
  }

  setFilteredChannels() {
    if (this.myChannels){
      if (this.myChannelSearchTerm && this.myChannelSearchTerm.trim() != '')
        this.myFilteredChannels = this.myChannels["objects"].filter(this.filterChannels, this.myChannelSearchTerm);
      else
        this.myFilteredChannels = this.myChannels["objects"];
    }
  }

  setFilteredStore() {
    if (this.storeChannels){
      if (this.storeSearchTerm && this.storeSearchTerm.trim() != '')
        this.filteredStoreChannels = this.storeChannels["objects"].filter(this.filterChannels, this.storeSearchTerm);
      else
        this.filteredStoreChannels = this.storeChannels["objects"];
    }
  }

  filterChannels(element, index, array){
    return (element._id.indexOf(this["toLowerCase"]()) > -1 ||
      element.data.label.toLowerCase().indexOf(this["toLowerCase"]()) > -1 ||
      element.category.toLowerCase().indexOf(this["toLowerCase"]()) > -1 ||
      element.type.toLowerCase().indexOf(this["toLowerCase"]()) > -1);
  }


  likeit(itemid){
    let chanRelation = new RelationModel({ id: this.userKey });
    this.dataService.addAssociation(itemid, "likedBy", chanRelation)
              .subscribe((data: any) => {
                console.log(data);
                this.startRealTimePage();
              },(err: any) => {console.log(err);});
  }

  openDetail($event, channel){
    this.platform.ready().then((readySource) => {
      this.storage.setItem( "object.open" + this.userKey, channel)
            .then(
              () => console.log('Stored object.open!'),
              error => console.error('Error storing item', error)
            );

      this.navCtrl.push(RealTimeDetailPage, {
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
      this.pushMessage = JSON.parse(changedObj);
      if (!this.lastmsg[this.pushTopic] ||
          this.pushMessage.sync > this.lastmsg[this.pushTopic].sync){
        this.myChannelMsgSubject.next({topic: this.pushTopic, message:this.pushMessage});
      }
      /*if (this.pushMessage.sync > this.objectLastMsgs[this.pushTopic].sync){
        if (this.objectLastMsgs[this.pushTopic].objects.length >= this.msgLimit) this.objectLastMsgs[this.pushTopic].objects.pop();
        this.objectLastMsgs[this.pushTopic].objects.unshift(this.pushMessage);
        this.objectLastMsgs[this.pushTopic].sync = this.pushMessage.sync;
        this.storage.setItem("last.msgs" + this.pushTopic + this.userKey, this.objectLastMsgs[this.pushTopic])
            .then(
              () => console.log('Stored lastMsgs!'),
              error => console.error('Error storing item', error)
            );
      }*/
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

  colors = {
      "motion":"honeydew",
      "proximity":"honeydew",
      "temperature":"lightseagreen",
      "light":"mediumspringgreen",
      "rainmoisture":"mediumaquamarine",
      "soilmoisture":"aliceblue",
      "flow":"lightblue",
      "hygrometer":"powderblue",
      "gas":"lightskyblue",
      "oscillator":"firebrick",
      "relay":"deepskyblue",
      "led":"steelblue",
      "complex":"mistyrose",
      "topic":"salmon",
      "channel":"indianred",
      "profile":"tomato"
  };
}
