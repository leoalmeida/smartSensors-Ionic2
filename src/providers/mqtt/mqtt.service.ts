import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Http} from '@angular/http';
import { Platform } from 'ionic-angular';

import { Subject } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Config } from '../config/config';
import { TransportService, TransportState } from './transport.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { NetworkNotifierService } from '../network.notifier';

import * as mqtt from 'mqtt';

/**
 * Angular2 Message Queue Service using MQTT.js
 *
 * @description This service handles subscribing to a
 * message queue using the mqtt library, and returns
 * values via the ES6 Observable specification for
 * asynchronous value streaming by wiring messages
 * into a Subject observable.
 */
@Injectable()
export class MQTTService implements TransportService {

  /* Service parameters */

  // State of the MQService
  public state: BehaviorSubject<TransportState>;

  // Publishes new messages to Observers
  public messages: Subject<mqtt.Packet>;

  // Configuration structure with MQ creds
  private config: Config;

  // MQTT Client from MQTT.js
  private client: mqtt.Client;

  // Resolve Promise made to calling class, when connected
  private resolvePromise: (...args: any[]) => void;

  private connection:any;
  private pubsubSubject: BehaviorSubject<any>;
  private pubsubSync: number = 0;
  private floatingPubSub:boolean = true;
  private networkStatus:boolean = false;
  private defConn = { "properties":{
                        "schema": "ws",
                        "host" : "127.0.0.1",
                        "port" : 3004
                      }
                    };
  private lastVerify: number = 0;
  /** Constructor */
  public constructor(@Inject(DOCUMENT) private _document: any,
                    public platform: Platform,
                    private http:Http,
                    private geolocation: Geolocation,
                    private networkStatusService:NetworkNotifierService,
                    private nativeStorage: NativeStorage) {
    this.messages = new Subject<mqtt.Packet>();
    this.state = new BehaviorSubject<TransportState>(TransportState.DESCONECTADO);
    this.pubsubSubject = new BehaviorSubject(this.defConn);
    this.subscribeFloatingPubSub();
    this.platform.ready().then((readySource) => {
      this.networkStatusService.getNetworkStatus()
            .subscribe((value) => {
                  console.log("Subscription got", value);
                  this.networkStatus = value.status;
            });
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        if (this.config) {
          this.config.lat = data.coords.latitude;
          this.config.lng = data.coords.longitude;
          this.verifyNearPubSubServer(data.coords.latitude, data.coords.longitude, 0);
        }
      });
      this.nativeStorage.getItem('smartSensors.configurations')
      .then(data => {
          if (data){
            this.floatingPubSub = data.floatingPubSub;
            if (!this.floatingPubSub)
              this.nativeStorage.getItem('smartSensors.pubsubConnection')
                    .then(connection => this.pubsubSubject.next(connection),
                          error => {
                            console.error(error)
                          });
          }
      },
      error => {
        console.error(error);
      });
    });
  }

  subscribeFloatingPubSub(){
    this.pubsubSubject.subscribe((value) => {
                console.log("Webserver got", value);
                this.connection = value.properties;
                this.nativeStorage.setItem('smartSensors.pubsubConnection', value.properties)
                  .then(
                    () => console.log('Stored item!', value.properties),
                    error => console.error('Error storing item', error)
                  );
              });
  }

  verifyNearPubSubServer(lat, lng, distance){
    if ((Date.now() - this.pubsubSync) < 60000 * 3) return;
    this.http.get("api/connection/pubsub/" + [lat, lng].join('/'))
      .subscribe(data => {
          if (data){
            this.pubsubSync = Date.now();
            this.pubsubSubject.next(data.json());
          }
      });
  }

  /** Set up configuration */
  public configure(config?: Config): void {

    // Check for errors:
    if (this.state.getValue() !== TransportState.DESCONECTADO) {
      throw Error('Already running!');
    }

    if (config === null && this.config === null) {
      throw Error('No configuration provided!');
    }

    // Set our configuration
    if (config != null) {
      this.config = config;
    }

    if(this.connection){
      if (this.connection.ssl) this.config.ssl = this.connection.ssl;
      if (this.connection.path) this.config.path = this.connection.path;
      if (this.connection.keepalive) this.config.keepalive = this.connection.keepalive;
      this.config.host = this.connection.host;
      this.config.port = this.connection.port;
    } else {
      this.config.host = this._document.location.hostname;
    }
 }


  /**
   * Perform connection to broker, returning a Promise
   * which is resolved when connected.
   */
  public try_connect(): Promise<{}> {
    this.debug('try_connect');
    if (this.state.getValue() !== TransportState.DESCONECTADO) {
      throw Error('Can\'t try_connect if not CLOSED!');
    }
    if (this.client === null) {
      throw Error('Client not configured!');
    }

    // Connecting via SSL Websocket?
    let scheme = 'ws';
    if (this.config.ssl) { scheme = 'wss'; }

    // Client options loaded from config
    const options: mqtt.IClientOptions = {
      'keepalive': this.config.keepalive,
      'reconnectPeriod': 10000,
      'clientId': this.config.clientId || 'clientid_' + Math.floor(Math.random() * 65535),
      'username': this.config.user,
      'password': this.config.pass
    };

    const url = scheme + '://' + this.config.host + ':' + this.config.port + '/' + this.config.path;

    // Create the client and listen for its connection
    this.client = mqtt.connect(url, options);

    this.client.addListener('connect', this.on_connect);
    this.client.addListener('reconnect', this.on_reconnect);
    this.client.addListener('message', this.on_message);
    this.client.addListener('offline', this.on_error);
    this.client.addListener('error', this.on_error);

    this.debug('connecting to ' + url);
    this.state.next(TransportState.CONECTANDO);

    return new Promise(
      (resolve, reject) => this.resolvePromise = resolve
    );
  }


  /** Disconnect the client and clean up */
  public disconnect(): void {

    // Notify observers that we are disconnecting!
    this.state.next(TransportState.DESCONECTANDO);

    // Disconnect. Callback will set CLOSED state
    if (this.client) {
      this.client.end(
        false,
        () => this.state.next(TransportState.DESCONECTADO)
      );
    }
  }


  /** Send a message to all topics */
  public publish(topic: string, message?: string) {

    //for (const t of this.config.publish) {
      this.client.publish(topic, message);
    //}
  }


  /** Subscribe to server message queues */
  public subscribeAll(): void {
    this.state.next(TransportState.REGISTRANDO);
    // Subscribe to our configured queues
    // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
    for (const t of this.config.subscribe) {
      this.debug('subscribing: ' + t);
      this.client.subscribe(t);
    }
    // Update the state
    if (this.config.subscribe.length > 0) {
      this.state.next(TransportState.REGISTRADO);
    }else{
      this.state.next(TransportState.CONECTADO);
    }
  }

  public subscribe(channelId): void {
    this.state.next(TransportState.REGISTRANDO);
    // Subscribe to our configured queues
    // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
    this.debug('subscribing: ' + channelId);
    this.client.subscribe(channelId);

    // Update the state
    if (this.config.subscribe.length > 0) {
      this.state.next(TransportState.REGISTRADO);
    }else{
      this.state.next(TransportState.CONECTADO);
    }
  }

  public unsubscribe(channelId): void {
    this.state.next(TransportState.REGISTRANDO);
    // Subscribe to our configured queues
    // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
    this.debug('unsubscribing: ' + channelId);
    this.client.unsubscribe(channelId);

    // Update the state
    if (this.config.subscribe.length > 0) {
      this.state.next(TransportState.REGISTRADO);
    }
  }

  /**
   * Callback Functions
   *
   * Note the method signature: () => preserves lexical scope
   * if we need to use this.x inside the function
   */
  public debug(...args: any[]) {

    // Push arguments to this function into console.log
    if (console && console.log && console.log.apply) {
      console.log.apply(console, args);
    }
  }

  // Callback run on successfully connecting to server
  public on_reconnect = () => {
    this.debug('on_reconnect');
    this.verifyNearPubSubServer(this.config.lat,this.config.lng, 0);
  }

  // Callback run on successfully connecting to server
  public on_connect = () => {

    this.debug('connected');

    // Indicate our connected state to observers
    this.state.next(TransportState.CONECTADO);

    // Subscribe to message queues
    this.subscribeAll();

    this.debug(typeof this.resolvePromise);

    // Resolve our Promise to the caller
    if (this.resolvePromise) this.resolvePromise();

    // Clear callback
    this.resolvePromise = null;
  }


  // Handle errors
  public on_error = (error: any) => {

    console.error('on_error');
    console.error(error);

    if (typeof error === 'undefined') {
      this.debug('Undefined error');
      this.state.next(TransportState.CONECTANDO);
      return;
    }

    // Check for dropped connection and try reconnecting
    if (error.indexOf('Lost connection') !== -1) {

      // Reset state indicator
      this.state.next(TransportState.DESCONECTADO);
    }
  }


  // On message RX, notify the Observable with the message object
  public on_message = (...args: any[]) => {

    const topic = args[0],
      message = args[1],
      packet: mqtt.Packet = args[2];

    // Log it to the console
    this.debug(topic);
    this.debug(message);
    //this.debug(packet.messageId);

    if (message.toString()) {
      this.messages.next(packet);
    } else {
      console.warn('Empty message received!');
    }
  }
}
