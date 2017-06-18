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
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ChatsDetailPage } from './chats-detail';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { DataService } from '../../providers/apiData.service';
import { SyncObjectModel } from '../../models/interfaces';
var ChatsPage = (function () {
    function ChatsPage(navCtrl, platform, navParams, user, auth, alertCtrl, dataService, _mqService, localNotifications, socialSharing, speechRecognition, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.user = user;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this._mqService = _mqService;
        this.localNotifications = localNotifications;
        this.socialSharing = socialSharing;
        this.speechRecognition = speechRecognition;
        this.storage = storage;
        // Array of historic message (bodies)
        this.mq = [];
        // A count of messages received
        this.count = 0;
        this.config = {
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
        this.notifications = [];
        this.lastSync = 0;
        this.op = "$gt";
        this.objectLastMsgs = {};
        this.objectChannels = new SyncObjectModel(); // Array of historic channels
        this.pushTopic = "";
        this.pushMessage = "push message will be displayed here";
        this.speeachAvailable = false;
        this.on_connect = function () {
            // Store local reference to Observable
            // for use with template ( | async )
            _this.messages = _this._mqService.messages;
            // Subscribe a function to be run on_next message
            _this.messages.subscribe(_this.on_next);
        };
        /** Consume a message from the _mqService */
        this.on_next = function (message) {
            // Store message in "historic messages" queue
            _this.mq.push(message);
            if (message) {
                _this.pushTopic = message["topic"];
                var changedObj = message["payload"];
                _this.pushMessage = changedObj.toString();
                if (changedObj.sync > _this.objectLastMsgs[message["topic"]].sync)
                    _this.objectLastMsgs[message["topic"]][changedObj.type] = changedObj.item;
            }
            // Count it
            _this.count++;
        };
        this.on_error = function () {
            console.error('Ooops, error in RawDataComponent');
        };
        this.userKey = navParams.get("key");
        this.config.clientId = this.userKey;
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
        this.config.user = this.user.id;
        this.config.pass = this.user.id;
        this.config.subscribe = [];
        storage.ready().then(function () {
            _this.storage.get("channels" + _this.userKey).then(function (channels) {
                console.log(channels);
                if (channels) {
                    _this.objectChannels = channels;
                    var _loop_1 = function (chan) {
                        if (!_this.objectLastMsgs[chan["_id"]])
                            _this.objectLastMsgs[chan["_id"]] = new SyncObjectModel();
                        _this.storage.get("channelLastMsgs" + chan["_id"] + _this.userKey).then(function (newMsgs) {
                            if (newMsgs)
                                _this.objectLastMsgs[chan["_id"]] = newMsgs;
                        });
                        _this.config.subscribe.push(chan["_id"]);
                    };
                    for (var _i = 0, _a = _this.objectChannels.objects; _i < _a.length; _i++) {
                        var chan = _a[_i];
                        _loop_1(chan);
                    }
                }
                var query = null;
                if (_this.objectChannels.sync)
                    query = [_this.op, _this.objectChannels.sync];
                _this.dataService.getData(["subscribedBy", _this.userKey], query)
                    .subscribe(function (newChannels) {
                    for (var _i = 0, newChannels_1 = newChannels; _i < newChannels_1.length; _i++) {
                        var chan = newChannels_1[_i];
                        var id = _this.objectChannels.objects.push(chan);
                        if (_this.lastSync < chan.sync)
                            _this.objectChannels.sync = chan.sync;
                        _this.objectChannels.items[chan._id] = _this.objectChannels.objects[--id];
                        if (!_this.objectLastMsgs[chan._id])
                            _this.objectLastMsgs[chan._id] = new SyncObjectModel();
                        _this.config.subscribe.push(chan["_id"]);
                        _this.getLastMsgs(chan._id, 0);
                    }
                    _this.storage.set("channels" + _this.userKey, _this.objectChannels);
                    // ... then pass it to (and connect) the message queue:
                    /*this._mqService.configure(this.config);
                     this._mqService.try_connect()
                     .then(this.on_connect)
                     .catch(this.on_error);*/
                });
            });
        });
    }
    ChatsPage.prototype.getLastMsgs = function (channelId, sync) {
        var _this = this;
        var msgLimit = 5;
        var query = [];
        query.push('limit=' + msgLimit);
        if (sync)
            query.push('sync=' + sync);
        //query.op = '$gt';
        //query.sort = 'sync';
        //query.sortTp = -1;
        this.dataService.getMessengerData(["connectedTo", channelId], query)
            .subscribe(function (msgData) {
            for (var _i = 0, _a = msgData.reverse(); _i < _a.length; _i++) {
                var msg = _a[_i];
                if (_this.objectLastMsgs[channelId].objects.length >= msgLimit)
                    _this.objectLastMsgs[channelId].objects.pop();
                _this.objectLastMsgs[channelId].objects.unshift(msg);
            }
            _this.objectLastMsgs[channelId].sync = sync;
            _this.storage.set("channelLastMsgs" + channelId + _this.userKey, _this.objectLastMsgs[channelId]);
        });
    };
    ChatsPage.prototype.openChats = function ($event, channel) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.set("channelOpen" + _this.userKey, channel);
            _this.navCtrl.push(ChatsDetailPage, {
                channel: channel,
                key: _this.userKey
            });
        });
    };
    ChatsPage.prototype.doSpeech = function () {
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
    ChatsPage.prototype.stopSpeech = function () {
        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening();
    };
    ChatsPage.prototype.share = function (info) {
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
    ChatsPage.prototype.shareFacebook = function (info, message) {
        // Check if sharing via email is supported
        this.socialSharing.shareViaFacebook(message, info.data.image).then(function () { }).catch(function () {
            // Sharing via face is not possible
        });
    };
    ChatsPage.prototype.shareWhats = function (info, message) {
        // Check if sharing via email is supported
        this.socialSharing.shareViaWhatsApp(message, info.data.image).then(function () { }).catch(function () {
            // Sharing via Whats is not possible
        });
    };
    ChatsPage.prototype.addNotifications = function () {
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
    ChatsPage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
    };
    ChatsPage.prototype.ngOnDestroy = function () {
        this._mqService.disconnect();
    };
    ChatsPage.prototype.trackBySync = function (index, item) {
        return item._id;
    };
    ChatsPage.prototype.changed = function (item) {
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
    return ChatsPage;
}());
ChatsPage = __decorate([
    Component({
        selector: 'page-chats',
        templateUrl: 'chats.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Platform,
        NavParams,
        User,
        Auth,
        AlertController,
        DataService,
        MQTTService,
        LocalNotifications,
        SocialSharing,
        SpeechRecognition,
        Storage])
], ChatsPage);
export { ChatsPage };
//# sourceMappingURL=chats.js.map