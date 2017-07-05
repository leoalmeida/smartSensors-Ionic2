import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, ModalController, NavController, NavParams, LoadingController, ToastController   } from 'ionic-angular';
import {FormBuilder, FormGroup } from '@angular/forms';
// Observable operators
import 'rxjs/add/operator/catch';

import { DataService } from '../../providers/apiData.service';
import { ReferenceService } from '../../providers/reference.service';
import { User } from '@ionic/cloud-angular';
import { ModalContentPage }  from '../modals/attribute-item';

import { KnowledgeModel } from '../../models/knowledge.model';
import { RelationModel } from '../../models/relation.model';
//import { AttributeModel } from '../../models/attribute.model';

import { EquipmentModel, KnowledgeInterface, AssociationModel } from '../../models/interfaces';


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
  connectedBoard: any = {};

  selectComponentOpen: boolean;
  connectedParent: any = {};
  componentList: KnowledgeInterface<EquipmentModel, AssociationModel>[] = [];
  complexCompList: KnowledgeInterface<EquipmentModel, AssociationModel>[] = [];


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
              private refService:ReferenceService,
              public loadingCtrl:LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.templateData = this.navParams.get('template');
    if (this.templateData) {
      this.templateType = this.templateData.type;
      this.connectedBoard = this.navParams.get('connectedBoard');
    }else this.templateType = this.navParams.get('type');
    if (this.templateData) this.pageTitle = this.templateData.name;
    this.selectedItem = this.navParams.get('item');
    this.userKey = this.navParams.get('key');
    this.getComplexList();
    this.getEquipmentList();
  }

  ngOnInit() {
    this.getReferenceData();
    if(this.selectedItem) this.setKnowledgeForm();
    else {
      this.templateData.root = this.userKey;
      this.knowledge = new KnowledgeModel({template: this.templateData},this.fb);
      this.knowledge.pushRelation("formOwnedByArray", {"id": this.userKey});
      this.knowledge.pushRelation("formConnectedToArray", this.connectedBoard);

      //this.knowledgeForm = this.knowledge.fillTemplate();
      this.knowledgeForm = this.knowledge.getFormGroup();
    }
  }

  private getReferenceData() {
    this.refService.equipmentTypesSubject
         .subscribe(
           data => this.referenceData = data,
           error =>  this.errorMessage = <any>error);
  }

  private getComplexList(){
    this.dataService.getData<EquipmentModel>(["complex" , "ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.complexCompList = data,
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
      /*this.navCtrl.push(ComplexObjectDetailsPage, {
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
                this.geocoder.reverseGeocode ( position.coords.latitude, position.coords.longitude )
                              .then (( res: NativeGeocoderReverseResult ) => {
                                this.knowledge.updateGeoLocation ( position, res.countryName );
                                console.log(res);
                              });
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
            this.knowledge.updateGeoLocation ( position, "" );
          }).catch (( error ) => {
            console.error ( "Accuracy request failed: error code=" + error.code + "; error message=" + error.message );
          });
    }

  }

  private selectComponent(ref) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione componente');

    let i = 0;
    for (let comp of this.componentList)
      alert.addInput({
        type: 'radio',
        label: comp.data.name,
        value: comp._id,
        checked: (i++)?false:true
      });
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Continuar',
      handler: data => {
        if (data)
          console.log('Radio data:', data);
          this.selectComponentOpen = false;
          let newRelation = new RelationModel({ id: data },this.fb);
          ref.push(newRelation.getFormGroup());
        }
    });
    alert.present().then(() => {
      this.selectComponentOpen = true;
    });
  }

  private getEquipmentList(){
    this.dataService.getData<EquipmentModel>(["ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.componentList = data,
        error =>  this.errorMessage = <any>error);
  }

  selectParent(ref) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione o Componente');

    let i = 0;
    for (let object of this.componentList)
      alert.addInput({
        type: 'radio',
        label: object.data.name,
        value: object._id,
        checked: (i++)?false:true
      });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Continuar',
      handler: data => {
        if (data)
          console.log('Radio data:', data);
          this.selectComponentOpen = false;
          let newRelation = new RelationModel({ id: data },this.fb);
          ref = newRelation.getFormGroup();
        }
    });
    alert.present().then(() => {
      this.selectComponentOpen = true;
    });
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
                          let newRelation = new RelationModel({ id: data._id },this.fb);
                          if (this.knowledgeForm.value.relations.connectedTo){
                            for (let rel of this.knowledgeForm.value.relations.connectedTo)
                              this.dataService.addAssociation(rel.id, "connectedTo", newRelation)
                                      .subscribe((res) => {
                                        console.log("connectedTo inserido com sucesso")
                                      });
                          }

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
