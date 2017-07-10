import {Injectable} from '@angular/core';
import {Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {ErrorNotifierService} from './error.notifier';
import {Observable} from 'rxjs/Rx';
import { Events } from 'ionic-angular';

import { Auth } from '@ionic/cloud-angular';

@Injectable()
export class CustomHttp extends Http {

  constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private errorService: ErrorNotifierService,
        public auth:Auth,
        public events: Events) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before the request...');
    this.events.publish('showLoader');
    if (this.auth.isAuthenticated()) {
      return super.request(url, options)
           .catch((err: any): any => {
             this.errorService.notifyError(err);
             return Observable.empty();
           })
           .retryWhen(error => error.delay(1000))
           .timeoutWith(10000, Observable.throw(new Error('delay exceeded')))
           .finally(() => {
             console.log('After the request...');
             this.events.publish('hideLoader');
           });
    }
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
     console.log('Before the request...');
     this.events.publish('showLoader');
     return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
     console.log('Before the request...');
     this.events.publish('showLoader');
     return this.intercept(super.post(url, body, options));
  }

  put(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before the request...');
    this.events.publish('showLoader');
    return this.intercept(super.put(url, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before the request...');
    this.events.publish('showLoader');
    return this.intercept(super.delete(url, options));
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    this.events.publish('showLoader');
    return observable
      .catch(
        (err) => {
          if (err.status === 400 || err.status === 422) {
            this.events.publish('hideLoader');
            return Observable.throw(err);
          } else if (err.status === 401) {
            this.events.publish('unAuthorizedRequest', err);
            return Observable.empty();
          } else {
            this.errorService.notifyError(err);
            return Observable.empty();
          }
        })
      .retryWhen(error => error.delay(1000))
      .timeoutWith(10000, Observable.throw(new Error('delay exceeded')))
      .do(
        () => {
          console.log('do1');
          return Observable.empty();
        },
        () => {
          console.log('do2');
          return Observable.empty();
        }
      )
      .finally(() => {
        console.log('After the request...');
        this.events.publish('hideLoader');
      });
  }
}
