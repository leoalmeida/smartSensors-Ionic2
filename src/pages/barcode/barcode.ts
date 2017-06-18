import { OnInit, Component } from '@angular/core';
import { NavParams, NavController, Platform, ActionSheetController  } from 'ionic-angular';

//import { LocalNotifications } from '@ionic-native/local-notifications';
//import { DataService } from '../../providers/apiData.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Dialogs } from '@ionic-native/dialogs';

import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector:    'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage implements OnInit {
  barcodes: Array<any>;
  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              public actionsheetCtrl: ActionSheetController,
              private iab: InAppBrowser,
              private dialogs: Dialogs,
              private storage: NativeStorage
              ) {}

  ngOnInit() {
    this.storage.getItem("LocalData")
                        .then(
                        data => this.barcodes = JSON.parse(data),
                        error => console.error(error)
                      );
  }

  openUrl(data){
    this.iab.create("'" + data + "'");
  }

  static changed(item){
    let now = Date.now();
    let diffMs = (now - item);
    let diffTime = Math.floor(diffMs / 86400000); // days
    if (diffTime>0) return diffTime;
    diffTime = Math.floor((diffMs % 86400000) / 3600000); // hours
    if (diffTime>0) return diffTime;
    return Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  }

  scanBarCode(){
    this.barcodeScanner.scan().then((barcodeData) => {
      if (!barcodeData.cancelled) {
        console.log(barcodeData);
        this.dialogs.prompt ( "Digite um nome").then(( input ) => {
          let name  = input.input1;
          let value = barcodeData.text;

          this.dialogs.alert(value, "Barcode");

          this.storage.getItem( "LocalData" )
                .then(
                data => {
                  console.log ( data );
                  let info = JSON.parse ( data );
                  info[ info.length ] = [ name, value ];
                  this.storage.setItem( "LocalData", JSON.stringify ( info ) );
                },error => console.error(error)
              );
        });
      };
    }, (error) => {
        alert ( "Scanning failed: " + error );
    });
  }

  scanQrCode() {
    this.barcodeScanner.scan().then(( barcodeData ) => {
        if ( ! barcodeData.cancelled ) {
          if ( barcodeData.format == "QR_CODE" ) {
            this.dialogs.prompt ( "Digite um nome").then(( input ) => {
              let name  = input.input1;
              let value = barcodeData.text;

              this.dialogs.alert(value, "Barcode");

              this.storage.getItem( "LocalData" )
                      .then(
                      data => {
                        console.log ( data );
                        let info = JSON.parse ( data );
                        info[ info.length ] = [ name, value ];
                        this.storage.setItem( "LocalData", JSON.stringify ( info ) );
                      },error => console.error(error)
                    );
              alert ( "Done" );
            });
          }
        }
      }, ( error ) => {
        alert ( "Scanning failed: " + error );
      }
    );
  }



  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Equipamentos',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'General BarCode',
          icon: !this.platform.is('ios') ? 'barcode' : null,
          handler: () => {
            this.scanBarCode();
          }
        },
        {
          text: 'QRbarCode',
          icon: !this.platform.is('ios') ? 'qr-scanner' : null,
          handler: () => {
            this.scanQrCode();
          }
        },
        {
          text: 'Sair',
          role: 'quit', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}
