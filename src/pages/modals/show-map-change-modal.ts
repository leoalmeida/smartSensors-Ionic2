import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { NavParams, ViewController, Platform, LoadingController } from 'ionic-angular';
import { KnowledgeModel, EquipmentModel, AssociationModel } from '../../models/interfaces';

import * as Leaflet from "leaflet";
import { Geolocation } from '@ionic-native/geolocation';
import { DataService } from '../../providers/apiData.service';

import { Storage } from '@ionic/storage';

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
const colors = ["green", "grey", "orange", "red", "violet", "yellow", "black"];
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

  private categoryColor: any = {};
  private equipLayers: any = {};
  private layerControl: any = false;
  private _radius: number = 3000;
  private _latLng: any;
  private circle: any;
  private marker: any;
  private map: any = false;
  private baseLayout: any = {};

  item: KnowledgeModel<EquipmentModel, AssociationModel>;
  items: Array<KnowledgeModel<EquipmentModel, AssociationModel>> = [];
  index: string;
  change: boolean;

  private type: string = "";
  private errorMessage: string = "";
  private status = {};

  private locals = [];
  private loader: any;

  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController,
    public platform: Platform,
    public loadingCtrl:LoadingController,
    private dataService: DataService,
    private geolocation: Geolocation,
    private storage: Storage) {

    this.loader = this.loadingCtrl.create({
      content: "Buscando..."
    });
    this.loader.present();

    this.type = navParams.get('type');

    this.change = navParams.get('change');
    if (this.change || this.type)
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

  startTopic(){
    var options = {
      "topicKeys": [
        { "topicId": this.item._id }
      ],
      "coordinates": [this.latLng.lat , this.latLng.lng],
      "radius": 3000
    };

    this.dataService.evaluateTopic(options)
      .subscribe((data) => {
        console.log ( data );
        this.status = data;
        if (data[0].err)
          this.marker
            .bindPopup(data[0].err.msg +" / "+ data[0].result.sync)
            .openPopup();
        else
          this.marker
            .bindPopup(data[0].result.value +" / "+ data[0].result.sync)
            .openPopup();

/*
        let overlayMaps = {};
        let qtdcolor = 0;
        for ( let equip of data[0].topicInfo.messages ) {
          if ( ! this.equipLayers[ equip.category ] ) {
            if ( ! this.categoryColor[ equip.category ] ) this.categoryColor[ equip.category ] = colors[ qtdcolor ++ ];
            this.equipLayers[ equip.category ] = Leaflet.layerGroup ( [] );
            this.equipLayers[ equip.category ].addTo ( this.map );
            overlayMaps[ equip.category ] = this.equipLayers[ equip.category ];
            if ( qtdcolor >= colors.length ) qtdcolor = 0;
          }
          let itemMarker = Leaflet.marker (
            Leaflet.latLng ( equip.location.coordinates ),{
              icon:      newIcon ( this.categoryColor[ equip.category ] ),
              draggable: this.change
            }).bindPopup ( equip.data.name );
          this.equipLayers[ equip.category ].addLayer ( itemMarker );
        }*/
      },error =>  this.errorMessage = <any>error);
      this.locals.push(this.latLng);
      //this.storage.set("locals" + this.userKey + this.item._id, this.locals);
  }

  ngOnInit(): void {
    this.drawMap();
  }

  drawMap(): void {
    if (this.type === "dynamicTopic"){
      this.startTopic();
    }
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

    this.drawLayers();

    //web location
    this.map.locate({ setView: true, maxZoom:12});
  }

  private drawLayers() {
    var qtdcolor = 0;
    var overlayMaps = {};

    if (!this.change && !(this.type === "dynamicTopic")) {
      for ( let equip of this.items ) {
        if ( ! this.equipLayers[ equip.category ] ) {
          if ( ! this.categoryColor[ equip.category ] ) this.categoryColor[ equip.category ] = colors[ qtdcolor ++ ];
          this.equipLayers[ equip.category ] = Leaflet.layerGroup ( [] );
          this.equipLayers[ equip.category ].addTo ( this.map );
          overlayMaps[ equip.category ] = this.equipLayers[ equip.category ];
          if ( qtdcolor >= colors.length ) qtdcolor = 0;
        }
        let itemMarker = Leaflet.marker (
                            Leaflet.latLng ( equip.location.coordinates ),{
                                icon:      newIcon ( this.categoryColor[ equip.category ] ),
                                draggable: this.change
                              }).bindPopup ( equip.data.name );
        this.equipLayers[ equip.category ].addLayer ( itemMarker );
      }
    } else{
      this.equipLayers[ this.item.category ] = Leaflet.layerGroup ( [] );
      this.equipLayers[ this.item.category ].addTo ( this.map );
      overlayMaps[ this.item.category ] = this.equipLayers[ this.item.category ];
      this.marker = Leaflet.marker (
                        Leaflet.latLng ( this.item.location.coordinates ),{
                          icon:      newIcon ( this.categoryColor[ this.item.category ] ),
                          draggable: this.change
                        }).bindPopup ( this.item.data.name )
                          .on ( 'moveend', this.onMoveEnd.bind ( this ) );
      this.equipLayers[ this.item.category ].addLayer ( this.marker );
    }

    this.layerControl = Leaflet.control.layers(this.baseLayout,overlayMaps).addTo(this.map);

  }

  onMoveEnd(e){
    if (this.change) {
      this.latLng = e.latlng;
    }
  }

  //when we have a location draw a marker and accuracy circle
  onLocationFound(e) {
    this.map.setZoom(13);
    if (!this.change) {
      this.marker = Leaflet.marker(e.latlng).addTo(this.map);
      if(this.type)
        this.circle = Leaflet.circle(e.latlng, this.radius).addTo(this.map);

      this.loader.dismissAll();
    }
  }

  //alert on location error
  onLocationError(e) {
    alert(e.message);
  }

  onMapClicked(e) {
    if (this.change) {
      this.latLng = e.latlng;
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
    this.circle.setRadius(value);
  }

  set latLng(latlng) {
    this._latLng = latlng;
    this.circle.setLatLng(latlng);
    this.marker.setLatLng(latlng);
  }

  get latLng()
  {
    return this._latLng;
  }

  saveChanges(){
    this.viewCtrl.dismiss({
      newLocal: this.latLng
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
