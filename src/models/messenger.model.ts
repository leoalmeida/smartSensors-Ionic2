import {FormBuilder, FormGroup } from '@angular/forms';
export class MessengerModel {
  public message: string;
  public enabled: string;
  public profile:  any;

  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    if (!input) input = {};

    this.message = input["message"] || "";
    this.enabled = input["enabled"] || "";
    this.profile = input["profile"] || "";


    if (fb) this.formGroup = fb.group({
        message: [this.message],
        enabled: [this.enabled],
        profile : [this.profile]
    });
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
