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
import { DataService } from '../../providers/apiData.service';
//import { CONNECTORS, CATEGORY_TYPES, SIGN_TYPES} from '../../references/references'
var RuleModalPage = (function () {
    function RuleModalPage(navParams, viewCtrl, dataService) {
        this.viewCtrl = viewCtrl;
        this.dataService = dataService;
        this.hasConnector = false;
        this.type = "";
        this.hasConnector = !!(navParams.get('index'));
        this.type = navParams.get('type');
    }
    RuleModalPage.prototype.doSave = function () {
        this.viewCtrl.dismiss({
            ruleItem: {
                category: this.category,
                operator: this.operator,
                value: this.value,
                connector: this.connector
            }
        });
    };
    RuleModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return RuleModalPage;
}());
RuleModalPage = __decorate([
    Component({
        templateUrl: './rule-item-modal.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        ViewController,
        DataService])
], RuleModalPage);
export { RuleModalPage };
//# sourceMappingURL=rule-item-modal.js.map