import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { NavParams, ViewController, Platform, LoadingController } from 'ionic-angular';
import { KnowledgeInterface, EquipmentModel, AssociationModel } from '../../models/interfaces';

import * as Leaflet from "leaflet";
import { Geolocation } from '@ionic-native/geolocation';
import { DataService } from '../../providers/apiData.service';

import { Storage } from '@ionic/storage';

import { LocationTracker } from '../../providers/location-tracker';

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
  templateUrl: './show-map-modal.html'
})
export class ShowMapModal implements OnInit{
  @ViewChild('mapitem') mapElement: ElementRef;
  pageTitle: string;
  imgdef:string = "assets/icons/img/ionic.png";
  selectedItem: any;
  userKey: any;

  //private categoryColor: any = {};
  private _radius: number = 3000;
  //private _latLng: any;
  //private circle: any;
  //private marker: any;
  private map: any = false;
  private baseLayout: any = {};

  item: KnowledgeInterface<EquipmentModel, AssociationModel>;
  items: Array<KnowledgeInterface<EquipmentModel, AssociationModel>> = [];
  index: string;
  change: boolean;

  private type: string = "";
  private category: string = "";
  private mapModel: string = "";
  //private errorMessage: string = "";
  //private status = {};

  private loader: any;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController,
    public platform: Platform,
    public loadingCtrl:LoadingController,
    private dataService: DataService,
    private geolocation: Geolocation,
    public locationTracker: LocationTracker,
    private storage: Storage) {

    this.loader = this.loadingCtrl.create({
      content: "Buscando..."
    });
    this.loader.present();

    this.mapModel = navParams.get('model');
    this.type = navParams.get('type');
    this.category = navParams.get('category');

    this.change = navParams.get('change');
    if (this.change || this.mapModel)
      this.item = navParams.get('item');
    else
      this.items = navParams.get('items');
    this.userKey = navParams.get('key');
    platform.ready().then(() => {
      Leaflet.Icon.Default.imagePath = "assets/leaflet/images/";
    });

    /*storage.ready().then(() => {
      this.storage.get("locals" + this.userKey + this.item._id).then((localizations) => {
        console.log(localizations);
        if (localizations) this.locals = localizations;
      });
    });*/
  }

  ngOnInit(): void {
    this.drawMap();
  }

  drawMap(): void {
    if ( ! this.map ){
      this.map = Leaflet.map ( "mapitem", {zoom: 10} )
        .on ( "click", this.onMapClicked.bind ( this ) )
        .on ( 'locationfound', this.onLocationFound.bind ( this ) )
        .on ( 'locationerror', this.onLocationError.bind ( this ) );
    }

    if ( ! this.map.hasLayer ( "MapID" ) ) {
      var mapa = Leaflet.tileLayer ( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        id:          'MapID',
        maxZoom:     19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      } ).addTo(this.map);

      this.baseLayout = {"Padrão" : mapa}
    }

    if (this.locationTracker.isRunning()){
      this.setMarker();
    }else{
      //web location
      this.map.locate({ setView: true, maxZoom:12});
    }
  }

  //when we have a location draw a marker and accuracy circle
  onLocationFound(e) {
    //this.drawLayers();

    if (this.mapModel === "dynamicTopic"){
      let params = {items: [this.item._id]}
      this.locationTracker.startTracking(e.latlng, this.radius, params, "evaluateTopic");
    }else{
      let params = {
        type: this.type,
        category: this.category,
        items: [this.items]}
      this.locationTracker.startTracking(e.latlng, this.radius, params, "getEquipmentSpots");
    }
    this.setMarker();
  }

  private setMarker(){
    this.drawLayers();
    this.map.setZoom(13);
    this.locationTracker.marker.addTo(this.map);
    this.locationTracker.circle.addTo(this.map);
    //this.circle = Leaflet.circle(e.latlng, this.radius).addTo(this.map);
    this.loader.dismissAll();
  }

  private drawLayers() {
    //var qtdcolor = 0;
    var overlayMaps = {};
    let equipLayers = {};
    equipLayers[ "green" ] = Leaflet.layerGroup ( [] );
    equipLayers[ "green" ].addTo ( this.map );
    overlayMaps[ "Conectado" ] = equipLayers[ "green" ];
    equipLayers[ "red" ] = Leaflet.layerGroup ( [] );
    equipLayers[ "red" ].addTo ( this.map );
    overlayMaps[ "Desconectado" ] = equipLayers[ "red" ];
    this.locationTracker.layerControl = Leaflet.control.layers(this.baseLayout,overlayMaps).addTo(this.map);
    if (this.mapModel === "dynamicTopic") this.addEquipmentsToDrawer(equipLayers);
    this.locationTracker.equipLayers = equipLayers;
  }

  private addEquipmentsToDrawer(equipLayers){
    for ( let equip of this.items ) {
      var itemColor = equip.data.connected?"green":"red";
      let itemMarker = Leaflet.marker (
                          Leaflet.latLng ( equip.location.coordinates ),{
                              icon:      newIcon ( itemColor ),
                              draggable: this.change
                            }).bindPopup ( equip.data.name );
      equipLayers[ itemColor ].addLayer ( itemMarker );
    }
  }

  stop(){
    this.locationTracker.stopTracking();
    //this.dismiss();
  }

  //alert on location error
  onLocationError(e) {
    alert(e.message);
  }

  onMapClicked(e) {

  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
    this.locationTracker.radius = value;
  }

  saveChanges(){
    this.viewCtrl.dismiss({
      newLocal: this.locationTracker.latLng
    });
  }

  dismiss() {
    this.stop();
    this.viewCtrl.dismiss();
  }
}
