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
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, FacebookAuth, User } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { GraphPage } from '../graph/graph';
import { DataService } from '../../providers/apiData.service';
var LoginPage = (function () {
    function LoginPage(navCtrl, auth, facebookAuth, user, alertCtrl, dataService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.facebookAuth = facebookAuth;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.showVerifyCode = false;
        this.showForgotten = false;
        this.showRegister = false;
        this.showLogin = true;
        this.email = '';
        this.password = '';
        this.name = '';
        this.resetCode = 0;
        this.newPassword = '';
        this.pageTitle = "Login";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //console.log('LoginPage Page');
    };
    /*
    for both of these, if the right form is showing, process the form,
    otherwise show it
    */
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.showLogin) {
            console.log('process login');
            if (this.email === '' || this.password === '') {
                var alert_1 = this.alertCtrl.create({
                    title: 'Falha ao registrar',
                    subTitle: 'Todos os campos são obrigatórios',
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            var loader_1 = this.loadingCtrl.create({
                content: "Conectando..."
            });
            loader_1.present();
            this.auth.login('basic', { 'email': this.email, 'password': this.password }).then(function (userProfile) {
                console.log('Conectado: ', userProfile);
                _this.navCtrl.setRoot(HomePage);
                loader_1.dismissAll();
            }, function (err) {
                loader_1.dismissAll();
                console.log(err.message);
                var errors = '';
                if (err.message === 'UNPROCESSABLE ENTITY')
                    errors += 'Email isn\'t valid.<br/>';
                if (err.message === 'UNAUTHORIZED')
                    errors += 'Password is required.<br/>';
                var alert = _this.alertCtrl.create({
                    title: 'Falha ao conectar',
                    subTitle: errors,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            this.showLogin = true;
            this.showRegister = false;
            this.showForgotten = false;
            this.showVerifyCode = false;
            this.pageTitle = "Conectar";
        }
    };
    LoginPage.prototype.goGraph = function () {
        this.navCtrl.setRoot(GraphPage);
    };
    LoginPage.prototype.doRegister = function () {
        var _this = this;
        if (this.showRegister) {
            console.log('process register');
            /*
            do our own initial validation
            */
            if (this.name === '' || this.email === '' || this.password === '') {
                var alert_2 = this.alertCtrl.create({
                    title: 'Falha ao Registrar',
                    subTitle: 'Todos os campos são obrigatórios',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            var details_1 = { 'email': this.email, 'password': this.password, 'name': this.name };
            console.log(details_1);
            var loader_2 = this.loadingCtrl.create({
                content: "Registrando sua conta..."
            });
            loader_2.present();
            this.auth.signup(details_1).then(function () {
                console.log('ok signup');
                _this.auth.login('basic', { 'email': details_1.email, 'password': details_1.password }).then(function () {
                    loader_2.dismissAll();
                    _this.navCtrl.setRoot(HomePage);
                });
            }, function (err) {
                loader_2.dismissAll();
                var errors = '';
                for (var _i = 0, _a = err.details; _i < _a.length; _i++) {
                    var e = _a[_i];
                    console.log(e);
                    if (e === 'required_email')
                        errors += 'Email is required.<br/>';
                    if (e === 'required_password')
                        errors += 'Password is required.<br/>';
                    if (e === 'conflict_email')
                        errors += 'A user with this email already exists.<br/>';
                    //don't need to worry about conflict_username
                    if (e === 'invalid_email')
                        errors += 'Seu email não é válido.';
                }
                var alert = _this.alertCtrl.create({
                    title: 'Falha ao Registrar',
                    subTitle: errors,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            this.showLogin = false;
            this.showRegister = true;
            this.showForgotten = false;
            this.showVerifyCode = false;
            this.pageTitle = "Registrar";
        }
    };
    LoginPage.prototype.doForgotten = function () {
        var _this = this;
        if (this.showForgotten) {
            if (this.email === '') {
                var alert_3 = this.alertCtrl.create({
                    title: 'Email inválido',
                    subTitle: 'Todos os campos são obrigatórios',
                    buttons: ['OK']
                });
                alert_3.present();
                return;
            }
            console.log(this.email);
            var loader_3 = this.loadingCtrl.create({
                content: "Enviando código de acesso para seu email..."
            });
            loader_3.present();
            this.auth.requestPasswordReset(this.email).then(function () {
                _this.showLogin = false;
                _this.showRegister = false;
                _this.showVerifyCode = true;
                _this.showForgotten = false;
                _this.pageTitle = "Alterar senha";
                loader_3.dismissAll();
            });
        }
        else {
            this.showLogin = true;
            this.showRegister = false;
            this.showForgotten = true;
            this.showVerifyCode = false;
            this.pageTitle = "Recuperar acesso";
        }
    };
    LoginPage.prototype.doCodeVerification = function () {
        var _this = this;
        if (this.showVerifyCode) {
            if (this.resetCode < 0 || this.newPassword === '') {
                var alert_4 = this.alertCtrl.create({
                    title: 'Erro de verificação',
                    subTitle: 'Todos os campos são obrigatórios',
                    buttons: ['OK']
                });
                alert_4.present();
                return;
            }
            console.log(this.resetCode, this.newPassword);
            var loader_4 = this.loadingCtrl.create({
                content: "Verificando seu código..."
            });
            loader_4.present();
            this.auth.confirmPasswordReset(this.resetCode, this.newPassword).then(function () {
                _this.showLogin = true;
                _this.showRegister = false;
                _this.showVerifyCode = false;
                _this.showForgotten = false;
                loader_4.dismissAll();
            });
        }
    };
    LoginPage.prototype.doGoogleSignIn = function () {
    };
    LoginPage.prototype.doTwitterSignIn = function () {
    };
    LoginPage.prototype.doFbLogin = function () {
        var loader = this.loadingCtrl.create({
            content: "Conectando..."
        });
        loader.present();
        this.facebookAuth.login()
            .then(function (response) {
            //now we have the users info, let's save it in the NativeStorage
            loader.dismissAll();
        });
    };
    LoginPage.prototype.doGoBack = function () {
        this.showLogin = true;
        this.showRegister = false;
        this.showVerifyCode = false;
        this.showForgotten = false;
        this.pageTitle = "Login";
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        Auth,
        FacebookAuth,
        User,
        AlertController,
        DataService,
        LoadingController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map