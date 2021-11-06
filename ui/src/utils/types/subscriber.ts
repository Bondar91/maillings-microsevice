// export interface ISubscriberResponse {
//   _id: string;
//   name: string;
//   email: string;
//   createdAt: string;
//   updatedAt: string;
// }

export interface ISubscriberRequest {
  name: string;
  email: string;
}

export interface ISubscriberAttributes {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISubscriberResponse {
  error: boolean;
  message: string;
  data: ISubscriberAttributes;
}
