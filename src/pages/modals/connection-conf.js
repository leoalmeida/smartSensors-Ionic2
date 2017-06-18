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
import { NavParams, ViewController } from 'ionic-angular';
import { ConnectionModel } from '../../models/connection.model';
var ConnectionConfModal = (function () {
    function ConnectionConfModal(navParams, viewCtrl) {
        this.viewCtrl = viewCtrl;
        var parameter = navParams.get('parameter');
        this.item = new ConnectionModel(parameter.connection);
    }
    ConnectionConfModal.prototype.doSave = function () {
        this.viewCtrl.dismiss({
            item: this.item
        });
    };
    ConnectionConfModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ConnectionConfModal;
}());
ConnectionConfModal = __decorate([
    Component({
        templateUrl: './connection-conf.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        ViewController])
], ConnectionConfModal);
export { ConnectionConfModal };
//# sourceMappingURL=connection-conf.js.map