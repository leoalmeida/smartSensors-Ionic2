import { Injectable, Inject, InjectionToken} from '@angular/core';
import { RequestOptions, RequestOptionsArgs, BaseRequestOptions, Headers} from '@angular/http';




@Injectable()
export class DefaultRequestOptions extends RequestOptions {
  constructor(private options: RequestOptionsArgs) {
  	  super(options);
  }

  merge(options?:RequestOptions):RequestOptions {
    let newRequestOptions = super.merge(options);
    if (newRequestOptions == null) newRequestOptions = new RequestOptions();
    if (!newRequestOptions.headers) newRequestOptions.headers = new Headers();


    return new DefaultRequestOptions({
      method: newRequestOptions.method,
      url: newRequestOptions.url,
      search: newRequestOptions.search,
      headers: newRequestOptions.headers,
      body: newRequestOptions.body,
      withCredentials: newRequestOptions.withCredentials,
      responseType: newRequestOptions.responseType
    });
  }
}
