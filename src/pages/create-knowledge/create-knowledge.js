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
import { Platform, AlertController, ModalController, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
// Observable operators
import 'rxjs/add/operator/catch';
import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { ModalContentPage } from '../modals/attribute-item';
import { KnowledgeModel } from '../../models/knowledge.model';
import { RelationModel } from '../../models/relation.model';
import { AttributeModel } from '../../models/attribute.model';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera } from '@ionic-native/camera';
var CreateKnowledgePage = (function () {
    function CreateKnowledgePage(user, platform, navCtrl, navParams, modalCtrl, alertCtrl, geolocation, geocoder, toaster, locac, diagnostic, camera, fb, dataService, loadingCtrl) {
        this.user = user;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.geocoder = geocoder;
        this.toaster = toaster;
        this.locac = locac;
        this.diagnostic = diagnostic;
        this.camera = camera;
        this.fb = fb;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.mask = [/[1-9]/, '.', /[1-9]/, '.', /[1-9]/, '.', /[1-9]/];
        this.imgdef = "assets/icons/img/ionic.png";
        this.showInfo = false;
        this.showConfigurations = false;
        this.showBasics = false;
        this.showAddress = false;
        this.showConnection = true;
        this.listConfigurations = [];
        this.associationList = [];
        this.selectedSegment = "relations";
        this.selectedItem = "";
        this.referenceData = [];
        this.values = [];
        this.constantsWindows = {
            newItemWindow: {
                title: "Nova Associação",
                mensagem: "Qual o nome da associação?"
            },
            create: "Criar Associação",
            update: "Salvar"
        };
        this.submitted = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.templateData = this.navParams.get('template');
        if (this.templateData)
            this.templateType = this.templateData.type;
        else
            this.templateType = this.navParams.get('type');
        if (this.templateData)
            this.pageTitle = this.templateData.name;
        this.selectedItem = this.navParams.get('item');
        this.userKey = this.navParams.get('key');
    }
    CreateKnowledgePage.prototype.ngOnInit = function () {
        this.getReferenceData();
        if (this.selectedItem)
            this.setKnowledgeForm();
        else {
            this.templateData.root = this.userKey;
            this.knowledge = new KnowledgeModel({ template: this.templateData }, this.fb);
            //this.knowledgeForm = this.knowledge.fillTemplate();
            this.knowledgeForm = this.knowledge.getFormGroup();
            this.addAssociation("ownedBy", { "id": this.userKey });
        }
    };
    CreateKnowledgePage.prototype.getReferenceData = function () {
        var _this = this;
        this.dataService.getReferenceData(["all"])
            .subscribe(function (data) { return _this.referenceData = data; }, function (error) { return _this.errorMessage = error; });
    };
    CreateKnowledgePage.prototype.setKnowledgeForm = function () {
        var _this = this;
        this.dataService.getOne([this.selectedItem])
            .subscribe(function (result) {
            _this.knowledge = new KnowledgeModel(result, _this.fb);
            _this.knowledgeForm = _this.knowledge.getFormGroup();
            /*for (let item of Object.keys(result.relations)) {
              if (result.relations[item]!=='object') continue;
              const control = <FormArray>this.knowledgeForm["relations"].controls[item];
              for (let arrayItem of result.relations[item])
                  control.push(new RelationModel(this.fb).createFilledFormGroup(arrayItem, this.fb));
            }

            const infoControl = <FormArray>this.knowledgeForm["data"].controls['info'];
            for (let resInfo of result.data.info)
                infoControl.push(new AttributeModel(this.fb).createFilledFormGroup(resInfo, this.fb));

            const configControl = <FormArray>this.knowledgeForm["data"].controls['configurations'];
            for (let resConfig of result.data.configurations)
                configControl.push(new AttributeModel(this.fb).createFilledFormGroup(resConfig, this.fb));*/
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateKnowledgePage.prototype.propertyTapped = function (event, item) {
        /*this.navCtrl.push(HubDetailsPage, {
            item: item
        });*/
    };
    CreateKnowledgePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.knowledgeForm.controls["data"]["controls"].image.type = 'data:image/png;base64';
            _this.knowledgeForm.controls["data"]["controls"].image.value = imageData;
        }, function (err) {
            // Handle error
        });
    };
    CreateKnowledgePage.prototype.geoLocate = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true
        };
        if (this.platform.is('cordova')) {
            this.locac.canRequest().then(function (res) {
                if (res) {
                    _this.locac.request(_this.locac.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                        _this.geolocation.getCurrentPosition(options).then(function (position) {
                            _this.updateGeoLocation(position);
                        }).catch(function (error) {
                            console.error("Accuracy request failed: error code=" + error.code + "; error message=" + error.message);
                            if (error.code !== _this.locac.ERROR_USER_DISAGREED) {
                                var prompt_1 = _this.alertCtrl.create({
                                    title: 'Falha ao buscar a localização',
                                    message: "Gostaria de ir para a página de configurações?",
                                    buttons: [
                                        {
                                            text: 'Voltar',
                                            handler: function (data) {
                                                console.log('Cancel clicked');
                                            }
                                        },
                                        {
                                            text: 'Configurar',
                                            handler: function (data) {
                                                console.log('go clicked');
                                                _this.diagnostic.switchToLocationSettings();
                                            }
                                        }
                                    ]
                                });
                                prompt_1.present();
                            }
                        });
                    }, function (error) {
                        console.log('Error getting location', error);
                        var alert = _this.alertCtrl.create({
                            title: 'Falha na Geolocalização!',
                            subTitle: error,
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }
            });
        }
        else {
            this.geolocation.getCurrentPosition(options)
                .then(function (position) {
                _this.updateGeoLocation(position);
            }).catch(function (error) {
                console.error("Accuracy request failed: error code=" + error.code + "; error message=" + error.message);
            });
        }
    };
    CreateKnowledgePage.prototype.updateGeoLocation = function (pos) {
        var _this = this;
        this.knowledgeForm.controls["location"]["controls"]["coordinates"]["controls"] = pos.coords;
        if (this.platform.is('cordova')) {
            this.geocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude).then(function (res) {
                _this.knowledgeForm.controls['location']["controls"].text.setValue(res.countryName);
                var toaster = _this.toaster.create({
                    message: "Endereço atualizado",
                    duration: 2000
                });
                toaster.present();
            });
        }
        else {
            this.knowledgeForm.controls['location']["controls"].text.setValue("");
        }
        ;
    };
    CreateKnowledgePage.prototype.removeItem = function (type, arrayIndex) {
        var dataControl = this.knowledgeForm.controls['data'];
        var control = dataControl.controls[type];
        //this.listConfigurations.removeAt(arrayIndex);
        control.removeAt(arrayIndex);
    };
    CreateKnowledgePage.prototype.addItem = function (type) {
        var newAttribute = new AttributeModel(null, this.fb);
        var dataControl = this.knowledgeForm.controls['data'];
        var control = dataControl.controls[type];
        control.push(newAttribute.getFormGroup());
        this.listConfigurations.push(true);
    };
    CreateKnowledgePage.prototype.removeAssociation = function (type, arrayIndex) {
        var relControl = this.knowledgeForm.controls['relations'];
        var control = relControl.controls[type];
        control.removeAt(arrayIndex);
    };
    CreateKnowledgePage.prototype.addAssociation = function (type, input) {
        var newRelation = new RelationModel(input, this.fb);
        var relControl = this.knowledgeForm.controls['relations'];
        var control = relControl.controls[type];
        control.push(newRelation.getFormGroup());
    };
    CreateKnowledgePage.prototype.openModal = function (type, ref) {
        var _this = this;
        var modal = this.modalCtrl.create(ModalContentPage);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                console.log('MODAL DATA', data);
                if (type === 'add')
                    _this.knowledge[ref].push(data.item);
                //else this.values[ref + data.item.name] = data.item;
            }
        });
    };
    CreateKnowledgePage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.knowledgeForm.value, this.knowledgeForm.valid);
        var loader = this.loadingCtrl.create({
            content: "Salvando..."
        });
        loader.present();
        this.dataService.createKnowledge(this.knowledgeForm.value)
            .subscribe(function (data) {
            console.log(data);
            loader.dismissAll();
            _this.navCtrl.pop();
        }, function (error) { return _this.errorMessage = error; });
    };
    //////// NOT SHOWN IN DOCS ////////
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    CreateKnowledgePage.prototype.showFormControls = function (form) {
        return form && form.controls['name'] &&
            form.controls['name'].value;
    };
    return CreateKnowledgePage;
}());
CreateKnowledgePage = __decorate([
    Component({
        selector: 'page-create',
        templateUrl: './create-page.html'
    }),
    __metadata("design:paramtypes", [User,
        Platform,
        NavController,
        NavParams,
        ModalController,
        AlertController,
        Geolocation,
        NativeGeocoder,
        ToastController,
        LocationAccuracy,
        Diagnostic,
        Camera,
        FormBuilder,
        DataService,
        LoadingController])
], CreateKnowledgePage);
export { CreateKnowledgePage };
//# sourceMappingURL=create-knowledge.js.map