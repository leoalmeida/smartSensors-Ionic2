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
import { NavController, NavParams } from 'ionic-angular';
import { FacebookAuth, User } from '@ionic/cloud-angular';
import { DataService } from '../../providers/apiData.service';
import { LoginPage } from '../login/login';
var ProfilePage = (function () {
    function ProfilePage(user, facebookAuth, navCtrl, navParams, dataService) {
        this.user = user;
        this.facebookAuth = facebookAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.userReady = false;
        this.followings = [];
        this.selectedItem = navParams.get('item');
        this.userKey = navParams.get('key');
        //this.profile = this.user.details;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getOne([this.userKey]).subscribe(function (data) {
            _this.profile = data;
        });
        this.dataService.getData(["subscribedBy", this.userKey], null).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var follow = data_1[_i];
                _this.followings.push(follow);
            }
        });
    };
    ProfilePage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    ProfilePage.prototype.removeSelected = function (item) {
        //this.followingsService.remove(item);
    };
    ;
    ProfilePage.prototype.doFbLogout = function () {
        this.facebookAuth.logout()
            .then(function (response) {
            //user logged out so we will remove him from the NativeStorage
            this.navCtrl.push(LoginPage);
        }, function (error) {
            console.log(error);
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [User,
        FacebookAuth,
        NavController,
        NavParams,
        DataService])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map