import { Component } from '@angular/core';
import { Events, NavParams, Platform, NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, FacebookAuth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { ConfigurationsPage } from '../configurations/configurations';
import { RealTimePage } from '../realtimeobjects/realtime';
import { EquipmentsPage } from '../equipments/equipments';
import { GraphPage } from '../graph/graph';

import { DataService } from '../../providers/apiData.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  showVerifyCode:boolean = false;
  showForgotten:boolean = false;
  showRegister:boolean = false;
  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';
  resetCode:number = 0;
  newPassword:string = '';
  pageTitle:string = "Login";
  private loader: any;
  private home: string = "";

  constructor(public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public auth:Auth,
              public facebookAuth: FacebookAuth,
              public user: User,
              public events: Events,
              public alertCtrl: AlertController,
              public dataService:DataService,
              public loadingCtrl:LoadingController) {
                this.home = navParams.get("home");
              }

  ionViewDidLoad() {
    //console.log('LoginPage Page');
  }

  doLogin() {
    if(this.showLogin) {
      console.log('process login');

      if(this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title:'Falha ao registrar',
          subTitle:'Todos os campos são obrigatórios',
          buttons:['OK']
        });
        alert.present();
        return;
      }

      this.loader = this.loadingCtrl.create({
        content: "Conectando..."
      });
      this.loader.present();

      this.auth.login('basic', {'email':this.email, 'password':this.password}).then((userProfile) => {
        console.log('Conectado: ', userProfile);
        this.identifyUser();
      }, (err) => {
        this.loader.dismissAll();
        console.log(err.message);

        let errors = '';
        if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
        if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';

        let alert = this.alertCtrl.create({
          title:'Falha ao conectar',
          subTitle:errors,
          buttons:['OK']
        });
        alert.present();
      });
    }
    else {
      this.showLogin      = true;
      this.showRegister   = false;
      this.showForgotten  = false;
      this.showVerifyCode = false;
      this.pageTitle      = "Conectar";
    }
  }

  private identifyUser(){
    this.dataService.getStaticData(["data", "data.email", this.user.details.email], "owner")
         .then(value => {
           if (value.length === 0) {
             this.user.set('key', '');
             this.auth.logout();
           }else{
             this.user.set('key', value[0]._id);
             //this.navCtrl.setRoot(HomePage, {"key": value[0]._id});
             this.openHome(this.user.details.email);
           }
           this.user.save();
           if (this.loader) this.loader.dismissAll();
         });
  }

  goGraph(){
    this.navCtrl.push(GraphPage);
  }

  doRegister() {
    if(this.showRegister) {
      console.log('process register');

      /*
      do our own initial validation
      */
      if(this.name === '' || this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title:'Falha ao Registrar',
          subTitle:'Todos os campos são obrigatórios',
          buttons:['OK']
        });
        alert.present();
        return;
      }

      let details: UserDetails = {'email':this.email, 'password':this.password, 'name':this.name};
      console.log(details);

      this.loader = this.loadingCtrl.create({
        content: "Registrando sua conta..."
      });
      this.loader.present();

      this.auth.signup(details).then(() => {
        console.log('ok signup');
        this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
          this.loader.dismissAll();
          this.openHome(details.email);
        });

      }, (err:IDetailedError<string[]>) => {
        this.loader.dismissAll();
        let errors = '';
        for(let e of err.details) {
          console.log(e);
          if(e === 'required_email') errors += 'Email é obrigatório.<br/>';
          if(e === 'required_password') errors += 'Password é obrigatório.<br/>';
          if(e === 'conflict_email') errors += 'Já existe um usuário com esse email.<br/>';
          //don't need to worry about conflict_username
          if(e === 'invalid_email') errors += 'Seu email não é válido.';
        }
        let alert = this.alertCtrl.create({
          title:'Falha ao Registrar',
          subTitle:errors,
          buttons:['OK']
        });
        alert.present();
      });

    } else {
      this.showLogin = false;
      this.showRegister = true;
      this.showForgotten = false;
      this.showVerifyCode = false;
      this.pageTitle = "Registrar";
    }
  }

  doForgotten(){
    if(this.showForgotten){
      if(this.email === '') {
        let alert = this.alertCtrl.create({
          title:'Email inválido',
          subTitle:'Todos os campos são obrigatórios',
          buttons:['OK']
        });
        alert.present();
        return;
      }

      console.log(this.email);

      this.loader = this.loadingCtrl.create({
        content: "Enviando código de acesso para seu email..."
      });
      this.loader.present();

      this.auth.requestPasswordReset(this.email).then(() => {
        this.showLogin = false;
        this.showRegister = false;
        this.showVerifyCode = true;
        this.showForgotten = false;
        this.pageTitle = "Alterar senha";
        this.loader.dismissAll();
      });
    }else{
      this.showLogin = true;
      this.showRegister = false;
      this.showForgotten = true;
      this.showVerifyCode = false;
      this.pageTitle = "Recuperar acesso";
    }
  }

  doCodeVerification(){
    if(this.showVerifyCode){
      if(this.resetCode < 0 || this.newPassword === '') {
        let alert = this.alertCtrl.create({
          title:'Erro de verificação',
          subTitle:'Todos os campos são obrigatórios',
          buttons:['OK']
        });
        alert.present();
        return;
      }

      console.log(this.resetCode, this.newPassword);

      this.loader = this.loadingCtrl.create({
        content: "Verificando seu código..."
      });
      this.loader.present();

      this.auth.confirmPasswordReset(this.resetCode, this.newPassword).then(() => {
        this.showLogin = true;
        this.showRegister = false;
        this.showVerifyCode = false;
        this.showForgotten = false;
        this.loader.dismissAll();
      });
    }
  }

  doGoogleSignIn(){
  }

  doTwitterSignIn(){
  }

  doFbLogin(){

    this.loader = this.loadingCtrl.create({
      content: "Conectando..."
    });
    this.loader.present();

    this.facebookAuth.login()
        .then((response) => {
          //now we have the users info, let's save it in the NativeStorage
          this.loader.dismissAll();
        });
  }

  openHome(user){
    this.events.publish('user:login', user, Date.now());
    if (this.home === "HomePage") this.navCtrl.setRoot(HomePage, {"key": this.user.get('key','')});
    else if (this.home === "RealTimePage") this.navCtrl.setRoot(RealTimePage, {"key": this.user.get('key','')});
    else if (this.home === "EquipmentsPage") this.navCtrl.setRoot(EquipmentsPage, {"key": this.user.get('key','')});
    else this.navCtrl.setRoot(ConfigurationsPage, {"key": this.user.get('key','')});
  }

  doGoBack(){
    this.showLogin = true;
    this.showRegister = false;
    this.showVerifyCode = false;
    this.showForgotten = false;
    this.pageTitle = "Login";
  }

}
