interface ObjectsDictionary<T>{
  [index: number]: T;
  object: T;
}

export class SyncObjectModel<T>{
  sync: number = 0;
  objects: Array<T> = [];
  items: ObjectsDictionary<T> = <ObjectsDictionary<T>>{};

  constructor(){}
}

export interface Geofence {
  id: string;
  latitude: number;
  longitude: number;
  radius: number;
  transitionType: number;
  notification: {
      text: string
    };
}

export interface AddressModel {
  type : "Point",
  coordinates : any,
  text : string,
  sync: number
}

export interface ConnectionModel {
  baudrate: number,
  port: number,
  host: string
}
export interface AttributeModel {
  name: string;
  type: string;
  value:  any;
  min?:  number;
  max?:  number;
}
export interface ActionModel{
  enabled : boolean;
  label: string;
  category: string;
  type: string;
  action: string;
  icon: string;
  changedAttributes:  Array<any>;
  configurations: Array<any>;
  knowledge?: string;
}
export interface RuleModel{
  enabled : boolean;
  label: string;
  knowledge?: string;
  type: string;
  category: string;
  icon: string;
  formula?: string;
  searchOption? :string;
  categoryParmsRequest? :Array<any>;
  multiple: boolean;
  evaluatedAttribute?: any;
  evaluatedAttributes?: Array<any>;
}

export interface EquipmentModel {
  connected: boolean;
  enabled: boolean;
  updatedValue: string;
  sync?: number;
  unit: string;
  icon: string;
  image: string;
  label: string;
  name: string;
  info: Array<AttributeModel>;
  configurations: Array<AttributeModel>;
}
export interface ProfileModel {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string;
  providerData: Array<any>;
  token: any;
  uid: string;
  updatedValue: string;
  name: string;
  configurations: Array<any>;
}

export interface MessageModel {
	author: string,
	knowledgeMessage: KnowledgeMessage,
  route: string,
  sync?: number,
  err?: string
}

// Identifier that shows the object can be set as message
export interface KnowledgeMessage {}

export interface MessageInput extends KnowledgeMessage {
  topicKeys: any,
  coordinates: Array<number>,
  radius: number,
  type?: string,
  category?: string,
}

export interface MessageOutput {
  status: string,
  value: any,
  equipments?: Array<any>,
}

export interface TopicModel {
  enabled: boolean;
  updatedValue: string;
  label: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  formula: string;
  sync?: number;
  actionContainer: Array<ActionModel>;
  ruleContainer: Array<RuleModel>;
  info: Array<AttributeModel>;

}
export interface ChannelModel {
  connected: boolean;
  enabled: boolean;
  updatedValue: string;
  sync?: number;
  unit: string;
  icon: string;
  image: string;
  label: string;
  name: string;
  info: Array<AttributeModel>;

}
export interface RelationModel {
  id: string;
  sync?: number;
  access?: string;
  publish?: boolean;
  view?: boolean;
}
export interface AssociationModel {
  abstractions: Array<RelationModel>;
  elements: Array<RelationModel>;
  subscribedBy: Array<RelationModel>;
  subscriberAt: Array<RelationModel>;
  ownedBy: Array<RelationModel>;
  presentedBy: Array<RelationModel>;
  commentedBy: Array<RelationModel>;
  commentedAt: Array<RelationModel>;
  statedTo: Array<RelationModel>;
  actedAt: Array<RelationModel>;
  likedTo: Array<RelationModel>;
  connectedTo: Array<RelationModel>;
}
export interface KnowledgeInterface<DT, RL> extends KnowledgeMessage{
  _id: string,
  root: string,
  access: string,
  relations: RL,
  data: DT,
  type: string,
  category: string,
  version: string,
  sync: number,
  location: AddressModel,
  connection: ConnectionModel
};
export interface KnowledgeConstructor<DT, RL>{
  new (input: KnowledgeInterface<DT, RL>): KnowledgeInterface<DT, RL>;
}
export interface KnowledgeMod{

}

export function createKnowledge<DT, RL>(ctor: KnowledgeConstructor<DT, RL>, input: KnowledgeInterface<DT, RL>): KnowledgeInterface<DT, RL> {
  return new ctor(input);
}
export class KnowledgeChannelModel implements KnowledgeMod{
  constructor(input: KnowledgeInterface<ChannelModel, AssociationModel>) { }
}
export class KnowledgeMessageModel implements KnowledgeMod {
  constructor(input: KnowledgeInterface<MessageModel, AssociationModel>) { }
}
export class KnowledgeProfileModel implements KnowledgeMod {
  constructor(input: KnowledgeInterface<ProfileModel, AssociationModel>) { }
}
export class KnowledgeEquipmentModel implements KnowledgeMod {
  constructor(input: KnowledgeInterface<EquipmentModel, AssociationModel>) { }
}
