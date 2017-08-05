import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';

import {Http, Headers, RequestOptions} from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ReferenceService {

  commandTypesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  pinModesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  categoriesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  equipmentTypesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  refdataSubject: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http:Http){
    this.getCommandTypes();
    this.getPinModes();
    this.getCategories();
    this.getEquipmentTypes();
    this.getRefData();
  }

  getCommandTypes(){
        this.http.get("api/reference/commandTypes")
          .subscribe(data => {
            this.commandTypesSubject.next(data.json().values);
          });
  }

  getPinModes(){
        this.http.get("api/reference/pinModes")
          .subscribe(data => {
            this.pinModesSubject.next(data.json().values);
          });
  }

  getCategories(){
        this.http.get("api/reference/categories")
          .subscribe(data => {
            this.categoriesSubject.next(data.json().values);
          });
  }

  getEquipmentTypes(){
        this.http.get("api/reference/types")
          .subscribe(data => {
            this.equipmentTypesSubject.next(data.json().values);
          });
  }

  getRefData(){
        this.http.get("api/reference/refdata")
          .subscribe(data => {
            this.refdataSubject.next(data.json().values);
          });
  }

}
