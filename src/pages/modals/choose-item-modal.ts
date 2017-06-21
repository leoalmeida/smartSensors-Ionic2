import { Component, ViewChild} from '@angular/core';

import { AlertController, NavParams, ViewController, Slides, ToastController } from 'ionic-angular';
import { DataService } from '../../providers/apiData.service';
import { ReferenceService } from '../../providers/reference.service';
import { KnowledgeInterface, EquipmentModel, AssociationModel, AttributeModel, RelationModel } from '../../models/interfaces';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'choose-item-modal.html'
})
export class ChooseItemModal {
  @ViewChild(Slides) slides: Slides;

  item: AttributeModel;
  index: string;
  ref: string;
  listTemplates: Array<any>;
  listReferences: any;

  errorMessage: string;
  userKey: string;
  itemType: string;
  listType: string;
  itemSubType: string;

  pageTitle: string;
  slideList: Array<any> = [];

  selectedItem: any;
  selectedType: string = "";
  selectedName: string = "";
  firstSlide: number;

  selectBoardOpen: boolean;
  connectedBoard: RelationModel;
  boardList: KnowledgeInterface<EquipmentModel, AssociationModel>[];

  constructor(
    private navParams: NavParams,
    private dataService:DataService,
    private geolocation: Geolocation,
    private geocoder: NativeGeocoder,
    private toaster: ToastController,
    private locac: LocationAccuracy,
    private camera: Camera,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private refService:ReferenceService
  ) {
    this.firstSlide = 0;
    this.userKey = this.navParams.get('key');
    this.pageTitle = this.navParams.get('title');
    this.listType = this.navParams.get('listType');
    this.itemType = this.navParams.get('itemType');
    if (this.itemType == "sensor" || this.itemType == "actuator"){
      this.getBoardList();
    }
    this.getReferenceData();
  }

  ionSlideWillChange() {
    // Initialize the flag
    //this.slides.lockSwipes(true);
    if ( this.slideList.length - this.slides.getActiveIndex() >= 2 )
      this.slides.lockSwipeToNext(false);
    else this.slides.lockSwipeToNext(true);
    if ( this.slides.getActiveIndex() <= 2 )
      this.slides.lockSwipeToPrev(true);
    else  this.slides.lockSwipeToPrev(false);
  }

  itemSelected(itemIndex: number, slideIndex: number) {
    //if (lastSlide) this.doSave(this.listTemplates[itemIndex], this.selectedType);
    this.selectedItem = this.slideList[slideIndex][itemIndex];
    if (this.selectedItem.options.length){
      this.pageTitle = "Novo " + this.selectedItem.name;
      this.selectedType = this.selectedItem.name;
      if (!this.boardList && (this.selectedType == "sensor" || this.selectedType == "actuator")){
        this.getBoardList();
      }
      this.slideList.push("");
      this.slideList[slideIndex+1] = this.selectedItem.options;
      this.slides.lockSwipeToNext(false);
      this.slides.slideTo(slideIndex+1, 500, true);
      this.firstSlide++;
      //this.slides.slideNext(500, true);
    }else if (this.selectedItem.properties.length){
      if (this.selectedType == "sensor" || this.selectedType == "actuator"){
        this.selectConnected(slideIndex);
      }else{
        this.fillAttributes(slideIndex);
      }
    }else{
      this.doSave();
    }
  }

  private fillAttributes(slideIndex){
    this.slideList[slideIndex+1] = this.selectedItem.info[0];
    for (let attr of this.selectedItem.properties)
      if (!attr.hidden)
        this.slideList.push(attr);

    this.slides.lockSwipeToNext(false);
    //this.slides.slideTo(slideIndex+1, 500, true);
    this.slides.slideTo(slideIndex+1, 500, true);
  }

  private selectConnected(slideIndex) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione o hub');

    let i = 0;
    for (let board of this.boardList)
      alert.addInput({
        type: 'radio',
        label: board.data.name,
        value: board._id,
        checked: (i++)?false:true
      });

    alert.addInput({
      type: 'radio',
      label: "Criar Novo",
      value: "new"
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Continuar',
      handler: data => {
        if (data == "new")
          this.restart("board");
        else{
          console.log('Radio data:', data);
          this.selectBoardOpen = false;
          this.connectedBoard = {
            id: data
          };
          this.fillAttributes(slideIndex);
        }
      }
    });
    alert.present().then(() => {
      this.selectBoardOpen = true;
    });
  }

  private getBoardList(){
    this.dataService.getData<EquipmentModel>(["board" , "ownedBy", this.userKey], null)
      .subscribe(
        (data: KnowledgeInterface<EquipmentModel, AssociationModel>[]) => this.boardList = data,
        error =>  this.errorMessage = <any>error);
  }

  goBack(){
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev(500, true);
  }
  goNext(){
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext(500, true);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);

    if (this.slides.getActiveIndex()<2) return;

    if(this.slides.getActiveIndex()>= 2) {
      this.pageTitle = this.slideList[this.slides.getActiveIndex()].display;
    }
  }

  takePicture(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.slideList[this.slides.getActiveIndex()].image.type = 'data:image/png;base64';
      this.slideList[this.slides.getActiveIndex()].image.value = imageData;
    }, (err) => {
      // Handle error
    });
  }

  geoLocate(slideIndex: number){

    let options = {
      enableHighAccuracy: true
    };

    this.locac.canRequest().then((res: boolean) => {
      if (res) {
        this.locac.request(this.locac.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
          this.geolocation.getCurrentPosition(options).then((position: Geoposition) => {
            this.updateGeoLocation(position, slideIndex);
          }).catch((error) => {
            console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);
            let alert = this.alertCtrl.create({
              title: "Falha ao buscar a localização",
              subTitle: "Não foi possível buscar sua localização!",
              buttons: ['OK']
            });
            alert.present();

          });
        }, (error) => {
          console.log('Error getting location', error);
          let alert = this.alertCtrl.create({
            title: "Falha ao buscar a localização",
            subTitle: "Não foi possível buscar sua localização!",
            buttons: ['OK']
          });
          alert.present();
        })
      }
    })

  }

  updateGeoLocation(pos, slideIndex){
    slideIndex.location.coordinates.value = pos.coords;
    this.geocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude).then((res: NativeGeocoderReverseResult) => {
      slideIndex.location.text.value = res.countryName;
      let toaster = this.toaster.create({
        message: "Endereço atualizado",
        duration: 2000
      });
      toaster.present();
    })
  }

  public rangeChange(valA: number, valB: number)
  {
    return {below: valA, top: valB};
    //this.myForm.controls['formRange'].updateValue(this.val);
  }

  private findItem(element, index, array) {
    if ( element.name === this )
      return true;
    else
      return false;
  }

  private getReferenceData() {
    this.refService.getEquipmentTypes()
        .subscribe(res => {
          this.listReferences = res[[this.listType,"Types"].join("")];
          if (this.itemType) {
            this.selectedType = this.itemType;
            this.slideList.push(this.listReferences.find(this.findItem, this.itemType).options);
          }else this.slideList.push(this.listReferences);
          this.firstSlide++;
          this.slideList.push("");
        }, err => {
          console.log(err);
        });
    /*this.dataService.getReferenceData([[this.listType,"Types"].join(""), this.itemType])
                     .subscribe(
                       data => {
                         this.listReferences = data[[this.listType,"Types"].join("")];
                         if (this.itemType) this.slideList.push(this.listReferences[this.itemType]);
                         else this.slideList.push(this.listReferences);
                         this.slideList.push("");
                       },
                       error =>  this.errorMessage = <any>error);*/
  }

  restart(type){
    this.viewCtrl.dismiss({
      type: type
    })
  }

  doSave(){
    this.selectedItem.type = this.selectedType;
    this.viewCtrl.dismiss({
      itemTemplate: this.selectedItem,
      connectedBoard : this.connectedBoard
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

class ChooseItemPage {

}
