import { ConnectionModel } from "./connection.model";
import { AssociationModel } from "./association.model";
import { EquipmentModel } from "./equipment.model";
import { ProfileModel } from "./profile.model";
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressModel } from './address.model';

export class KnowledgeModel {
  _id?: string;
  root: string;
  access: string;
  type: string;
  category: string;
  version: string;
  data: any = "";
  connection: ConnectionModel;
  relations: AssociationModel;
  location: AddressModel;
  sync: number;

  private formGroup: FormGroup;

  constructor(input?: any, fb?:FormBuilder){
    if (input.template) this.fillTemplate(input, fb);
    else {
      if ( ! input ) input = {};
      this.type    = input[ "type" ] || "";
      this.category = input[ "category" ] || "";
      if (!input[ "_id" ]) this._id     = input[ "_id" ];
      this.root    = input[ "root" ] || "";
      this.access  = input[ "access" ] || "public";
      this.version = input[ "version" ] || "1.0";
      this.sync    = input[ "sync" ] || Date.now ();

      if ( this.type === "profile" ) this.data = new ProfileModel ( input, fb );
      else this.data = new EquipmentModel ( input, fb );

      this.relations = new AssociationModel ( input, fb );
      this.location = new AddressModel ( input, fb );
      this.connection   = new ConnectionModel ( input[ "connection" ], fb );
    }

    if (fb) this.formGroup = fb.group({
      type : [this.type],
      category : [this.category],
      access : [this.access],
      version : [this.version],
      root : [this.root],
      data: this.data.getFormGroup(),
      connection: this.connection.getFormGroup(),
      relations: this.relations.getFormGroup(),
      location: this.location.getFormGroup()
    });
  }

  public updateGeoLocation(position, text){
    this.location.updateLocation([position.coords.latitude, position.coords.longitude], text);
  }

  public removeItem(type: string, arrayIndex: number){
    if (this.data)
      console.log("");//this.data.removeAt(type, arrayIndex);
  }

  public pushItem(type: string){
    return "";//this.data.newItem(type, this.fb);
  }
  public getItem(type:string){
    console.log("");
  }

  public removeRelation(type: string, arrayIndex: number){
    this.relations.removeAt(type, arrayIndex);
  }

  public pushRelation(type: string, input){
    this.relations.push(type, input);
  }

  public getRelations(type:string){
    console.log(this.relations.getFormFromType(type));
    return this.relations.getFormFromType(type);
  }

  public fillTemplate(input, fb){

    this.root = input.template.root;
    this.type = input.template.type;
    this.category = input.template.category;
    this.access = "public";
    this.version = "1.0";
    this.sync = Date.now();

    this.data = new EquipmentModel(input, fb);

    this.relations = new AssociationModel ( input, fb );
    this.location = new AddressModel ( input, fb );

    this.connection   = new ConnectionModel ( input.template.connection, fb );

    //this.data.fillData(template);
    //this.relations.fillRelations(template.relations);

  }

  public getFormGroup(){
    return this.formGroup;
  }
}
