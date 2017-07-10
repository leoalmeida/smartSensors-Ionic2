import {Injectable} from '@angular/core';

import {Http, URLSearchParams, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

import {
  AssociationModel, AttributeModel, EquipmentModel, KnowledgeInterface, MessageModel,
  RelationModel
} from '../models/interfaces';

@Injectable()
export class DataService {
  //private dbUrl: string = 'http://200.18.98.244:3001/';
  //private httpUrl: string = 'http://191.189.96.74:3001/';
  //private mqttUrl: string = 'mqtt://192.168.0.6:1883/';
  //private dbUrl: string = 'http://localhost:3001/';
  //private wsUrl: string = 'ws://191.189.96.74:3005/';
  // Publishes new info to Observers
  //private hostSubject: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private http:Http){}


  toggleEquipmentStatus(body: any, status: boolean): Observable<any> {
    //let transactionObj = new KnowledgeModel(newObject);
    //let url = "api/action/equipment/connect";
    return this.http.post("api/action/equipment/connect", body)

          .map(response => response.json())

  };

  evaluateTopic(body: any): Observable<any> {
    //let transactionObj = new KnowledgeModel(newObject);
    //let url = "api/action/topic/dynamic";
    return this.http.post("api/action/topic/dynamic", body)

      .map(response => response.json())

  };

  getEquipmentSpots(options: any): Observable<KnowledgeInterface<EquipmentModel, AssociationModel>[]> {
    let parameters = ["loc", options.coordinates[0], options.coordinates[1], options.radius];
    if (options.type) parameters.push(options.type);
    if (options.category) parameters.push(options.category);
    //parameters.push("ownedBy", this.userKey);

    let url = "api/knowledge/" + parameters.join("/");
    return this.http.get(url)
      .map(response => response.json() as KnowledgeInterface<EquipmentModel, AssociationModel>[]);
  };

  getReferenceData(resource: Array<string>): Observable<KnowledgeInterface<EquipmentModel, AssociationModel>[]> {
    return this.http.get("api/reference/" + resource.join("/"))
      .map(response => response.json() as any);
      //.map(this.processData)
      //
  }

  getMessengerData(resource: Array<string>, query: any): Observable<KnowledgeInterface<MessageModel, AssociationModel>[]> {
    let url = "api/messenger/" + resource.join("/");
    if (query!= null) {
      url += '?' + query.join("&");
    }
    return this.http.get(url)
      .map(response => response.json() as KnowledgeInterface<MessageModel, AssociationModel>[]);
    //.map(this.processData)
    //
  }

  publishMessage(newObject: any): Observable<KnowledgeInterface<MessageModel, AssociationModel>> {
    return this.http.post("api/messenger/publish", newObject)
      .map(response => response.json())
  }

  getData<T>(resource: Array<string>, query: Array<any>): Observable<KnowledgeInterface<T, AssociationModel>[]> {
    let url = "api/knowledge/" + resource.join("/");
    if (query!= null) {
      url += '?' + query.join("=");
    }
    return this.http.get(url)
      .map(response => response.json() as KnowledgeInterface<T, AssociationModel>[]);
      //.map(this.processData)
      //
  }

  getOne<T>(resource: Array<string>): Observable<KnowledgeInterface<T, AssociationModel>> {
    return this.http.get("api/knowledge/" + resource.join("/"))
      .map(response => response.json() as KnowledgeInterface<T, AssociationModel>)

  }

  getStaticData(resource: Array<string>, requestedCols: string): Promise<any> {
    const url = "api/knowledge/" + resource.join("/") + '?columns=' + requestedCols;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleStaticError);
  }

  createKnowledge<T>(newObject: any): Observable<KnowledgeInterface<T, AssociationModel>> {
    //let transactionObj = new KnowledgeModel(newObject);
    //console.log(transactionObj);
    return this.http.put("api/knowledge", newObject)
          .map(response => response.json() as KnowledgeInterface<T, AssociationModel>)



  }

  updateKnowledge<T>(resource: string, newData: {}): Observable<KnowledgeInterface<T, AssociationModel>> {
    //let transactionObj = new KnowledgeModel(changes);
    let url = "api/knowledge/" + resource;
    return this.http.post(url, newData)
          .map(response => response.json() as KnowledgeInterface<T, AssociationModel>)

  }

  updateAttribute(documentId: string, newValues: any): any {
    let url = "api/knowledge/" + documentId;
    return this.http.post(url, newValues)
          .map(response => response.json())

          //.map(this.extractData)
          //
  }

  removeKnowledge<T>(resource: string): Observable<any> {
    return this.http.delete("api/knowledge/" + resource)
      .map(response => response.json())

  }

  removeAttribute(documentId: string, attribute: string): any {
    let url = "api/knowledge/" + documentId + "/" + attribute;
    return this.http.delete(url)
        .map(response => response.json())

  }

  addAttrInfo(documentId: string, attrName: string, body: AttributeModel): any {
    let url = "api/knowledge/" + documentId + "/attr/" + attrName;
    return this.http.post(url, body)
      .map(response => response.json())

  }

  removeAttrInfo(documentId: string, attrName: string): any {
    let url = "api/knowledge/" + documentId + "/attr/" + attrName;
    return this.http.delete(url)
      .map(response => response.json())

  }

  addAssociation(documentId: string, associationType: string, body: RelationModel): any {
    let url = "api/knowledge/" + documentId + "/relation/" + associationType;
    return this.http.post(url, body)
      .map(response => response.json())

  }

  removeAssociation(documentId: string, associationType: string, relid: string): any {
    let url = "api/knowledge/" + documentId + "/" + associationType + "/" + relid;
    return this.http.delete(url)
      .map(response => response.json())

  }

  private handleStaticError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
