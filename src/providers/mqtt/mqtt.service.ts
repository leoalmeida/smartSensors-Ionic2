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

//import * as mqtt from 'mqtt';

import { connect, Client, Packet, IClientOptions} from 'mqtt';
import { connection } from 'mqtt-connection';

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

  private calibrationDelay: number = 2000;
  /* Service parameters */
  // State of the MQService
  public state: BehaviorSubject<TransportState>;

  // Publishes new messages to Observers
  public messages: Subject<Packet>;

  // Configuration structure with MQ creds
  private config: Config;

  // MQTT Client from MQTT.js
  private client: Client;

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
    this.messages = new Subject<Packet>();
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

    if(!this.config.pubsubOptions){
      this.config.pubsubOptions={
        qos: 1,
        retain: true
      }
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
    if (this.config === null) {
      throw Error('Client not configured!');
    }

    // Connecting via SSL Websocket?
    let scheme = 'ws';
    if (this.config.ssl) { scheme = 'wss'; }

    // Client options loaded from config
    const options: IClientOptions = {
      'keepalive': this.config.keepalive,
      'reconnectPeriod': 10000,
      'clientId': this.config.clientId || 'clientid_' + Math.floor(Math.random() * 65535),
      'username': this.config.user,
      'password': this.config.pass
    };

    const url = scheme + '://' + this.config.host + ':' + this.config.port + '/' + this.config.path;

    // Create the client and listen for its connection
    this.client = connect(url, options);

    this.client.on('connect', this.on_connect);
    this.client.on('reconnect', this.on_reconnect);
    this.client.on('message', this.on_message);
    this.client.on('offline', this.on_offline);
    this.client.on('error', this.on_error);
    this.client.on('close', this.on_close);
    this.client.on('packetsend', this.on_packetsend);
    this.client.on('packetreceive', this.on_packetreceive);

    this.debug('connecting to ' + url);
    this.state.next(TransportState.CONECTANDO);

    return new Promise(
      (resolve, reject) => this.resolvePromise = resolve
    );
  }


  /** Disconnect the client and clean up */
  public disconnect(): void {

    // Notify observers that we are disconnecting!

    if (this.client.reconnecting) {
      this.state.next(TransportState.CONECTANDO);
      return;
    }
    else this.state.next(TransportState.DESCONECTANDO);

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
      this.client.publish(topic, message, this.config.pubsubOptions, this.handlePublishCallback);
      this.state.next(TransportState.ENVIANDO);
    //}
  }

  private handlePublishCallback(): void {
    this.debug('Message Sent');
    this.state.next(TransportState.CONECTADO);
  }


  /** Subscribe to server message queues */
  public subscribeAll(): void {
    this.state.next(TransportState.REGISTRANDO);
    // Subscribe to our configured queues
    // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
    let subscriptions = Object.keys(this.config.subscriptions);
    for (const t of subscriptions) {
      this.debug('subscribing: ' + t);
      this.client.subscribe(t);
      this.config.subscriptions[t]["calibrated"] = true;
      this.state.next(TransportState.REGISTRADO);
    }

    // Update the state
    if (subscriptions.length > 0) {
      this.state.next(TransportState.CONECTADO);
    }else{
      this.state.next(TransportState.REGISTRADO);
    }
  }

  public subscribe(channelId): void {

    if (!this.config.subscriptions[channelId]) {
      this.config.subscriptions[channelId] = {
        "calibrated": true
      };
    }else{
      this.debug('already subscribed: ' + channelId);
      return;
    }

    this.state.next(TransportState.REGISTRANDO);
    // Subscribe to our configured queues
    // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
    this.debug('subscribing: ' + channelId);
    this.client.subscribe(channelId);

    // Update the state
    if (Object.keys(this.config.subscriptions).length > 0) {
      this.state.next(TransportState.CONECTADO);
    }else{
      this.state.next(TransportState.REGISTRADO);
    }
  }

  public unsubscribe(channelId): void {
    this.state.next(TransportState.REGISTRANDO);
    // Subscribe to our configured queues
    // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
    this.debug('unsubscribing: ' + channelId);
    this.client.unsubscribe(channelId);
    this.config.subscriptions[channelId]["calibrated"] = false;

    // Update the state
    if (Object.keys(this.config.subscriptions).length > 0) {
      this.state.next(TransportState.CONECTADO);
    }else{
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


  public on_close = () => {
    console.log(' disconnected');
    this.state.next(TransportState.DESCONECTADO);
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

  public on_offline = () => {
    console.error('on_offline');
    this.state.next(TransportState.DESCONECTADO);
  }

  public on_packetsend = (packet) => {
    console.error('on_packetsend: ', packet);
  }

  public on_packetreceive = (packet) => {
    console.error('on_packetreceive: ', packet);
  }

  // On message RX, notify the Observable with the message object
  public on_message = (topic, message, packet) => {
    this.state.next(TransportState.LENDO);
    /*const topic = args[0],
      message = args[1],
      packet: Packet = args[2];
*/
    // Log it to the console
    this.debug(topic);
    this.debug(message);
    this.debug(packet.messageId);

    /*Noise reduction
    this.io[opts.type + "Read"](this.pin, function(data) {
      raw = data;

      // Only append to the samples when noise filtering can/will be used
      if (opts.type !== "digital") {
        samples.push(raw);
      }
    }.bind(this));

    state.median = median(samples);

    raw === null ? 0 :
          Fn.map(this.raw, 0, resolution, 0, 255) | 0;

    */

    if (this.config.subscriptions[topic]["calibrated"]){
      if (message.toString()) {
        this.messages.next(packet);
      } else {
        console.warn('Empty message received!');
      }
    }else console.warn('calibrating!!!');


    this.state.next(TransportState.CONECTADO);
  }

  private median(input) {
    // faster than default comparitor (even for small n)
    var sorted = input.sort(function(a, b) {
      return a - b;
    });
    var len = sorted.length;
    var half = Math.floor(len / 2);

    // If the length is odd, return the midpoint m
    // If the length is even, return average of m & m + 1
    return len % 2 ? sorted[half] : (sorted[half - 1] + sorted[half]) / 2;
  }

}
