import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, ModalController, NavController, NavParams, LoadingController, ToastController   } from 'ionic-angular';
import {FormBuilder, FormGroup, FormArray } from '@angular/forms';
// Observable operators
import 'rxjs/add/operator/catch';

import { DataService } from '../../providers/apiData.service';
import { User } from '@ionic/cloud-angular';
import { ModalContentPage }  from '../modals/attribute-item';

import { KnowledgeModel } from '../../models/knowledge.model';
import { RelationModel } from '../../models/relation.model';
import { AttributeModel } from '../../models/attribute.model';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-create',
  templateUrl: './create-page.html'
})
export class CreateKnowledgePage implements OnInit{
  knowledgeForm: FormGroup;

  public mask = [/[1-9]/,'.', /[1-9]/, '.', /[1-9]/, '.', /[1-9]/]

  pageTitle: string;
  imgdef:string = "assets/icons/img/ionic.png";

  showInfo: boolean = false;
  showConfigurations: boolean = false;
  showBasics: boolean = false;
  showAddress: boolean = false;
  showConnection: boolean = true;

  listConfigurations: Array<boolean> = [];
  associationList: Array<string> = [];
  errorMessage: string;
  userKey: string;

  selectedSegment: string = "relations";
  selectedItem: string = "";
  templateData: any;
  templateType: string;
  knowledge: KnowledgeModel;
  referenceData: any = [];
  values: Array<any> = [];

  constantsWindows: Object = {
    newItemWindow: {
      title: "Nova Associação",
      mensagem: "Qual o nome da associação?"
    },
    create: "Criar Associação",
    update: "Salvar"
  };

  submitted = false;

  constructor(public user:User,
              public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              private geolocation: Geolocation,
              private geocoder: NativeGeocoder,
              private toaster: ToastController,
              private locac: LocationAccuracy,
              private diagnostic: Diagnostic,
              private camera: Camera,
              private fb: FormBuilder,
              private dataService:DataService,
              public loadingCtrl:LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.templateData = this.navParams.get('template');
    if (this.templateData) this.templateType = this.templateData.type;
    else this.templateType = this.navParams.get('type');
    if (this.templateData) this.pageTitle = this.templateData.name;
    this.selectedItem = this.navParams.get('item');
    this.userKey = this.navParams.get('key');

  }

  ngOnInit() {
    this.getReferenceData();
    if(this.selectedItem) this.setKnowledgeForm();
    else {
      this.templateData.root = this.userKey;
      this.knowledge = new KnowledgeModel({template: this.templateData},this.fb);
      //this.knowledgeForm = this.knowledge.fillTemplate();
      this.knowledgeForm = this.knowledge.getFormGroup();
      this.addAssociation("ownedBy", {"id": this.userKey})
    }
  }

  private getReferenceData() {
    this.dataService.getReferenceData(["all"])
                     .subscribe(
                       data => this.referenceData = data,
                       error =>  this.errorMessage = <any>error);
  }

  private setKnowledgeForm() {
      this.dataService.getOne([this.selectedItem])
                       .subscribe(result => {
                         this.knowledge = new KnowledgeModel(result, this.fb);
                         this.knowledgeForm = this.knowledge.getFormGroup();
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
                       },error =>  this.errorMessage = <any>error);
  }

  propertyTapped(event, item) {
      /*this.navCtrl.push(HubDetailsPage, {
          item: item
      });*/
  }

  takePicture(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.knowledgeForm.controls["data"]["controls"].image.type = 'data:image/png;base64';
      this.knowledgeForm.controls["data"]["controls"].image.value = imageData;
    }, (err) => {
      // Handle error
    });
  }

  geoLocate(){

    let options = {
      enableHighAccuracy: true
    };

    if (this.platform.is('cordova')) {
      this.locac.canRequest ().then ( ( res: boolean ) => {
        if ( res ) {
          this.locac.request ( this.locac.REQUEST_PRIORITY_HIGH_ACCURACY ).then ( () => {
            this.geolocation.getCurrentPosition ( options ).then ( ( position: Geoposition ) => {
              this.updateGeoLocation ( position );
            } ).catch ( ( error ) => {
              console.error ( "Accuracy request failed: error code=" + error.code + "; error message=" + error.message );

              if ( error.code !== this.locac.ERROR_USER_DISAGREED ) {
                let prompt = this.alertCtrl.create ( {
                  title:   'Falha ao buscar a localização',
                  message: "Gostaria de ir para a página de configurações?",
                  buttons: [
                    {
                      text:    'Voltar',
                      handler: data => {
                        console.log ( 'Cancel clicked' );
                      }
                    },
                    {
                      text:    'Configurar',
                      handler: data => {
                        console.log ( 'go clicked' );
                        this.diagnostic.switchToLocationSettings ();
                      }
                    }
                  ]
                } );

                prompt.present ();
              }

            } );
          }, ( error ) => {
            console.log ( 'Error getting location', error );
            let alert = this.alertCtrl.create ( {
              title:    'Falha na Geolocalização!',
              subTitle: error,
              buttons:  [ 'OK' ]
            } );
            alert.present ();
          } )
        }
      } )
    }else{
      this.geolocation.getCurrentPosition ( options )
        .then ((position: Geoposition ) => {
            this.updateGeoLocation ( position );
          }).catch (( error ) => {
            console.error ( "Accuracy request failed: error code=" + error.code + "; error message=" + error.message );
          });
    }

  }

  updateGeoLocation(pos){
    this.knowledgeForm.controls["location"]["controls"]["coordinates"]["controls"] = pos.coords;

    if (this.platform.is('cordova')) {
      this.geocoder.reverseGeocode ( pos.coords.latitude, pos.coords.longitude ).then ( ( res: NativeGeocoderReverseResult ) => {
        this.knowledgeForm.controls[ 'location' ][ "controls" ].text.setValue ( res.countryName );
        let toaster = this.toaster.create ( {
          message:  "Endereço atualizado",
          duration: 2000
        } );
        toaster.present ();
      } );
    }else{
      this.knowledgeForm.controls[ 'location' ][ "controls" ].text.setValue ("");
    };
  }

  removeItem(type: string, arrayIndex: number){
    const dataControl = <FormArray>this.knowledgeForm.controls['data'];
    const control = <FormArray>dataControl.controls[type];
    //this.listConfigurations.removeAt(arrayIndex);
    control.removeAt(arrayIndex);
  }

  addItem(type: string){
    var newAttribute = new AttributeModel(null,this.fb);
    const dataControl = <FormArray>this.knowledgeForm.controls['data'];
    const control = <FormArray>dataControl.controls[type];
    control.push(newAttribute.getFormGroup());
    this.listConfigurations.push(true);
  }

  removeAssociation(type: string, arrayIndex: number){
    const relControl = <FormArray>this.knowledgeForm.controls['relations'];
    const control = <FormArray>relControl.controls[type];
    control.removeAt(arrayIndex);
  }

  addAssociation(type: string, input){
    var newRelation = new RelationModel(input,this.fb);
    const relControl = <FormArray>this.knowledgeForm.controls['relations'];
    const control = <FormArray>relControl.controls[type];
    control.push(newRelation.getFormGroup());
  }

  openModal(type, ref) {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
    modal.onWillDismiss((data: any) => {
      if (data) {
        console.log('MODAL DATA', data);
        if (type==='add') this.knowledge[ref].push(data.item);
        //else this.values[ref + data.item.name] = data.item;
      }
    });
  }


  onSubmit() {
      console.log(this.knowledgeForm.value, this.knowledgeForm.valid);

      let loader = this.loadingCtrl.create({
        content: "Salvando..."
      });
      loader.present();

      this.dataService.createKnowledge(this.knowledgeForm.value)
                      .subscribe(
                        data => {
                          console.log ( data );
                          loader.dismissAll();
                          this.navCtrl.pop();
                        },
                            error =>  this.errorMessage = <any>error
                        );
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value;
  }

  /////////////////////////////

}
