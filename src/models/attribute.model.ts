import {FormBuilder, FormGroup } from '@angular/forms';
export class AttributeModel {
  public name: string;
  public type: string;
  public value:  any;

  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    if (!input) input = {};

    this.name = input["name"] || "";
    this.type = input["type"] || "";
    this.value = input["value"] || "";


    if (fb) this.formGroup = fb.group({
        name: [this.name],
        type: [this.type],
        value : [this.value]
    });
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
