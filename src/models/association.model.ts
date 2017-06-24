import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RelationModel } from "./relation.model"
export class AssociationModel {
  public abstraction: boolean;
  public parent: Array<RelationModel> = [];
  public ownedBy: Array<RelationModel> = [];
  public connectedTo: Array<RelationModel> = [];
  public subscriberAt: Array<RelationModel> = [];
  public likedTo: Array<RelationModel> = [];
  public likedBy: Array<RelationModel> = [];
  public commentedAt: Array<RelationModel> = [];
  public commentedBy: Array<RelationModel> = [];
  public subscribedBy: Array<RelationModel> = [];

  private formParentArray: FormArray;
  private formOwnedByArray: FormArray;
  private formConnectedToArray: FormArray;
  private formSubscriberAtArray: FormArray;
  private formLikedToArray: FormArray;
  private formLikedByArray: FormArray;
  private formCommentedAtArray: FormArray;
  private formCommentedByArray: FormArray;
  private formSubscribedByArray: FormArray;

  private fb: FormBuilder;
  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    this.fb = fb;

    if (fb) {
      this.formParentArray  = fb.array([]);
      this.formOwnedByArray  = fb.array([]);
      this.formConnectedToArray  = fb.array([]);
      this.formSubscriberAtArray  = fb.array([]);
      this.formLikedToArray  = fb.array([]);
      this.formLikedByArray  = fb.array([]);
      this.formCommentedAtArray  = fb.array([]);
      this.formCommentedByArray  = fb.array([]);
      this.formSubscribedByArray  = fb.array([]);
    }

    if (input.template) this.fillTemplate(input, fb);
    else {
      if ( ! input ) input = {};

      this.abstraction = input[ "abstraction" ] || false;

      if ( input[ "parent" ] ) {
        for ( let item of input[ "parent" ] ) {
          let relation = new RelationModel ( item, fb );
          this.parent.push ( relation );
          if ( fb ) this.formParentArray.push ( relation.getFormGroup () );
        }
      }

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
          if ( fb ) this.formConnectedToArray.push ( relation.getFormGroup () );
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
      if ( input[ "likedBy" ] ) {
        for ( let item of input[ "likedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.likedBy.push ( relation );
          if ( fb ) this.formLikedByArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "commentedAt" ] ) {
        for ( let item of input[ "commentedAt" ] ) {
          let relation = new RelationModel ( item, fb );
          this.commentedAt.push ( relation );
          if ( fb ) this.formCommentedAtArray.push ( relation.getFormGroup () );
        }
      }

      if ( input[ "commentedBy" ] ) {
        for ( let item of input[ "commentedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.commentedBy.push ( relation );
          if ( fb ) this.formCommentedByArray.push ( relation.getFormGroup () );
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
        parent: this.formParentArray,
        ownedBy : this.formOwnedByArray,
        connectedTo: this.formConnectedToArray,
        subscriberAt: this.formSubscriberAtArray,
        likedTo: this.formLikedToArray,
        likedBy: this.formLikedByArray,
        commentedAt: this.formCommentedAtArray,
        commentedBy: this.formCommentedByArray,
        subscribedBy: this.formSubscribedByArray
      })
  }

  public push(type, input){
    var newRelation = new RelationModel(input,this.fb);
    if (this[type])
      this[type].push(newRelation.getFormGroup());
  }

  public removeAt(type, removedIndex){
    if (this[type])
      this[type].removeAt(removedIndex);
  }

  public getFormFromType(type){
    return this[type];
  }

  public fillTemplate(input, fb){
    this.abstraction = false;

    if (input.template.relations)
      for (let item of input.template.relations){
        if (item.name === "abstraction")
          this.abstraction = item.value;
        else if (item.values){
          for (let rel of item.values) {
            let relation = new RelationModel ( rel.attributes, fb);
            this[ rel.name ].push ( relation );
            if (rel.name === "parent" ) this.formParentArray.push ( relation.getFormGroup () );
            if (rel.name === "ownedBy" ) this.formOwnedByArray.push ( relation.getFormGroup () );
            if (rel.name === "connectedTo" ) this.formConnectedToArray.push ( relation.getFormGroup () );
            if (rel.name === "subscriberAt" ) this.formSubscriberAtArray.push ( relation.getFormGroup () );
            if (rel.name === "likedTo" ) this.formLikedToArray.push ( relation.getFormGroup () );
            if (rel.name === "likedBy" ) this.formLikedByArray.push ( relation.getFormGroup () );
            if (rel.name === "commentedAt" ) this.formCommentedByArray.push ( relation.getFormGroup () );
            if (rel.name === "commentedBy" ) this.formCommentedAtArray.push ( relation.getFormGroup () );
            if (rel.name === "subscribedBy" ) this.formSubscribedByArray.push ( relation.getFormGroup () );
          }
        }
      };
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
