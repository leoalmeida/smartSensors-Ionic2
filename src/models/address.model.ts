import {FormBuilder, FormGroup } from '@angular/forms';
export class AddressModel {
  public type : string = "Point";
  public coordinates : Array<number> = [];
  public text : string;
  public sync: number;

  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    if (!input) input = {};
    this.coordinates = input["coordinates"] || [-21.980912, -47.881260];
    this.text = input["text"] || "R. dos Bem-te-vis, 321";

    if (fb) this.formGroup = fb.group({
      text: [this.text],
      coordinates: [this.coordinates],
      type: [this.type]
    });
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
