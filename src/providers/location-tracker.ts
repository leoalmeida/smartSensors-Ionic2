import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import * as Leaflet from "leaflet";

import { DataService }  from './apiData.service';

@Injectable()
export class LocationTracker {

  public watch: any;
  private _radius: number = 700;
  private _latLng: any;
  private _circle: any;
  private _marker: any;
  private _evaluation: any;
  private _itemId: any;
  private _running:boolean = false;
  private _status:any;
  private locals = [];


  constructor(public zone: NgZone,
              public backgroundGeolocation: BackgroundGeolocation,
              public geolocation: Geolocation,
              private dataService: DataService) {}

  // Background Tracking
  startTracking(latlng: any, radius: number, itemId: string, evaluation: any) {

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
    this._itemId = itemId;
    this._evaluation = evaluation;
    this._running = true;

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.latLng = {lat: location.latitude, lng: location.longitude};
        this.bindProcessing(this.latLng);
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
        this.bindProcessing(this.latLng);
      });

    });
  }

  isRunning(){
    return this._running;
  }

  bindProcessing(latlng){
    var options = {
      "topicKeys": [
        { "topicId": this._itemId }
      ],
      "coordinates": [this._latLng.lat, this._latLng.lng],
      "radius": this.radius
    };

    //this._evaluation.bind ( this )
    this.dataService[this._evaluation](options)
      .subscribe((data) => {
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
      },error =>  console.log(<any>error));

    this.locals.push(latlng);
    //this.storage.set("locals" + this.userKey + this.item._id, this.locals);
  }

  stopTracking() {
    console.log('stopTracking');
    this._running = false;
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
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
