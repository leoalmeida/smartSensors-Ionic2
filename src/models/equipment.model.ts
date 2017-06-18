import { ConnectionModel } from "./connection.model";
import { AttributeModel } from "./attribute.model";
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { DataInterface } from "./data.interface";

export class EquipmentModel implements DataInterface{
  connected: boolean;
  enabled: boolean;
  updatedValue: string;
  sync: number;
  unit: string;
  icon: string;
  image: string;
  label: string;
  description: string;
  name: string;
  connection: ConnectionModel;
  info: Array<AttributeModel> = [];
  configurations: Array<AttributeModel> = [];

  private formGroup: FormGroup;
  private formInfoArray: FormArray;
  private formConfigArray: FormArray;

  private fb: FormBuilder;

  constructor(input?: any, fb?: FormBuilder){
    this.fb = fb;

    if (fb) {
      this.formInfoArray    = fb.array([]);
      this.formConfigArray  = fb.array([]);
    }

    if (input.template) this.fillTemplate(input, fb);
    else {
      if ( ! input ) input = {};

      this.connected    = input[ "connected" ] || false;
      this.enabled      = input[ "enabled" ] || false;
      this.updatedValue = input[ "updatedValue" ] || "";
      this.sync         = input[ "sync" ] || Date.now ();
      this.unit         = input[ "unit" ] || "%";
      this.icon         = input[ "icon" ] || "assets/icons/motion.svg";
      this.image        = input[ "image" ] || "assets/images/profile_header0.png";
      this.label        = input[ "label" ] || "Teste";
      this.description  = input[ "description" ] || "Descricao Teste";
      this.name         = input[ "name" ] || "Teste EEEE";

      if (input["info"])
        for(let itemInfo of input["info"]) {
          let attr = new AttributeModel(itemInfo, fb);
          this.info.push(attr)
          if (fb) this.formInfoArray.push(attr.getFormGroup());
        };
      if (input["configurations"])
        for(let itemConf of input["configurations"]) {
          var attr = new AttributeModel(itemConf, fb);
          this.configurations.push(attr)
          if (fb) this.formConfigArray.push(attr.getFormGroup());
        };
    }

    this.connection   = new ConnectionModel ( input[ "connection" ], fb );

    if (fb) this.formGroup = fb.group({
        updatedValue: [this.updatedValue],
        connected: [this.connected],
        enabled: [this.enabled],
        name: [this.name],
        label: [this.label],
        description: [this.description],
        unit: [this.unit],
        image: [this.image],
        icon: [this.icon],
        sync: [this.sync],
        connection: this.connection.getFormGroup(),
        info: this.formInfoArray,
        configurations: this.formConfigArray,
      });
  }

  public fillTemplate(input, fb){

    this.connected    = false;
    this.enabled      = false;
    this.updatedValue = "";
    this.sync         = Date.now ();
    this.unit         = "%";
    this.icon         = "assets/icons/motion.svg";
    this.image        = "assets/images/profile_header0.png";
    this.label        = "Teste";
    this.description  = "Descricao Teste";

    if (input.template.info)
      for (let item of input.template.info)
          this[item.name] = item.value;


    if (input.template.properties)
      for(let item of input.template.properties){
          var attr = new AttributeModel(item, fb);
          this.configurations.push(attr);
          if (this.fb) this.formConfigArray.push(attr.getFormGroup());
      };
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
