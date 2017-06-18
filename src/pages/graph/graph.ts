import { OnInit, Component } from '@angular/core';
import { NavParams, NavController, Platform  } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { DataService } from '../../providers/apiData.service';

@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html'
})
export class GraphPage implements OnInit {

  errorMessage: string;
  selectedItem: any;
  userKey: any;
  userID: any;
  keys: any[];

  ouvintes: Array<number> = [];

  // Array of historic channels
  public channels: Array<any> = [];
  public lookup: Object = {};
  // A count of messages received
  public channel_count = 0;

  viewModel: any = [];


  notifications: any[] = [];


  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              public user:User,
              public auth:Auth,
              public dataService:DataService,
              private barcodeScanner: BarcodeScanner,
              private fb: Facebook,
              private localNotifications: LocalNotifications
              ) {
    this.userKey = navParams.get("key");
    console.log(user);
  }

  ngOnInit() {}

  changed(item){
    var now = Date.now();
    var diffMs = (now - item);
    var diffTime = Math.floor(diffMs / 86400000); // days
    if (diffTime>0) return diffTime;
    diffTime = Math.floor((diffMs % 86400000) / 3600000); // hours
    if (diffTime>0) return diffTime;
    return Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  }


  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', JSON.stringify(res)))
      .catch(e => console.log('Error logging into Facebook', e));

    this.fb.logEvent(this.fb.EVENTS.EVENT_PARAM_CONTENT_ID);
  }

  getdetails() {
    this.fb.getLoginStatus().then((response) => {
      if(response.status == 'connected') {
        this.fb.api('/' + response.authResponse.userID + '?fields=id,name,gender',[]).then((response)=>{
          alert(JSON.stringify(response));
        }, (error) => {
          alert(error);
        })
      }
      else {
        alert('Not Logged in');
      }
    })
  }

  logout() {
    this.fb.logout().then((response) =>{
      alert(JSON.stringify(response));
    }, (error) => {
      alert(error);
    })
  }

  scanBarCode(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);
    }, (error) => {
      alert(error);
    });
  }

  addNotifications(info){

    let firstNotificationTime = new Date();
    firstNotificationTime.setSeconds(firstNotificationTime.getSeconds() + 1000);

    let notification = {
        id: 1,
        title: 'Barcode',
        text: info,
        at: firstNotificationTime,
        data: { secret: this.userKey }
    };

    this.notifications.push(notification);

    console.log("Notifications to be scheduled: ", this.notifications);

    if(this.platform.is('cordova')){

        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {

            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);

            this.notifications = [];

        });

        this.localNotifications.on("click", function (notification) {
          console.log("clicked: ", notification);
        });
    }

  }

  cancelAll(){

      this.localNotifications.cancelAll();

  }
}
