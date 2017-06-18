import {FormBuilder, FormGroup } from '@angular/forms';
export class RelationModel {
  public id: string;
  public sync: number;
  public access: string;
  public publish: boolean;
  public view: boolean;

  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    if (!input) input = {};

    this.id = input["id"] || "";
    this.sync = input["sync"] || Date.now();
    this.access = input["access"] || "public";
    this.publish = input["publish"] || false;
    this.view = input["view"] || false;

    if (fb) this.formGroup = fb.group({
                  sync: [this.sync],
                  id: [this.id],
                  view : [this.view],
                  publish : [this.publish],
                  access : [this.access]
              });
  }

  public getFormGroup() {
    return this.formGroup;
  }

}
