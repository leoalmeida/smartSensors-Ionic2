import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RelationModel } from "./relation.model"
export class AssociationModel {
  public abstraction: boolean;
  public parent: string;
  public ownedBy: Array<RelationModel> = [];
  public connectedTo: Array<RelationModel> = [];
  public subscriberAt: Array<RelationModel> = [];
  public likedTo: Array<RelationModel> = [];
  public commentedAt: Array<RelationModel> = [];
  public subscribedBy: Array<RelationModel> = [];

  private formGroup: FormGroup;
  private formOwnedByArray: FormArray;
  private formConnectArray: FormArray;
  private formSubscriberAtArray: FormArray;
  private formLikedToArray: FormArray;
  private formCommentedAtArray: FormArray;
  private formSubscribedByArray: FormArray;

  private fb: FormBuilder;

  constructor(input?: any, fb?: FormBuilder){
    this.fb = fb;

    if (fb) {
      this.formOwnedByArray  = fb.array([]);
      this.formConnectArray  = fb.array([]);
      this.formSubscriberAtArray  = fb.array([]);
      this.formLikedToArray  = fb.array([]);
      this.formCommentedAtArray  = fb.array([]);
      this.formSubscribedByArray  = fb.array([]);
    }

    if (input.template) this.fillTemplate(input, fb);
    else {
      if ( ! input ) input = {};

      this.abstraction = input[ "abstraction" ] || false;
      this.parent      = input[ "parent" ] || "";

      if ( input[ "ownedBy" ] ) {
        for ( let item of input[ "ownedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.ownedBy.push ( relation );
          if ( fb ) this.formOwnedByArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "connectedTo" ] ) {
        for ( let item of input[ "connectedTo" ] ) {
          let relation = new RelationModel ( item, fb );
          this.connectedTo.push ( relation );
          if ( fb ) this.formConnectArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "subscriberAt" ] ) {
        for ( let item of input[ "subscriberAt" ] ) {
          let relation = new RelationModel ( item, fb );
          this.subscriberAt.push ( relation );
          if ( fb ) this.formSubscriberAtArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "likedTo" ] ) {
        for ( let item of input[ "likedTo" ] ) {
          let relation = new RelationModel ( item, fb );
          this.likedTo.push ( relation );
          if ( fb ) this.formLikedToArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "commentedAt" ] ) {
        for ( let item of input[ "commentedAt" ] ) {
          let relation = new RelationModel ( item, fb );
          this.commentedAt.push ( relation );
          if ( fb ) this.formCommentedAtArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "subscribedBy" ] ) {
        for ( let item of input[ "subscribedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.subscribedBy.push ( relation );
          if ( fb ) this.formSubscribedByArray.push ( relation.getFormGroup () );
        }
      }
    }

    if (fb) this.formGroup = fb.group({
        abstraction: [this.abstraction],
        parent: [this.parent],
        ownedBy : this.formOwnedByArray,
        connectedTo: this.formConnectArray,
        subscriberAt: this.formSubscriberAtArray,
        likedTo: this.formLikedToArray,
        commentedAt: this.formCommentedAtArray,
        subscribedBy: this.formSubscribedByArray
      })
  }

  public fillTemplate(input, fb){

    this.parent = "";
    this.abstraction = false;

    if (input.template.relations)
      for (let item of input.template.relations){
        if (item.name === "parent")
          this.parent = item.value;
        else if (item.name === "abstraction")
          this.abstraction = item.value;
        else if (item.values){
          for (let rel of item.values) {
            let relation = new RelationModel ( rel.attributes, fb);
            this[ rel.name ].push ( relation );
            if (rel.name === "ownedBy" ) this.formOwnedByArray.push ( relation.getFormGroup () );
            if (rel.name === "connectedTo" ) this.formConnectArray.push ( relation.getFormGroup () );
            if (rel.name === "subscriberAt" ) this.formSubscriberAtArray.push ( relation.getFormGroup () );
            if (rel.name === "likedTo" ) this.formLikedToArray.push ( relation.getFormGroup () );
            if (rel.name === "commentedAt" ) this.formCommentedAtArray.push ( relation.getFormGroup () );
            if (rel.name === "subscribedBy" ) this.formSubscribedByArray.push ( relation.getFormGroup () );
          }
        }
      };
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
