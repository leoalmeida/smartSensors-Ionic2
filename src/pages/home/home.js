var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavParams, NavController, Platform, AlertController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { KnowledgeModel } from '../../models/knowledge.model';
import { DataService } from '../../providers/apiData.service';
//import { Packet } from 'mqtt';
//import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
var period = 6000000; //10 mins
var HomePage = (function () {
    function HomePage(navCtrl, platform, navParams, user, auth, alertCtrl, dataService, localNotifications, socialSharing, speechRecognition, 
        //private _mqService: MQTTService,
        storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.user = user;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.localNotifications = localNotifications;
        this.socialSharing = socialSharing;
        this.speechRecognition = speechRecognition;
        this.storage = storage;
        // Stream of messages
        //public messages: Observable<Packet>;
        // Array of historic message (bodies)
        //public mq: Array<Packet> = [];
        // A count of messages received
        this.count = 0;
        this.configb = {
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
        this.config = {
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
        this.notifications = [];
        this.ouvintes = [];
        this.lastSync = 0;
        this.objectChannels = {};
        this.channels = []; // Array of historic channels
        this.lookup = {};
        this.channel_count = 0; // A count of messages received
        this.op = "$gt";
        this.viewModel = [];
        this.pushTopic = "";
        this.pushMessage = "push message will be displayed here";
        this.speeachAvailable = false;
        this.userKey = navParams.get("key");
        console.log(user);
        if (this.platform.is('cordova')) {
            this.speechRecognition.isRecognitionAvailable()
                .then(function (available) {
                console.log(available);
                if (!available) {
                    _this.speeachAvailable = available;
                    return;
                }
                // Check permission
                _this.speechRecognition.hasPermission()
                    .then(function (hasPermission) {
                    console.log(hasPermission);
                    if (!hasPermission)
                        _this.speechRecognition.requestPermission()
                            .then(function () {
                            _this.speeachAvailable = true;
                            console.log('Granted');
                        }, function () {
                            _this.speeachAvailable = false;
                            console.log('Denied');
                        });
                    else
                        _this.speeachAvailable = hasPermission;
                });
            });
        }
        //this.config.user      = this.user.id;
        //this.config.pass      = this.user.id;
        //this.config.subscribe = [];
        storage.ready().then(function () {
            _this.storage.get("subscribedBy" + _this.userKey).then(function (subscriptions) {
                console.log(subscriptions);
                if (subscriptions)
                    _this.channels = subscriptions;
                _this.storage.get("subscribedBySyncs" + _this.userKey).then(function (sync) {
                    var query = null;
                    if (sync)
                        _this.lastSync = sync;
                    if (_this.lastSync)
                        query = [_this.op, _this.lastSync];
                    _this.dataService.getData(["subscribedBy", _this.userKey], query)
                        .subscribe(function (newSubs) {
                        //config.subscribe = ["591eea676a040fc9091938d2", "58f3ac46866064c6189ec943","58f3ac46866064c6189ec927"];
                        if (!_this.channels)
                            _this.channels = [];
                        for (var _i = 0, newSubs_1 = newSubs; _i < newSubs_1.length; _i++) {
                            var subs = newSubs_1[_i];
                            var id = _this.channels.push(subs);
                            //this.config.subscribe.push ( subs._id );
                            if (_this.lastSync < subs.sync)
                                _this.lastSync = subs.sync;
                            _this.lookup[subs._id] = _this.channels[--id];
                        }
                        _this.storage.set("subscribedBy" + _this.userKey, _this.channels);
                        _this.storage.set("subscribedBySyncs" + _this.userKey, _this.lastSync);
                        // ... then pass it to (and connect) the message queue:
                        /*this._mqService.configure(config);
                         this._mqService.try_connect()
                         .then(this.on_connect)
                         .catch(this.on_error);*/
                    });
                    for (var item in _this.channels) {
                        if (_this.channels[item].sync < Date.now() - period)
                            _this.channels.splice(item, 1);
                    }
                });
            });
        });
    }
    HomePage.prototype.doSpeech = function () {
        if (!this.speeachAvailable) {
            console.log("Speech not available");
            return;
        }
        var options = {
            language: "pt-BR",
            matches: 1
        };
        // Start the recognition process
        this.speechRecognition.startListening(options)
            .subscribe(function (matches) { return console.log(matches); }, function (onerror) { return console.log('error:', onerror); });
    };
    HomePage.prototype.stopSpeech = function () {
        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening();
    };
    HomePage.prototype.changed = function (item) {
        var now = Date.now();
        var diffMs = (now - item);
        var diffTime = Math.floor(diffMs / 86400000); // days
        if (diffTime > 0)
            return diffTime;
        diffTime = Math.floor((diffMs % 86400000) / 3600000); // hours
        if (diffTime > 0)
            return diffTime;
        return Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    };
    HomePage.prototype.trackBySync = function (index, item) {
        return item.sync;
    };
    HomePage.prototype.share = function (info) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Compartilhar alerta');
        alert.addInput({
            type: 'string',
            name: 'msg',
            label: 'Mensagem'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Face',
            handler: function (data) {
                console.log('Face data:', data);
                _this.shareFacebook(info, data.msg);
            }
        });
        alert.addButton({
            text: 'Whats',
            handler: function (data) {
                console.log('Whats data:', data);
                _this.shareWhats(info, data.msg);
            }
        });
        alert.present();
    };
    HomePage.prototype.shareFacebook = function (info, message) {
        // Check if sharing via email is supported
        this.socialSharing.shareViaFacebook(message, info.data.image).then(function () { }).catch(function () {
            // Sharing via face is not possible
        });
    };
    HomePage.prototype.shareWhats = function (info, message) {
        // Check if sharing via email is supported
        this.socialSharing.shareViaWhatsApp(message, info.data.image).then(function () { }).catch(function () {
            // Sharing via Whats is not possible
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        //this._mqService.disconnect();
    };
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
    HomePage.prototype.selectUserChannels = function () {
        /*this.dataService.getData(["channel","user", this.userKey])
          .subscribe(this.on_channel);
                           //console.log(JSON.stringify(data));
                           for (let chan of data){
                              this.selectObjects(chan.relations.next);
                              this.selectAssociations(chan.relations.next);
                            }*/
    };
    /** Consume a channel */
    /*public on_channel = (channel) => {
  
      // Store channels
      for (let chan of channel){
         this.channels.push(chan);
         // Count it
         this.channel_count++;
      }
    }*/
    HomePage.prototype.selectObjects = function (channelId) {
        var _this = this;
        this.dataService.getData([channelId], null)
            .subscribe(function (model) {
            _this.channels.push(new KnowledgeModel(model));
        });
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(LoginPage);
    };
    HomePage.prototype.addNotifications = function () {
        var _this = this;
        var firstNotificationTime = new Date();
        firstNotificationTime.setSeconds(firstNotificationTime.getSeconds() + 10);
        var notification = {
            id: 1,
            title: 'Hey!',
            text: 'You just got notified :)',
            at: firstNotificationTime,
            data: { secret: this.userKey }
        };
        this.notifications.push(notification);
        console.log("Notifications to be scheduled: ", this.notifications);
        if (this.platform.is('cordova')) {
            // Cancel any existing notifications
            this.localNotifications.cancelAll().then(function () {
                // Schedule the new notifications
                _this.localNotifications.schedule(_this.notifications);
                _this.notifications = [];
            });
        }
    };
    HomePage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        NavParams,
        User,
        Auth,
        AlertController,
        DataService,
        LocalNotifications,
        SocialSharing,
        SpeechRecognition,
        Storage])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map