var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MQTTService } from '../../providers/mqtt/mqtt.service';
import { TransportState, TransportStateColor } from "../../providers/mqtt/transport.service";
/**
 * MQ connection status as a component
 */
var StatusComponent = (function () {
    function StatusComponent(_mqService) {
        this._mqService = _mqService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        console.log('Status init');
        this.state = this._mqService.state
            .map(function (state) { return TransportState[state]; });
        this.colorstate = this._mqService.state
            .map(function (state) { return TransportStateColor[state]; });
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    Component({
        selector: 'app-mq-status',
        templateUrl: './status.html'
    }),
    __metadata("design:paramtypes", [MQTTService])
], StatusComponent);
export { StatusComponent };
//# sourceMappingURL=status.component.js.map