import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import {
  NavParams, NavController, Platform, ActionSheetController,
  LoadingController
} from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { DataService } from '../../providers/apiData.service';

import * as Leaflet from "leaflet";
import { Geolocation } from '@ionic-native/geolocation';

import { AssociationModel, EquipmentModel, KnowledgeModel } from '../../models/interfaces';

const iconUrls = {
  shadow: 'assets/leaflet/images/marker-shadow.png',
  default: 'assets/leaflet/images/marker-icon.png',
  default2x: 'assets/leaflet/images/marker-icon-2x.png',
  black2x: 'assets/leaflet/images/marker-icon-2x-black.png',
  blue2x: 'assets/leaflet/images/marker-icon-2x-blue.png',
  green2x: 'assets/leaflet/images/marker-icon-2x-green.png',
  grey2x: 'assets/leaflet/images/marker-icon-2x-grey.png',
  orange2x: 'assets/leaflet/images/marker-icon-2x-orange.png',
  red2x: 'assets/leaflet/images/marker-icon-2x-red.png',
  violet2x: 'assets/leaflet/images/marker-icon-2x-violet.png',
  yellow2x: 'assets/leaflet/images/marker-icon-2x-yellow.png',
  black: 'assets/leaflet/images/marker-icon-black.png',
  blue: 'assets/leaflet/images/marker-icon-blue.png',
  green: 'assets/leaflet/images/marker-icon-green.png',
  grey: 'assets/leaflet/images/marker-icon-grey.png',
  orange: 'assets/leaflet/images/marker-icon-orange.png',
  red: 'assets/leaflet/images/marker-icon-red.png',
  violet: 'assets/leaflet/images/marker-icon-violet.png',
  yellow: 'assets/leaflet/images/marker-icon-yellow.png',
};
//const colors = ["green", "grey", "orange", "red", "violet", "yellow", "black"];
const newIcon = function (color){
  if (!color) color = 'default';
  return new Leaflet.Icon({
    iconUrl: iconUrls[color], shadowUrl: iconUrls.shadow, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
  });
};

@Component({
  selector: 'maps-page',
  templateUrl: 'maps.html'
})
export class MapsPage implements OnInit{
  @ViewChild('map') mapElement: ElementRef;
  private _radius: number = 3000;
  private _latLng: any;
  private circle: any;
  private marker: any;
  private layerControl: any = false;
  private map: any = false;
  private equipments: KnowledgeModel<EquipmentModel, AssociationModel>[];

  position: any;
  errorMessage: string;
  selectedItem: any;
  userKey: any;
  selectedEquipmentType: string = "";
  selectedEquipmentCategory: string = "";
  keys: any[];

  private baseLayout: any = {};
  private equipLayers: any = {};

  // Array of historic channels
  public channels: Array<any> = [];


  notifications: any[] = [];
  private loader: any;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              public user:User,
              public auth:Auth,
              public dataService:DataService,
              private localNotifications: LocalNotifications,
              private actionSheetCtrl: ActionSheetController,
              public loadingCtrl:LoadingController,
              private geolocation: Geolocation
              ) {
    this.userKey = navParams.get("key");
    this.selectedEquipmentType = navParams.get("type");
    this.selectedEquipmentCategory = navParams.get("category");

    this.loader = this.loadingCtrl.create({
      content: "Buscando..."
    });
    this.loader.present();

    platform.ready().then(() => {
      Leaflet.Icon.Default.imagePath = "assets/leaflet/images/";
    });
  }

  ngOnInit(): void {
    this.drawMap();
  }

  drawMap(): void {
    if ( ! this.map ){
      this.map = Leaflet.map ( "map")
        .on ( "click", this.onMapClicked.bind ( this ) )
        .on ( 'locationfound', this.onLocationFound.bind ( this ) )
        .on ( 'locationerror', this.onLocationError.bind ( this ) );
    }

    if ( ! this.map.hasLayer ( "MapID" ) ) {
      let mapa = Leaflet.tileLayer ( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        id:          'MapID',
        maxZoom:     19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      } ).addTo(this.map);
      this.baseLayout = {"Padrão" : mapa}
    }
    //web location
    this.map.locate({ setView: true});
  }

  private getEquipmentSpots() {
    var overlayMaps = {};
    let parameters = ["loc", this._latLng.lat, this._latLng.lng, this._radius];
    if (this.selectedEquipmentType) parameters.push(this.selectedEquipmentType);
    if (this.selectedEquipmentCategory) parameters.push(this.selectedEquipmentCategory);
    //parameters.push("ownedBy", this.userKey);

    for (let layer of Object.keys(this.equipLayers)) this.equipLayers[layer].clearLayers();

    //this.dataService.getData<EquipmentModel>(["loc", this.locationTracker.latLng.lat, this.locationTracker.latLng.lng, this.locationTracker.radius],null)
    this.dataService.getData<EquipmentModel>(parameters, null)
          .subscribe((equipments: KnowledgeModel<EquipmentModel, AssociationModel>[]) => {
            this.equipments = equipments;
            let connected = "red";
            for (let equip of equipments){
              if (equip.data.connected) connected = "green";
              if (!this.equipLayers[equip.category]) {
                this.equipLayers[equip.category] = Leaflet.layerGroup([]);
                overlayMaps[equip.category] = this.equipLayers[equip.category];
                if (this.layerControl) this.layerControl.addOverlay(overlayMaps[equip.category], equip.category);

                this.equipLayers[equip.category].addTo(this.map);
              }
              this.equipLayers[equip.category].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon(connected)}).bindPopup(equip.data.label));
            }
            if (!this.layerControl)
              this.layerControl = Leaflet.control.layers(this.baseLayout,overlayMaps).addTo(this.map);
          },error =>  console.log(error));
  }

  //when we have a location draw a marker and accuracy circle
  onLocationFound(e) {
    //var radius = e.accuracy / 2;

    this.map.setZoom(13);

    this.marker = Leaflet.marker(e.latlng)
      .addTo(this.map)
      .bindPopup("Você");
    this.circle = Leaflet.circle(e.latlng, this.radius).addTo(this.map);

    this.latLng = e.latlng;

    this.getEquipmentSpots();

    this.loader.dismissAll();
  }

  //alert on location error
  onLocationError(e) {
    alert(e.message);
  }

  onMapClicked(e) {
    this.latLng = e.latlng;
    this.getEquipmentSpots();
  }

  onMarkerPositionChanged(e) {
    const latlng = e.target.getLatLng();
    console.log(latlng);
    //this.latLng = latlng;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
    this.circle.setRadius(value);
  }

  set latLng(value) {
    this._latLng = value;
    this.circle.setLatLng(value);
    this.marker.setLatLng(value);
  }

  get latLng() {
    return this._latLng;
  }

  addMarker(position, title){

    let content = "<h4>"+ title +"</h4>";

    Leaflet.marker(position)
      .addTo(this.map)
      .bindPopup(content)
      .openPopup();

  }

  changed(item){
    var now = Date.now();
    var diffMs = (now - item);
    var diffTime = Math.floor(diffMs / 86400000); // days
    if (diffTime>0) return diffTime;
    diffTime = Math.floor((diffMs % 86400000) / 3600000); // hours
    if (diffTime>0) return diffTime;
    return Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
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

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Equipamentos',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Maps',
          icon: !this.platform.is('ios') ? 'barcode' : null,
          handler: () => {
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
