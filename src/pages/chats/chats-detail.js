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
import { DataService } from '../../providers/apiData.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { KnowledgeMessageModel, SyncObjectModel } from '../../models/interfaces';
var ChatsDetailPage = (function () {
    function ChatsDetailPage(navCtrl, platform, navParams, user, auth, alertCtrl, dataService, localNotifications, socialSharing, speechRecognition, storage) {
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
        this.pageTitle = "";
        this.op = "$gt";
        this.inputMsg = "";
        this.channelMsgs = new SyncObjectModel();
        this.speeachAvailable = false;
        this.notifications = [];
        this.userKey = navParams.get("key");
        this.channel = navParams.get("channel");
        this.pageTitle = this.channel.data.name;
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
        this.getData();
    }
    ChatsDetailPage.prototype.ngOnDestroy = function () {
        this.storage.remove("channelOpen" + this.userKey).then(function (channel) {
            console.log("removed: ", channel);
        });
    };
    ChatsDetailPage.prototype.getData = function () {
        var _this = this;
        this.storage.get("channelOpen" + this.userKey).then(function (channel) {
            console.log(channel);
            _this.channel = channel;
            _this.pageTitle = _this.channel.data.name;
            _this.storage.get("channelMsgs" + channel._id + _this.userKey).then(function (msgs) {
                if (msgs) {
                    _this.channelMsgs = msgs;
                    _this.getMsgs(channel._id, _this.channelMsgs['sync']);
                }
                else
                    _this.getMsgs(channel._id, 0);
            });
        });
    };
    ChatsDetailPage.prototype.getMsgs = function (channelId, sync) {
        var _this = this;
        var query = [];
        if (sync)
            query.push('sync=' + sync);
        this.dataService.getMessengerData(["connectedTo", channelId], query)
            .subscribe(function (msgData) {
            for (var _i = 0, msgData_1 = msgData; _i < msgData_1.length; _i++) {
                var msg = msgData_1[_i];
                _this.channelMsgs['objects'].push(msg);
            }
            _this.channelMsgs['sync'] = _this.channelMsgs['objects'][_this.channelMsgs['objects'].length - 1]["sync"];
            _this.storage.set("channelMsgs" + channelId + _this.userKey, _this.channelMsgs);
        });
    };
    ChatsDetailPage.prototype.publishMessage = function (channelId) {
        var body;
        body = this.fillBody(channelId);
        this.dataService.publishMessage(body);
    };
    ChatsDetailPage.prototype.fillBody = function (channelId) {
        var item;
        item.type = 'action';
        item.category = 'message';
        item.root = channelId;
        item.location = this.getGeo();
        item.data.message = this.inputMsg;
        item.data.enabled = true;
        item.data.comments = 0;
        item.data.dislikes = 0;
        item.data.likes = 0;
        item.data.profile = this.userKey;
        var userRelation;
        userRelation.id = this.userKey;
        userRelation.view = true;
        userRelation.publish = true;
        item.relations.ownedBy.push(userRelation);
        var channelRelation;
        channelRelation.id = channelId;
        channelRelation.view = true;
        channelRelation.publish = true;
        item.relations.connectedTo.push(channelRelation);
        item.relations.subscribedBy = this.channel.relations.subscribedBy;
        return new KnowledgeMessageModel(item);
    };
    ChatsDetailPage.prototype.getGeo = function () {
        var geo;
        geo.type = "Point";
        geo.text = "";
        geo.coordinates = [0, 0];
        return geo;
    };
    ChatsDetailPage.prototype.doSpeech = function () {
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
    ChatsDetailPage.prototype.stopSpeech = function () {
        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening();
    };
    ChatsDetailPage.prototype.share = function (info) {
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
    ChatsDetailPage.prototype.shareFacebook = function (info, message) {
        // Check if sharing via email is supported
        this.socialSharing.shareViaFacebook(message, info.data.image).then(function () { }).catch(function () {
            // Sharing via face is not possible
        });
    };
    ChatsDetailPage.prototype.shareWhats = function (info, message) {
        // Check if sharing via email is supported
        this.socialSharing.shareViaWhatsApp(message, info.data.image).then(function () { }).catch(function () {
            // Sharing via Whats is not possible
        });
    };
    ChatsDetailPage.prototype.addNotifications = function () {
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
    ChatsDetailPage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
    };
    ChatsDetailPage.prototype.trackBySync = function (index, item) {
        return item.sync;
    };
    ChatsDetailPage.prototype.changed = function (item) {
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
    return ChatsDetailPage;
}());
ChatsDetailPage = __decorate([
    Component({
        selector: 'page-chats-detail',
        templateUrl: 'chats-detail.html'
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
], ChatsDetailPage);
export { ChatsDetailPage };
//# sourceMappingURL=chats-detail.js.map