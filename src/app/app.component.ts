import { Component, ViewChild } from '@angular/core';
import { Events, AlertController, Nav, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
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
import { HubPage } from '../pages/hub/hub';
import { BarcodePage } from '../pages/barcode/barcode';
import { User, Auth } from '@ionic/cloud-angular';
import { GeofenceDetailsPage } from "../pages/geofence/geofence";
//import { GraphPage } from '../pages/graph/graph';
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
              public loadingCtrl:LoadingController
  ){

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Novidades', component: HomePage },
      { title: 'Meus Canais', component: ChatsPage },
      { title: 'Tópicos', component: TopicPage },
      { title: 'Acessórios', component: AccessoryPage },
      { title: 'Sensores', component: SourcePage },
      { title: 'Hubs', component: HubPage },
      { title: 'Equipamentos', component: EquipmentsPage },
      //{ title: 'Graph', component: GraphPage },
      { title: 'Mapas', component: MapsPage },
      { title: 'Geofence', component: GeofenceDetailsPage },
      { title: 'Barcodes', component: BarcodePage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Configurations', component: ConfigurationsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.auth.isAuthenticated()) {

        let loader = this.loadingCtrl.create({
          content: "Conectando..."
        });
        loader.present();
        this.dataService.getStaticData(["data", "data.email", this.user.details.email], "owner")
              .then(value => {
                this.userKey  = value[0]._id
                loader.dismissAll();
                this.nav.setRoot(HomePage, {"key": this.userKey})
              },error =>  this.errorMessage = <any>error);
      }else{
        this.nav.setRoot(LoginPage);
      }

    });
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
    this.nav.setRoot(page.component, {"key": this.userKey});
  }

}
