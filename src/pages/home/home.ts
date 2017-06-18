import { Component , OnDestroy } from '@angular/core';
import { NavParams, NavController, Platform, AlertController  } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable }        from 'rxjs/Observable';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';

import { KnowledgeModel } from '../../models/knowledge.model';
import { DataService } from '../../providers/apiData.service';

//import { Packet } from 'mqtt';
//import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { SocialSharing } from '@ionic-native/social-sharing';


const period: number = 6000000; //10 mins

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {

  // Stream of messages
  //public messages: Observable<Packet>;

  // Array of historic message (bodies)
  //public mq: Array<Packet> = [];

  // A count of messages received
  public count = 0;

  public configb = {
      "host": "m11.cloudmqtt.com",
      "port": 31102,
      "path": "",
      "ssl": true,
      "user": "guest",
      "pass": "guest",
      "subscribe": [],
      "publish": [],
      "keepalive": 10
  };

  public config = {
    "host": "192.168.0.6",
    "port": 1883,
    "path": "",
    "ssl": true,
    "user": "guest",
    "pass": "guest",
    "subscribe": ["channelupdates"],
    "publish": ["channelupdates"],
    "keepalive": 10
  };

  errorMessage: string;
  selectedItem: any;
  keys: any[];

  notifications: any[] = [];

  ouvintes: Array<number> = [];

  asyncChannels$: Observable<KnowledgeModel[]>;
  lastSync: number = 0;
  objectChannels: Object = {};


  public userKey: any;
  public channels: any = [];// Array of historic channels
  public lookup: Object = {};
  public channel_count = 0;// A count of messages received

  op: string = "$gt";
  viewModel: any = [];
  pushTopic: string = "";
  pushMessage: string = "push message will be displayed here";

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              public user:User,
              public auth:Auth,
              public alertCtrl: AlertController,
              public dataService:DataService,
              private localNotifications: LocalNotifications,
              private socialSharing: SocialSharing,
              //private _mqService: MQTTService,
              public storage: Storage) {
    this.userKey = navParams.get("key");
    console.log(user);

    //this.config.user      = this.user.id;
    //this.config.pass      = this.user.id;
    //this.config.subscribe = [];

    storage.ready().then(() => {
        this.storage.get("subscribedBy" + this.userKey).then((subscriptions) => {
          console.log(subscriptions);

          if (subscriptions) this.channels = subscriptions;

          this.storage.get("subscribedBySyncs" + this.userKey).then((sync) => {
              let query = null;
              if (sync) this.lastSync = sync;

              if (this.lastSync) query = [ this.op, this.lastSync ];

              this.dataService.getData( [ "subscribedBy", this.userKey ], query )
                .subscribe ( newSubs => {
                  //config.subscribe = ["591eea676a040fc9091938d2", "58f3ac46866064c6189ec943","58f3ac46866064c6189ec927"];
                  if (!this.channels) this.channels = [];
                  for ( let subs of newSubs ) {
                    let id = this.channels.push ( subs );
                    //this.config.subscribe.push ( subs._id );
                    if ( this.lastSync < subs.sync ) this.lastSync = subs.sync;
                    this.lookup[ subs._id ] = this.channels[ -- id ];
                  }

                  this.storage.set("subscribedBy" + this.userKey, this.channels);
                  this.storage.set("subscribedBySyncs" + this.userKey, this.lastSync );

                  // ... then pass it to (and connect) the message queue:
                  /*this._mqService.configure(config);
                   this._mqService.try_connect()
                   .then(this.on_connect)
                   .catch(this.on_error);*/
                });

              for ( let item in this.channels ) {
                if ( this.channels[ item ].sync < Date.now () - period ) this.channels.splice(item,1);
              }
          });
        });
    });
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

  trackBySync(index,item){
    return item.sync;
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

  ngOnDestroy() {
    //this._mqService.disconnect();
  }


  /** Callback on_connect to queue */
  /*public on_connect = () => {

    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this._mqService.messages;

    // Subscribe a function to be run on_next message
    this.messages.subscribe(this.on_next);
  }*/

  /** Consume a message from the _mqService */
  /*public on_next = (message: Packet) => {

    // Store message in "historic messages" queue
    this.mq.push(message);

    if (message) {
      this.pushTopic = message["topic"];
      let changedObj = message["payload"];
      this.pushMessage = changedObj.toString();
      if (changedObj.sync > this.lookup[message["topic"]].sync)
        this.lookup[message["topic"]][changedObj.type] = changedObj.item;
    }

    // Count it
    this.count++;
  }

  public on_error = () => {
    console.error('Ooops, error in RawDataComponent');
  }
*/
  /*exitApp(){
    console.log("----------");
    this.platform.exitApp();
  }*/

  selectUserChannels() {
    /*this.dataService.getData(["channel","user", this.userKey])
      .subscribe(this.on_channel);
                       //console.log(JSON.stringify(data));
                       for (let chan of data){
                          this.selectObjects(chan.relations.next);
                          this.selectAssociations(chan.relations.next);
                        }*/
  }

  /** Consume a channel */
  /*public on_channel = (channel) => {

    // Store channels
    for (let chan of channel){
       this.channels.push(chan);
       // Count it
       this.channel_count++;
    }
  }*/

  selectObjects(channelId) {
    this.dataService.getData([channelId],null)
            .subscribe(model => {
              this.channels.push(new KnowledgeModel(model));
            });
  }

  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
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

}
