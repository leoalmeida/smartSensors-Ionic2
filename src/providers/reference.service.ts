import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';

import {Http, Headers, RequestOptions} from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ReferenceService {

  private hostSubject: BehaviorSubject<string> = new BehaviorSubject("");
  categoriesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  equipmentTypesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  refdataSubject: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private platform: Platform,
              public user: User,
              private http:Http,
              private nativeStorage: NativeStorage){

    this.getHost();
    this.getCategories();
    this.getEquipmentTypes();
    this.getRefData();
  }

  getHost(){
    this.platform.ready().then((readySource) => {
      this.nativeStorage.getItem('smartSensors.host')
        .then(data => {
            if (data.host)
              this.hostSubject.next(data.host);
          },
          error => {
            console.error(error);
            this.hostSubject.next('http://localhost:3001/');
          });
    });
  }

  getCategories(){
    this.hostSubject.subscribe(host => {
      if (!host)   this.categoriesSubject.next({});
      else
        this.http.get(host + "api/reference/categories", this.generateHeader(true))
          .subscribe(data => {
            this.categoriesSubject.next(data.json().values);
          });
    });
  }

  getEquipmentTypes(){
    this.hostSubject.subscribe(host => {
      if (!host)   this.equipmentTypesSubject.next({});
      else
        this.http.get(host + "api/reference/types", this.generateHeader(true))
          .subscribe(data => {
            this.equipmentTypesSubject.next(data.json().values);
          });
    });
  }

  getRefData(){
    this.hostSubject.subscribe(host => {
      if (!host)   this.refdataSubject.next({});
      else
        this.http.get(host + "api/reference/refdata", this.generateHeader(true))
          .subscribe(data => {
            this.refdataSubject.next(data.json().values);
          });
    });
  }

  private generateHeader(hasbody: boolean): any{
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(this.user.id + ":" + this.user.details.password));
      if (hasbody){
        headers.append( "Accept", "application/json")
        headers.append("Content-Type", "application/json");
      };
      return new RequestOptions({ headers: headers });
    }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
