import {FormBuilder, FormGroup } from '@angular/forms';
export class ConnectionModel {
  public host: string;
  public port: number;
  public baudrate: number;

  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    if (!input) input = {};
    this.host = input["host"] || "192.168.0.2";
    this.port = input["port"] || 3001;
    this.baudrate = input["baudrate"] || 57600;

    if (fb) this.formGroup = fb.group({
      host: [this.host],
      port: [this.port],
      baudrate: [this.baudrate]
    });
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
