import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RelationModel } from "./relation.model"
export class AssociationModel {
  public abstractions: Array<RelationModel> = [];
  public elements: Array<RelationModel> = [];
  public subscribedBy: Array<RelationModel> = [];
  public subscriberAt: Array<RelationModel> = [];
  public ownedBy: Array<RelationModel> = [];
  public presentedBy: Array<RelationModel> = [];
  public commentedBy: Array<RelationModel> = [];
  public commentedAt: Array<RelationModel> = [];
  public statedTo: Array<RelationModel> = [];
  public actedAt: Array<RelationModel> = [];
  public likedTo: Array<RelationModel> = [];
  public connectedTo: Array<RelationModel> = [];

  private formAbstractionsArray: FormArray;
  private formElementsArray: FormArray;
  private formSubscribedByArray: FormArray;
  private formSubscriberAtArray: FormArray;
  private formOwnedByArray: FormArray;
  private formPresentedByArray: FormArray;
  private formCommentedAtArray: FormArray;
  private formCommentedByArray: FormArray;
  private formStatedToArray: FormArray;
  private formActedAtArray: FormArray;
  private formLikedToArray: FormArray;
  private formConnectedToArray: FormArray;

  private fb: FormBuilder;
  private formGroup: FormGroup;

  constructor(input?: any, fb?: FormBuilder){
    this.fb = fb;

    if (fb) {
      this.formAbstractionsArray = fb.array([]);
      this.formElementsArray = fb.array([]);
      this.formSubscribedByArray = fb.array([]);
      this.formSubscriberAtArray = fb.array([]);
      this.formOwnedByArray = fb.array([]);
      this.formPresentedByArray = fb.array([]);
      this.formCommentedByArray = fb.array([]);
      this.formCommentedAtArray = fb.array([]);
      this.formStatedToArray = fb.array([]);
      this.formActedAtArray = fb.array([]);
      this.formLikedToArray = fb.array([]);
      this.formConnectedToArray = fb.array([]);
    }

    if (input.template) this.fillTemplate(input, fb);
    else {
      if ( ! input ) input = {};

      if (input["abstractions"]) {
        for ( let item of input[ "abstractions" ] ) {
          let relation = new RelationModel ( item, fb );
          this.abstractions.push ( relation );
          if ( fb ) this.formAbstractionsArray.push ( relation.getFormGroup () );
        }
      }
      if ( input["elements"] ) {
        for ( let item of input[ "elements" ] ) {
          let relation = new RelationModel ( item, fb );
          this.elements.push ( relation );
          if ( fb ) this.formElementsArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "subscribedBy" ] ) {
        for ( let item of input[ "subscribedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.subscribedBy.push ( relation );
          if ( fb ) this.formSubscribedByArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "subscriberAt" ] ) {
        for ( let item of input[ "subscriberAt" ] ) {
          let relation = new RelationModel ( item, fb );
          this.subscriberAt.push ( relation );
          if ( fb ) this.formSubscriberAtArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "ownedBy" ] ) {
        for ( let item of input[ "ownedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.ownedBy.push ( relation );
          if ( fb ) this.formOwnedByArray.push ( relation.getFormGroup () );
        }
      }
      if ( input["presentedBy"] ) {
        for ( let item of input[ "presentedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.presentedBy.push ( relation );
          if ( fb ) this.formPresentedByArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "commentedBy" ] ) {
        for ( let item of input[ "commentedBy" ] ) {
          let relation = new RelationModel ( item, fb );
          this.commentedBy.push ( relation );
          if ( fb ) this.formCommentedByArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "commentedAt" ] ) {
        for ( let item of input[ "commentedAt" ] ) {
          let relation = new RelationModel ( item, fb );
          this.commentedAt.push ( relation );
          if ( fb ) this.formCommentedAtArray.push ( relation.getFormGroup () );
        }
      }
      if ( input["actedAt"] ) {
        for ( let item of input[ "actedAt" ] ) {
          let relation = new RelationModel ( item, fb );
          this.actedAt.push ( relation );
          if ( fb ) this.formActedAtArray.push ( relation.getFormGroup () );
        }
      }
      if ( input["statedTo"] ) {
        for ( let item of input[ "statedTo" ] ) {
          let relation = new RelationModel ( item, fb );
          this.statedTo.push ( relation );
          if ( fb ) this.formStatedToArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "likedTo" ] ) {
        for ( let item of input[ "likedTo" ] ) {
          let relation = new RelationModel ( item, fb );
          this.likedTo.push ( relation );
          if ( fb ) this.formLikedToArray.push ( relation.getFormGroup () );
        }
      }
      if ( input[ "connectedTo" ] ) {
        for ( let item of input[ "connectedTo" ] ) {
          let relation = new RelationModel ( item, fb );
          this.connectedTo.push ( relation );
          if ( fb ) this.formConnectedToArray.push ( relation.getFormGroup () );
        }
      }
    }

    if (fb) this.formGroup = fb.group({
        abstractions: this.formAbstractionsArray,
        elements: this.formElementsArray,
        subscribedBy: this.formSubscribedByArray,
        subscriberAt: this.formSubscriberAtArray,
        ownedBy: this.formOwnedByArray,
        presentedBy: this.formPresentedByArray,
        commentedBy: this.formCommentedByArray,
        commentedAt: this.formCommentedAtArray,
        statedTo: this.formStatedToArray,
        actedAt: this.formActedAtArray,
        likedTo: this.formLikedToArray,
        connectedTo: this.formConnectedToArray
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

    if (input.template.relations)
      for (let item of input.template.relations){
        if (item.values){
          for (let rel of item.values) {
            let relation = new RelationModel ( rel.attributes, fb);
            this[ rel.name ].push ( relation );
            if (rel.name === "abstractions" ) this.formAbstractionsArray.push ( relation.getFormGroup () );
            if (rel.name === "elements" ) this.formElementsArray.push ( relation.getFormGroup () );
            if (rel.name === "subscribedBy" ) this.formSubscribedByArray.push ( relation.getFormGroup () );
            if (rel.name === "subscriberAt" ) this.formSubscriberAtArray.push ( relation.getFormGroup () );
            if (rel.name === "ownedBy" ) this.formOwnedByArray.push ( relation.getFormGroup () );
            if (rel.name === "presentedBy" ) this.formPresentedByArray.push ( relation.getFormGroup () );
            if (rel.name === "commentedBy" ) this.formCommentedAtArray.push ( relation.getFormGroup () );
            if (rel.name === "commentedAt" ) this.formCommentedByArray.push ( relation.getFormGroup () );
            if (rel.name === "statedTo" ) this.formStatedToArray.push ( relation.getFormGroup () );
            if (rel.name === "actedAt" ) this.formActedAtArray.push ( relation.getFormGroup () );
            if (rel.name === "likedTo" ) this.formLikedToArray.push ( relation.getFormGroup () );
            if (rel.name === "connectedTo" ) this.formConnectedToArray.push ( relation.getFormGroup () );
          }
        }
      };
  }

  public getFormGroup() {
    return this.formGroup;
  }
}
