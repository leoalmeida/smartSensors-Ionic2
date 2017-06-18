var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Subject } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TransportState } from './transport.service';
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
var MQTTService = (function () {
    /** Constructor */
    function MQTTService(_document) {
        var _this = this;
        this._document = _document;
        // Callback run on successfully connecting to server
        this.on_reconnect = function () {
            _this.debug('on_reconnect');
        };
        // Callback run on successfully connecting to server
        this.on_connect = function () {
            _this.debug('connected');
            // Indicate our connected state to observers
            _this.state.next(TransportState.CONECTADO);
            // Subscribe to message queues
            _this.subscribe();
            _this.debug(typeof _this.resolvePromise);
            // Resolve our Promise to the caller
            if (_this.resolvePromise)
                _this.resolvePromise();
            // Clear callback
            _this.resolvePromise = null;
        };
        // Handle errors
        this.on_error = function (error) {
            console.error('on_error');
            console.error(error);
            if (typeof error === 'undefined') {
                _this.debug('Undefined error');
                _this.state.next(TransportState.CONECTANDO);
                return;
            }
            // Check for dropped connection and try reconnecting
            if (error.indexOf('Lost connection') !== -1) {
                // Reset state indicator
                _this.state.next(TransportState.DESCONECTADO);
            }
        };
        // On message RX, notify the Observable with the message object
        this.on_message = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var topic = args[0], message = args[1], packet = args[2];
            // Log it to the console
            _this.debug(topic);
            _this.debug(message);
            //this.debug(packet.messageId);
            if (message.toString()) {
                _this.messages.next(packet);
            }
            else {
                console.warn('Empty message received!');
            }
        };
        this.messages = new Subject();
        this.state = new BehaviorSubject(TransportState.DESCONECTADO);
    }
    /** Set up configuration */
    MQTTService.prototype.configure = function (config) {
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
        // If host isn't set, use the browser's location
        if (typeof this.config.host === 'undefined') {
            this.config.host = this._document.location.hostname;
        }
    };
    /**
     * Perform connection to broker, returning a Promise
     * which is resolved when connected.
     */
    MQTTService.prototype.try_connect = function () {
        var _this = this;
        this.debug('try_connect');
        if (this.state.getValue() !== TransportState.DESCONECTADO) {
            throw Error('Can\'t try_connect if not CLOSED!');
        }
        if (this.client === null) {
            throw Error('Client not configured!');
        }
        // Connecting via SSL Websocket?
        var scheme = 'ws';
        if (this.config.ssl) {
            scheme = 'wss';
        }
        // Client options loaded from config
        var options = {
            'keepalive': this.config.keepalive,
            'reconnectPeriod': 10000,
            'clientId': this.config.clientId || 'clientid_' + Math.floor(Math.random() * 65535),
            'username': this.config.user,
            'password': this.config.pass
        };
        var url = scheme + '://' + this.config.host + ':' + this.config.port + '/' + this.config.path;
        // Create the client and listen for its connection
        this.client = mqtt.connect(url, options);
        this.client.addListener('connect', this.on_connect);
        this.client.addListener('reconnect', this.on_reconnect);
        this.client.addListener('message', this.on_message);
        this.client.addListener('offline', this.on_error);
        this.client.addListener('error', this.on_error);
        this.debug('connecting to ' + url);
        this.state.next(TransportState.CONECTANDO);
        return new Promise(function (resolve, reject) { return _this.resolvePromise = resolve; });
    };
    /** Disconnect the client and clean up */
    MQTTService.prototype.disconnect = function () {
        var _this = this;
        // Notify observers that we are disconnecting!
        this.state.next(TransportState.DESCONECTANDO);
        // Disconnect. Callback will set CLOSED state
        if (this.client) {
            this.client.end(false, function () { return _this.state.next(TransportState.DESCONECTADO); });
        }
    };
    /** Send a message to all topics */
    MQTTService.prototype.publish = function (topic, message) {
        //for (const t of this.config.publish) {
        this.client.publish(topic, message);
        //}
    };
    /** Subscribe to server message queues */
    MQTTService.prototype.subscribe = function () {
        // Subscribe to our configured queues
        // Callback is set at client instantiation (assuming we don't need separate callbacks per queue.)
        for (var _i = 0, _a = this.config.subscribe; _i < _a.length; _i++) {
            var t = _a[_i];
            this.debug('subscribing: ' + t);
            this.client.subscribe(t);
        }
        // Update the state
        if (this.config.subscribe.length > 0) {
            this.state.next(TransportState.REGISTRADO);
        }
    };
    /**
     * Callback Functions
     *
     * Note the method signature: () => preserves lexical scope
     * if we need to use this.x inside the function
     */
    MQTTService.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Push arguments to this function into console.log
        if (console && console.log && console.log.apply) {
            console.log.apply(console, args);
        }
    };
    return MQTTService;
}());
MQTTService = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], MQTTService);
export { MQTTService };
//# sourceMappingURL=mqtt.service.js.map