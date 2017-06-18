import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';

import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FollowersService {
  // Observables we're going to use
  private dismissObserver: any;
  public dismiss: any;
  data: any;

  constructor(private platform: Platform,
              private http:Http){
    // Your stuff
    // ...
    this.data = null;
    this.dismissObserver = null;
    this.dismiss = Observable.create(observer => {
        this.dismissObserver = observer;
    });
  }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get("assets/data/followers.json")
        .map(this.processData, this)
        .catch(this.handleError);
    }
  }

  processData(data: any) {
    this.data = data;
    return this.data;
  }

  findAll() {
    return this.load().map(res => res.json());
  }

  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
