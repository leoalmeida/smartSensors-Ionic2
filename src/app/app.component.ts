import { Component, ViewChild } from '@angular/core';
import { Events, AlertController, Nav, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService } from '../providers/apiData.service';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { EquipmentsPage } from '../pages/equipments/equipments';
import { AccessoryPage } from '../pages/accessory/accessory';
import { SourcePage } from '../pages/source/source';
import { ConfigurationsPage } from '../pages/configurations/configurations';
import { TopicPage } from '../pages/topic/topic';
import { ChatsPage } from '../pages/chats/chats';
import { MapsPage } from '../pages/maps/maps';
import { ComplexObjectPage } from '../pages/complex/complex';
import { BarcodePage } from '../pages/barcode/barcode';
import { User, Auth } from '@ionic/cloud-angular';
import { GeofenceDetailsPage } from "../pages/geofence/geofence";
import { GraphPage } from '../pages/graph/graph';
import { RealTimePage } from '../pages/realtimeobjects/realtime';

//import { Storage } from '@ionic/storage';


import { ErrorNotifierService } from '../providers/error.notifier';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  errorMessage: any;
  validationError: any;
  numberOfLoading: number;
  loader: any;

  pages: Array<{title: string, component: any}>;
  //private userProfile: Array<Object>;

  default: boolean = true;
  home:any = "HomePage";

  configurations: any = {
    default: true,
    floatingHttp: true,
    floatingPubSub: true,
    homepage: "RealTimePage",
    realtime: true,
    mainResources: true,
    timeline: false,
    designer: false,
    chats: false,
    maps: false,
    profile: false,
    aditionalResources: false,
    resourcesPages: false,
    facebookPage: false,
    geofencePage: false,
    barcodePage: false
  };

  constructor(public platform: Platform,
              public events: Events,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public dataService:DataService,
              public user:User,
              public auth:Auth,
              public alertCtrl: AlertController,
              private errorNotifier:ErrorNotifierService,
              public loadingCtrl:LoadingController,
              private nativeStorage: NativeStorage
  ){
    this.errorNotifier.onError(err => {
  	  this.errorMessage = err;
  	  console.log(err);
  	});


    this.platform.ready().then((readySource) => {
      this.initializeApp();
      this.listenToLoginEvents();
    });
  }
  bootApp(){
    this.pages = [];
    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors.configurations')
        .then(data => {
          this.bootMenu(data);
          },
          error => {
            console.error(error);
            this.nativeStorage.setItem('smartSensors.configurations', this.configurations)
              .then(
                () => {
                  console.log('Stored default configurations!')
                  this.bootMenu(this.configurations);
                },
                error => console.error('Error storing item', error)
              );
          });
    });
  }

  bootMenu(data){
    this.pages = [];
    if (data) this.default = data.default;

    if (!this.default) this.home = data.homepage;

    if (data.realtime)
      this.pages.push({ title: 'RealTime', component: RealTimePage });

    if (this.default || data.mainResources)
      this.pages.push({ title: 'Meus Recursos', component: EquipmentsPage });
    if (this.default || data.timeline)
      this.pages.push({ title: 'Timeline', component: HomePage });
    if (this.default || data.designer)
      this.pages.push({ title: 'Minhas Regras', component: TopicPage });
    if (this.default || data.chats)
      this.pages.push({ title: 'Meus Canais', component: ChatsPage });
    if (this.default || data.maps)
      this.pages.push({ title: 'Mapa', component: MapsPage });
    if (this.default || data.profile)
      this.pages.push({ title: 'Perfil', component: ProfilePage });

    if (data.aditionalResources){
        this.pages.push({ title: 'Acessórios', component: AccessoryPage });
        this.pages.push({ title: 'Sensores', component: SourcePage });
        this.pages.push({ title: 'Hubs', component: ComplexObjectPage });
    }
    if (data.facebookPage) this.pages.push({ title: 'Graph', component: GraphPage });
    if (data.geofencePage) this.pages.push({ title: 'Geofence', component: GeofenceDetailsPage });
    if (data.barcodePage) this.pages.push({ title: 'Barcodes', component: BarcodePage });
    this.pages.push({ title: 'Configurações', component: ConfigurationsPage });
  }

  initializeApp() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    if(this.auth.isAuthenticated()) {
      if (!this.user.get('key',''))
        this.nav.setRoot(LoginPage, {"home": this.home});
      else
          this.openHome();
    }else{
      this.nav.setRoot(LoginPage, {"home": this.home});
    }
  }
  openHome(){
    this.bootApp();
    if (this.home === "HomePage") this.nav.setRoot(HomePage, {"key": this.user.get('key','')});
    else if (this.home === "RealTimePage") this.nav.setRoot(RealTimePage, {"key": this.user.get('key','')});
    else if (this.home === "EquipmentsPage") this.nav.setRoot(EquipmentsPage, {"key": this.user.get('key','')});
    else this.nav.setRoot(ConfigurationsPage, {"key": this.user.get('key','')});
  }

  listenToLoginEvents() {
		this.events.subscribe('user:login', (user, time) => {
			// this.navCtrl.push(HomePage)
			// this.navCtrl.setRoot(HomePage);
      console.log('user:login');
      console.log('Welcome', user, 'at', time);
      this.bootApp();
		})

		this.events.subscribe('user:logout', () => {
      this.user.set('key', '');
      this.user.save();
      this.auth.logout();
			console.log('user:logout');
		})

    this.events.subscribe('unAuthorizedRequest', (err) => {
      //if (!_.endsWith(err.url, '/token')) {
        this.nav.setRoot(LoginPage, {"home": this.home});
      //}
    });

    this.events.subscribe('app:showLoader', () => {
      this.numberOfLoading = this.numberOfLoading + 1;
      if(this.numberOfLoading === 1){
        //this.loader = this.loadingCtrl.presentLoading();
        this.loader  = this.loadingCtrl.create({
          content: "Conectando..."
        });
        this.loader.present();
      }
    });

    this.events.subscribe('app:hideLoader', () => {
      if(this.numberOfLoading === 1){
        this.loader.dismiss();
        this.numberOfLoading = 0;
      }
      if(this.numberOfLoading > 0){
        this.numberOfLoading = this.numberOfLoading - 1;
      }
    });
    this.events.subscribe('configurations:updated', (configurations, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Changed', configurations, 'at', time);
      this.bootMenu(configurations);
    });
	}


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let userKey = this.user.get('key','');
    if (page.component === ConfigurationsPage)
      this.nav.push(ConfigurationsPage, {"key": userKey});
    else if (userKey)
      this.nav.setRoot(page.component, {"key": userKey});
    else
      this.nav.setRoot(LoginPage, {"home": this.home});
  }

}
