import {Observable, Observer} from 'rxjs/Rx';

export class ErrorNotifierService {
  private errorObservable:Observable<any>;
  private errorObserver:Observer<any>;

  constructor() {
    this.errorObservable = Observable.create((observer:Observer<any>) => {
      this.errorObserver = observer;
    }).share();
  }

  notifyError(error:any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body["error"] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);

    this.errorObserver.next({code: error.status, msg: errMsg});
  }

  onError(callback:(err:any) => void) {
    this.errorObservable.subscribe(callback);
  }
}
