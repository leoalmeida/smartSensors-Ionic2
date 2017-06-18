import { FormBuilder, FormGroup } from '@angular/forms';
import { DataInterface } from "./data.interface";

export class ProfileModel implements DataInterface{
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string;
  providerData: Array<any> = [];
  token: any;
  uid: string;
  updatedValue: string;
  name: string;

  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    if (!input) input = {};

    this.displayName = input["displayName"] || "";
    this.email   = input["email"] || "";
    this.emailVerified = input["emailVerified"] || false;
    this.isAnonymous = input["isAnonymous"] || false;
    this.photoURL = input["photoURL"] || "";
    this.providerData = input["providerData"] || [];
    this.token   = input["token"];
    this.uid     = input["uid"] || "";
    this.updatedValue = input["updatedValue"] || "";
    this.name    = input["name"] || "";

    if (fb) this.formGroup = fb.group({
              displayName: [this.displayName],
              email: [this.email],
              photoURL: [this.photoURL]
            })

  }

  public fillData(data){

  }

  public getFormGroup() {
    return this.formGroup;
  }
}
