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
//import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  userKey: any;
  errorMessage: string;

  pages: Array<{title: string, component: any}>;
  //private userProfile: Array<Object>;

  constructor(public platform: Platform,
              public events: Events,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public dataService:DataService,
              public user:User,
              public auth:Auth,
              public alertCtrl: AlertController,
              public loadingCtrl:LoadingController,
              private nativeStorage: NativeStorage
  ){

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Timeline', component: HomePage },
      { title: 'Meus Canais', component: ChatsPage },
      { title: 'Minhas Regras', component: TopicPage },
      { title: 'Meus Recursos', component: EquipmentsPage },
      { title: 'Mapa', component: MapsPage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Configurações', component: ConfigurationsPage }
    ];

    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors.configurations')
        .then(data => {
            if (data) {
              if (data.resourcesPages){
                this.pages.push({ title: 'Acessórios', component: AccessoryPage });
                this.pages.push({ title: 'Sensores', component: SourcePage });
                this.pages.push({ title: 'Hubs', component: ComplexObjectPage });
              }
              if (data.facebookPage) this.pages.push({ title: 'Graph', component: GraphPage });
              if (data.geofencePage) this.pages.push({ title: 'Geofence', component: GeofenceDetailsPage });
              if (data.barcodePage) this.pages.push({ title: 'Barcodes', component: BarcodePage });
            }
          },
          error => {
            console.error(error);
          });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.auth.isAuthenticated()) {
        this.identifyUser(HomePage);
      }else{
        this.nav.setRoot(LoginPage);
      }

    });
  }

  private identifyUser(page){
    let loader = this.loadingCtrl.create({
      content: "Conectando..."
    });
    loader.present();
    this.dataService.getStaticData(["data", "data.email", this.user.details.email], "owner")
          .then(value => {
            if (value.length === 0) {
              loader.dismissAll();
              this.auth.logout();
              this.nav.setRoot(LoginPage);
            }else{
              this.userKey  = value[0]._id
              loader.dismissAll();
              this.nav.setRoot(page, {"key": this.userKey})
            }
          },error =>  this.errorMessage = <any>error);
  }


  listenToLoginEvents() {
		this.events.subscribe('user:login', () => {
			// this.navCtrl.push(HomePage)
			// this.navCtrl.setRoot(HomePage);
		})

		this.events.subscribe('user:logout', () => {
			console.log('user:logout')
		})
	}


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (this.userKey)
      this.nav.setRoot(page.component, {"key": this.userKey});
    else
      this.identifyUser(page.component)
  }

}
