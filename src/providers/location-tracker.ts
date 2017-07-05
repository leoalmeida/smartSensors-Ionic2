import { Injectable, NgZone } from '@angular/core';
import {User} from '@ionic/cloud-angular';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import * as Leaflet from "leaflet";
import Rx from 'rxjs/Rx';

import { MessageModel, MessageInput } from '../models/interfaces'
import { DataService }  from './apiData.service';
import { TopicService }  from './topic.service';

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

@Injectable()
export class LocationTracker{

  messages: MessageModel[] = [];
  randomData: number[] = [];

  public watch: any;
  private _radius: number = 700;
  private _latLng: any;
  private _circle: any;
  private _marker: any;
  private _evaluation: any;
  private _equipLayers: any = {};
  private _layerControl: any = false;
  private _items: Array<any>;
  private _type: string = "";
  private _category: string = "";
  private _running:boolean = false;
  private _status:any;
  private locals = [];
  private userKey = "";

  constructor(public zone: NgZone,
              public backgroundGeolocation: BackgroundGeolocation,
              public geolocation: Geolocation,
              public user: User,
              private wsService: TopicService,
              private dataService: DataService) {

    this.userKey = btoa(this.user.id + ":" + this.user.details.password);
  }

  trackServices() {
  		this.wsService.messages.subscribe( (msg: MessageModel) => {
  			this.messages.push(msg);
        if (msg.author !== this.userKey && this._evaluation === "evaluateTopic"){
            console.log ( msg );
            this._status = msg.knowledgeMessage["data"]["status"];
            if (msg.err)
              this.marker
                .bindPopup(msg.err["msg"] +" / "+ msg.sync)
                .openPopup();
            else
              this.marker
                .bindPopup(msg.knowledgeMessage["data"]["value"] +" / "+ msg.sync)
                .openPopup();

            this._items = msg.knowledgeMessage["data"]["equipments"];
            for (let equip of this._items["connected"])
              this._equipLayers["green"].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon("green")}).bindPopup(equip.data.label + "  (" + equip.category + ")"));
            for (let equip of this._items["disconnected"])
              this._equipLayers["red"].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon("red")}).bindPopup(equip.data.label + "  (" + equip.category + ")"));
        }else if(msg.author !== this.userKey){
          this._items =  msg.knowledgeMessage["data"]["equipments"];
          for (let equip of this._items){
            let itemColor = equip.data.connected?"green":"red";
            this._equipLayers[itemColor].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon(itemColor)}).bindPopup(equip.data.label + "  (" + equip.category + ")"));
          }
        }
  		});
      this.wsService.randomData.subscribe(num => {
  			this.randomData.push(num);
  			// reset if there are 20 numbers in the array
  			if (this.randomData.length > 20) {
  				this.randomData = [];
  			}
		})
  }

  stopTrackServices() {
    this.wsService.messages.unsubscribe();
    this.wsService.randomData.unsubscribe();
  }

  // Background Tracking
  startTracking(latlng: any, radius: number, params: any, evaluation: any) {

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    this._marker = Leaflet.marker(latlng)
      .bindPopup("Você");
    this._circle = Leaflet.circle(latlng, this.radius);
    this._latLng = latlng;
    this.radius = radius;
    this._evaluation = evaluation;
    if (params.items) this._items = params.items;
    if (params.type) this._type = params.type;
    if (params.category) this._category = params.category;
    this._running = true;

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.latLng = {lat: location.latitude, lng: location.longitude};
        //this.bindProcessing(this.latLng);
        this.sendMsg(this.latLng);
        this.trackServices();
      });

    }, (err) => {
      console.log(err);
    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();

    // Foreground Tracking
    let options = {
      frequency: 3000,
      timeout : 60000,
      maximumAge : 0,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options)
                                  .filter((p: any) => p.code === undefined)
                                  .subscribe((position: Geoposition) => {

      console.log(position);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.latLng = {lat: position.coords.latitude, lng: position.coords.longitude};
        //this.bindProcessing(this.latLng);
        this.sendMsg(this.latLng);
        this.trackServices();
      });

    });
  }

  isRunning(){
    return this._running;
  }

  sendMsg(latlng){
    for (let layer of Object.keys(this._equipLayers)) this._equipLayers[layer].clearLayers();

    var options:MessageInput;
    if (this._evaluation === "evaluateTopic"){
      options = {
        "topicKeys": [{ "topicId": this._items[0]}],
        "coordinates": [this._latLng.lat, this._latLng.lng],
        "radius": this.radius
      };
    }else{
      //for (let layer of Object.keys(this._equipLayers)) this._equipLayers[layer].clearLayers();
      options = {
        "topicKeys": [],
        "coordinates": [this._latLng.lat, this._latLng.lng],
        "radius":this.radius
      };
      if (this._type) options["type"] = this._type;
      if (this._category) options["category"] = this._category;
    }
    var msg: MessageModel;
    msg = {
      "author": this.userKey,
      "knowledgeMessage": options,
      "sync": Date.now(),
      "route": (this._evaluation === "evaluateTopic")?"/topic/dynamic":"/topic/static"
    },

		this.wsService.messages.next(msg);

    this.locals.push(msg);
  }

  bindProcessing(latlng){
    var options = {};
    if (this._evaluation === "evaluateTopic"){
      options = {
        "topicKeys": [
          { "topicId": this._items[0] }
        ],
        "coordinates": [this._latLng.lat, this._latLng.lng],
        "radius": this.radius
      };
    }else{
      //for (let layer of Object.keys(this._equipLayers)) this._equipLayers[layer].clearLayers();
      options["coordinates"] = [this._latLng.lat, this._latLng.lng];
      options["radius"] = this.radius;
      if (this._type) options["type"] = this._type;
      if (this._category) options["category"] = this._category;
    }

    for (let layer of Object.keys(this._equipLayers)) this._equipLayers[layer].clearLayers();

    //this._evaluation.bind ( this )
    this.dataService[this._evaluation](options)
      .subscribe((data) => {
        if (this._evaluation === "evaluateTopic"){
            console.log ( data );
            this._status = data;
            if (data[0].result.err)
              this.marker
                .bindPopup(data[0].result.err.msg +" / "+ data[0].result.sync)
                .openPopup();
            else
              this.marker
                .bindPopup(data[0].result.value +" / "+ data[0].result.sync)
                .openPopup();
           this._items = data[0].equipments;
           for (let equip of this._items["connected"])
             this._equipLayers["green"].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon("green")}).bindPopup(equip.data.label + "  (" + equip.category + ")"));
           for (let equip of this._items["disconnected"])
             this._equipLayers["red"].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon("red")}).bindPopup(equip.data.label + "  (" + equip.category + ")"));
        }else{
          this._items = data;
          for (let equip of data){
            let itemColor = equip.data.connected?"green":"red";
            this._equipLayers[itemColor].addLayer(Leaflet.marker(Leaflet.latLng(equip.location.coordinates),{icon: newIcon(itemColor)}).bindPopup(equip.data.label + "  (" + equip.category + ")"));
          }
        }
      },error =>  console.log(<any>error));

    this.locals.push(latlng);
    //this.storage.set("locals" + this.userKey + this.item._id, this.locals);

  }

  stopTracking() {
    console.log('stopTracking');
    this._running = false;
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
    this.stopTrackServices();
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    this._radius = value;
    this._circle.setRadius(value);
  }
  set latLng(latlng) {
    this._latLng = latlng;
    this._circle.setLatLng(latlng);
    this._marker.setLatLng(latlng);
  }

  get latLng(){
    return this._latLng;
  }

  set equipLayers(equipLayers) {
    this._equipLayers = equipLayers;
  }

  get equipLayers(){
    return this.equipLayers;
  }
  set layerControl(layerControl) {
    this._layerControl = layerControl;
  }
  get layerControl(){
    return this._layerControl;
  }

  get marker(){
    return this._marker;
  }
  get circle(){
    return this._circle;
  }
  get status(){
    return this._status;
  }
}
