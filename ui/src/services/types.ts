export interface ISubscriberAttributes extends Object {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISubscriberResponse {
  data: ISubscriberAttributes;
}
