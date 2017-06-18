import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, FacebookAuth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
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

  constructor(public navCtrl: NavController,
              public auth:Auth,
              public facebookAuth: FacebookAuth,
              public user: User,
              public alertCtrl: AlertController,
              public dataService:DataService,
              public loadingCtrl:LoadingController) {}

  ionViewDidLoad() {
    //console.log('LoginPage Page');
  }

  /*
  for both of these, if the right form is showing, process the form,
  otherwise show it
  */
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

      let loader = this.loadingCtrl.create({
        content: "Conectando..."
      });
      loader.present();

      this.auth.login('basic', {'email':this.email, 'password':this.password}).then((userProfile) => {
        console.log('Conectado: ', userProfile);

        this.navCtrl.setRoot(HomePage);
        loader.dismissAll();

      }, (err) => {
        loader.dismissAll();
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


  goGraph(){
    this.navCtrl.setRoot(GraphPage);
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

      let loader = this.loadingCtrl.create({
        content: "Registrando sua conta..."
      });
      loader.present();

      this.auth.signup(details).then(() => {
        console.log('ok signup');
        this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(HomePage);
        });

      }, (err:IDetailedError<string[]>) => {
        loader.dismissAll();
        let errors = '';
        for(let e of err.details) {
          console.log(e);
          if(e === 'required_email') errors += 'Email is required.<br/>';
          if(e === 'required_password') errors += 'Password is required.<br/>';
          if(e === 'conflict_email') errors += 'A user with this email already exists.<br/>';
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

      let loader = this.loadingCtrl.create({
        content: "Enviando código de acesso para seu email..."
      });
      loader.present();

      this.auth.requestPasswordReset(this.email).then(() => {
        this.showLogin = false;
        this.showRegister = false;
        this.showVerifyCode = true;
        this.showForgotten = false;
        this.pageTitle = "Alterar senha";
        loader.dismissAll();
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

      let loader = this.loadingCtrl.create({
        content: "Verificando seu código..."
      });
      loader.present();

      this.auth.confirmPasswordReset(this.resetCode, this.newPassword).then(() => {
        this.showLogin = true;
        this.showRegister = false;
        this.showVerifyCode = false;
        this.showForgotten = false;
        loader.dismissAll();
      });
    }
  }

  doGoogleSignIn(){
  }

  doTwitterSignIn(){
  }

  doFbLogin(){

    let loader = this.loadingCtrl.create({
      content: "Conectando..."
    });
    loader.present();

    this.facebookAuth.login()
        .then((response) => {
          //now we have the users info, let's save it in the NativeStorage
          loader.dismissAll();
        });
  }

  doGoBack(){
    this.showLogin = true;
    this.showRegister = false;
    this.showVerifyCode = false;
    this.showForgotten = false;
    this.pageTitle = "Login";
  }

}
