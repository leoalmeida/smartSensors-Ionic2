import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, Http,
  XHRBackend, RequestOptions } from '@angular/http';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { Events, Platform, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CloudSettings, CloudModule, Auth, User } from '@ionic/cloud-angular';
//Pages

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { EquipmentsPage } from '../pages/equipments/equipments';
import { AccessoryPage } from '../pages/accessory/accessory';
import { AccessoryDetailsPage } from '../pages/accessory-details/accessory-details';
import { SourcePage } from '../pages/source/source';
import { SourceDetailsPage } from '../pages/source-details/source-details';
import { ChatsPage } from '../pages/chats/chats';
import { ChatsDetailPage } from '../pages/chats/chats-detail';
import { ComplexObjectPage } from '../pages/complex/complex';
import { ModalContentPage } from '../pages/modals/attribute-item';
import { ShowMapModal } from '../pages/modals/show-map-modal';
import { ChooseItemModal } from '../pages/modals/choose-item-modal';
import { ComplexObjectDetailsPage } from '../pages/complex-details/complex-details';
import { CreateKnowledgePage } from '../pages/create-knowledge/create-knowledge';
import { GraphPage } from '../pages/graph/graph';
import { MapsPage } from '../pages/maps/maps';
import { GeofenceDetailsPage } from '../pages/geofence/geofence';
import { BarcodePage } from '../pages/barcode/barcode';
import { ItemPopOverPage } from '../pages/topic-designer/item-popover';
import { TopicDesignerPage } from '../pages/topic-designer/topic-designer';
import { TopicPage } from '../pages/topic/topic';
import { ConfigurationsPage } from '../pages/configurations/configurations';
import { RelationModalPage } from '../pages/modals/relation-item-modal';
import { RuleModalPage } from '../pages/modals/rule-item-modal';
import { RealTimePage } from '../pages/realtimeobjects/realtime';
import { RealTimeDetailPage } from '../pages/realtimeobjects/realtime-detail';
import { StatusComponent } from '../pages/status/status.component';

import { PlotlyComponent } from '../pages/plotly/plotly.component';

//Providers
import { ErrorNotifierService } from '../providers/error.notifier';
import { NetworkNotifierService } from '../providers/network.notifier';
import { CustomHttp, WEBAPI_URL_TOKEN, WSAPI_URL_TOKEN} from '../providers/custom.http';

import { DataService } from '../providers/apiData.service';
import { FollowersService } from '../providers/followers.service';
import { MQTTService } from '../providers/mqtt/mqtt.service';
import { ConfigService } from '../providers/config/config.service';
import { GeofenceService } from "../providers/geofence.service";
import { LocationTracker } from '../providers/location-tracker';
import { ReferenceService } from '../providers/reference.service';
import { WebSocketService } from '../providers/websocket.service';
import { TopicService } from '../providers/topic.service';
import { ConnectionService } from '../providers/connection.service';

//Pipes

import { ReversePipe } from '../pipes/reverse.pipe'
import { DerpPipe } from '../pipes/derp.filter'
import { AssociationFilterPipe } from '../pipes/association.filter'

import { AnimateItemSliding } from '../directives/animate-item-sliding'

// Cordova

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';
import { BackgroundMode } from '@ionic-native/background-mode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';
import { Dialogs } from '@ionic-native/dialogs';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NativeGeocoder } from '@ionic-native/native-geocoder'
import { Geofence } from '@ionic-native/geofence';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';

//import { SpeechRecognition } from '@ionic-native/speech-recognition';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '734dd7bf'
  },
  'auth': {
    'facebook': {
      'scope': []
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatsPage,
    ChatsDetailPage,
    LoginPage,
    ProfilePage,
    EquipmentsPage,
    AccessoryPage,
    AccessoryDetailsPage,
    SourcePage,
    SourceDetailsPage,
    ComplexObjectPage,
    ComplexObjectDetailsPage,
    CreateKnowledgePage,
    GeofenceDetailsPage,
    GraphPage,
    TopicPage,
    MapsPage,
    BarcodePage,
    TopicDesignerPage,
    ItemPopOverPage,
    ModalContentPage,
    ChooseItemModal,
    RelationModalPage,
    RuleModalPage,
    ConfigurationsPage,
    RealTimePage,
    RealTimeDetailPage,
    ShowMapModal,
    AssociationFilterPipe,
    ReversePipe,
    DerpPipe,
    AnimateItemSliding,
    StatusComponent,
    PlotlyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    EquipmentsPage,
    AccessoryPage,
    AccessoryDetailsPage,
    SourcePage,
    SourceDetailsPage,
    ComplexObjectPage,
    ComplexObjectDetailsPage,
    ChatsPage,
    ChatsDetailPage,
    CreateKnowledgePage,
    ItemPopOverPage,
    ModalContentPage,
    ChooseItemModal,
    ShowMapModal,
    GeofenceDetailsPage,
    TopicPage,
    GraphPage,
    MapsPage,
    BarcodePage,
    TopicDesignerPage,
    RelationModalPage,
    RuleModalPage,
    ConfigurationsPage,
    RealTimePage,
    RealTimeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    Camera,
    DataService,
    Diagnostic,
    FollowersService,
    MQTTService,
    ConfigService,
    Facebook,
    BackgroundMode,
    BarcodeScanner,
    SocialSharing,
    Dialogs,
    InAppBrowser,
    NativeStorage,
    Network,
    Geolocation,
    BackgroundGeolocation,
    NativeGeocoder,
    LocationAccuracy,
    Geofence,
    LocationTracker,
    GeofenceService,
    ReferenceService,
    WebSocketService,
    TopicService,
    //SpeechRecognition,
    ErrorNotifierService,
    NetworkNotifierService,
    ConnectionService,
    {
      provide: Http,
      useFactory: ( backend: XHRBackend,
                    defaultOptions: RequestOptions,
                    errorNotifier: ErrorNotifierService,
                    network: NetworkNotifierService,
                    geolocation:Geolocation,
                    user:User,
                    auth:Auth,
                    events: Events,
                    platform: Platform,
                    nativeStorage: NativeStorage) => {
        return new CustomHttp(backend, defaultOptions, errorNotifier, network, geolocation, user, auth, events, platform, nativeStorage);
      },
      deps: [ XHRBackend, RequestOptions, ErrorNotifierService, NetworkNotifierService, Geolocation, User, Auth, Events, Platform, NativeStorage ]
    },
    {
      provide: WEBAPI_URL_TOKEN, useValue: 'http://191.168.0.5:3001/'
    },
    {
      provide: WSAPI_URL_TOKEN, useValue: 'ws://191.168.0.5:3005/'
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
