import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { NavController, NavParams, MenuController, Platform, LoadingController } from "ionic-angular";
import * as Leaflet from "leaflet";
import { DataService } from "../../providers/apiData.service";

import { GeofencePluginMock, TransitionType } from "../../providers/geofence-plugin-mock";
import { AssociationModel, EquipmentModel, KnowledgeInterface } from '../../models/interfaces';

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
const newIcon = function (color){
  if (!color) color = 'default';
  return new Leaflet.Icon({
    iconUrl: iconUrls[color], shadowUrl: iconUrls.shadow, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
  });
};


@Component({
  selector:    'geofence-page',
  templateUrl: "geofence.html"
})
export class GeofenceDetailsPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;

  private equipLayer: any;
  private layerControl: any = false;
  private map: any = false;

  private equipments: KnowledgeInterface<EquipmentModel, AssociationModel>[];

  private userKey: any;
  private loader: any;

  constructor(
    private nav: NavController,
    private platform: Platform,
    private navParams: NavParams,
    public loadingCtrl:LoadingController,
    public locationTracker: LocationTracker,
    private dataService: DataService,
    private menu: MenuController
  ) {
    this.userKey = navParams.get('key');

    this.loader = this.loadingCtrl.create({
      content: "Buscando..."
    });
    this.loader.present();

    this.platform.ready().then(() => {

      Leaflet.Icon.Default.imagePath = "assets/leaflet/images/";

      if (window.geofence === undefined) {
        console.warn("Geofence Plugin not found. Using mock instead.");
        window.geofence = GeofencePluginMock;
        window.TransitionType = TransitionType;
      }


      window.geofence.initialize().then((initStatus) => {
        console.log("Geofence Plugin has been initialized", initStatus);
        window.geofence.onTransitionReceived = function (geofences) {
          geofences.forEach(function (geo) {
            console.log("Geofence transition detected", geo);
          });
        };

        window.geofence.onNotificationClicked = function (notificationData) {
          console.log("App opened from Geo Notification!", notificationData);
        };
      }).catch((error) => {
        console.error(error);
      });

    });
  }

  ngOnInit(): void {
    this.drawMap();
  }

  stop(){
    this.locationTracker.stopTracking();
  }

  drawMap(): void {
    if ( ! this.map ){
      this.map = Leaflet.map ( "fencemap")
        .on ( "click", this.onMapClicked.bind ( this ) )
        .on ( 'locationfound', this.onLocationFound.bind ( this ) )
        .on ( 'locationerror', this.onLocationError.bind ( this ) );
    }

    if(this.layerControl === false) {  // var layerControl set to false in init phase;
      this.layerControl = Leaflet.control.layers().addTo(this.map);
    }


    if ( ! this.map.hasLayer ( "MapID" ) ) {
      let mapa = Leaflet.tileLayer ( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        id:          'MapID',
        maxZoom:     19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      } ).addTo(this.map);
      this.layerControl.addBaseLayer(mapa, "Mapa Padrão");
    }

    //web location
    this.map.locate({ setView: true});
  }

  //when we have a location draw a marker and accuracy circle
  onLocationFound(e) {
    this.map.setZoom(13);

    this.locationTracker.startTracking(e.latlng, 3000, null,this.getEquipmentSpots);
    this.locationTracker.marker.addTo(this.map);
    this.locationTracker.circle.addTo(this.map);

    this.loader.dismissAll();
  }

  //alert on location error
  onLocationError(e) { alert(e.message); }
  onMapClicked(e) {
    //this.latLng = e.latlng;
    //this.getEquipmentSpots();
  }
  onMarkerPositionChanged(e) { this.getEquipmentSpots(); }

  private getEquipmentSpots() {
    if (!this.equipLayer) {
      this.equipLayer = Leaflet.layerGroup([]);
      this.layerControl.addOverlay(this.equipLayer, "Equipamentos");
    }

    this.dataService.getData<EquipmentModel>(["loc", this.locationTracker.latLng.lat, this.locationTracker.latLng.lng, this.locationTracker.radius],null)
      .subscribe((equipments: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => {
        this.equipments = equipments;
        this.equipLayer.clearLayers();
        let connected = "red";
        for (let equip of equipments){
          if (equip.data.connected) connected = "green";
          else connected = "red";
          this.equipLayer.addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon(connected)}).bindPopup(equip.data.label));
        }
        this.equipLayer.addTo(this.map);
        },error =>  console.log(<any>error));
  }

  /*saveChanges() {
    const geofence = this.geofence;

    geofence.notification.text = this.notificationText;
    geofence.radius = this.radius;
    geofence.latitude = this.latLng.lat;
    geofence.longitude = this.latLng.lng;
    geofence.transitionType = parseInt(this.transitionType, 10);

    this.geofenceService.addOrUpdate(geofence).then(() => {
      this.nav.pop();
    });
  }*/
}
