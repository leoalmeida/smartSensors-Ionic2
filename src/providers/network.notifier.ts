import { Injectable} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Network } from '@ionic-native/network';

@Injectable()
export class NetworkNotifierService {
  networkStatus:any;
  wifiStatus:any;

  networkSubject: BehaviorSubject<any> = new BehaviorSubject({status: false,sync: 0});
  wifiSubject: BehaviorSubject<any> = new BehaviorSubject({status: false,sync: 0});

  private disconnectSubscription: any;
  private connectSubscription: any;

  constructor(private network: Network) {
    // watch network for a disconnect
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.networkSubject.next({status: false, sync: Date.now()});
      this.wifiStatus.next({status: false, sync: Date.now()});
    });

    // watch network for a connection
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.networkSubject.next({status: true, sync: Date.now()});
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          this.wifiStatus.next({status: true, sync: Date.now()});
          console.log('we got a wifi connection!');
        }
      }, 3000);
    });

  }

  disconnectVerifications(){
    // stop disconnect watch
    this.disconnectSubscription.unsubscribe();
    // stop connect watch
    this.disconnectSubscription.unsubscribe();
  }

  public getNetworkStatus(){
    return this.networkSubject;
  }

  public getWifiStatus(){
    return this.wifiStatus;
  }
}
