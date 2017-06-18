import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {User} from '@ionic/cloud-angular';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReferenceService {
  private dismissObserver: any;
  public dismiss: any;
  categories: any;
  equipmentTypes: any;
  refdata:any;

  private dbUrl: string = 'http://191.189.96.74:3001/';

  constructor(private platform: Platform,
              public user: User,
              private http:Http){
    this.dismissObserver = null;
    this.dismiss = Observable.create(observer => {
      this.dismissObserver = observer;
    });
  }

  getCategories(){
    if (this.categories) {
      return Observable.of(this.categories);
    }else{
      this.categories = {};
      return this.http.get(this.dbUrl + "api/reference/categories", this.generateHeader(true))
        .map(data => {
          this.categories = data.json().values;
          return data.json().values;
        });
    }
  }

  getEquipmentTypes(){
    if (this.equipmentTypes) {
      return Observable.of(this.equipmentTypes);
    }else{
      this.equipmentTypes = {};
      return this.http.get(this.dbUrl + "api/reference/types", this.generateHeader(true))
        .map(data => {
          this.equipmentTypes = data.json().values;
          return data.json().values;
        });
    }
  }

  getRefData(){
    if (this.refdata) {
      return Observable.of(this.refdata);
    }else{
      this.refdata = {};
      return this.http.get(this.dbUrl + "api/reference/refdata", this.generateHeader(true))
        .map(data => {
          this.refdata = data.json().values;
          return data.json().values;
        });
    }
  }


  filterCategoryItem(searchTerm, property){
    if (this.categories) {
      if (!this.categories[property]) {
        this.categories[property] = [];
        return Observable.of(this.categories[property]);
      }
      return Observable.of(this.categories[property].filter((item) => {
          return ( item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }));
    } else {
      this.categories = {};
      this.categories[property] = [];
      return this.http.get(this.dbUrl + "api/reference/categories", this.generateHeader(true))
        .map(data => {
          this.categories = data.json().values;
          return data.json().values[property].filter((item) => {
              return ( item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          });
        })
        .catch(this.handleError);
    }
  }

  filterRefDataItem(searchTerm, property){
    if (this.refdata) {
      return Observable.of(this.refdata[property].filter((item) => {
        return ( item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }));
    }else{
      this.refdata = {};
      this.refdata[property] = [];
      return this.http.get(this.dbUrl + "api/reference/refdata", this.generateHeader(true))
        .map(data => {
          this.refdata = data.json().values;
          return data.json().values[property].filter((item) => {
            return ( item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
            item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
            item.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          })
        });

    }
  }

  load(type): any {
    if (this.categories) {
      return Observable.of(this.categories);
    } else {
      return this.http.get(this.dbUrl + "api/reference/"+type, this.generateHeader(true))
        .map(data => this.categories = data)
        .catch(this.handleError);
    }
  }

  getData(type) {
    return this.load(type)
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
