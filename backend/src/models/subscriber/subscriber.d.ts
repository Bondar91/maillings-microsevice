import { Document, Model } from 'mongoose';
import { IListAttributes } from 'models/list/list.d';

export interface ISubscriberAttributes {
  _id?: String;
  name: String;
  email: String;
  lists: IListAttributes[];
}

export interface ISubscriber extends Document, ISubscriberAttributes {
  createdAt?: Date | String;
  updatedAt?: Date | String;
}

export interface ISubscriberModel extends Model<ISubscriber> {
  getSubscribers(): Promise<ISubscriber>;
  findSubscriberById(subscriberId: String): Promise<ISubscriber>;
  addSubscriber(subscriber: ISubscriberAttributes): Promise<ISubscriber>;
  updateSubscriberById(
    subscriberId: String,
    subscriber: ISubscriberAttributes
  ): Promise<ISubscriber>;
  deleteSubscriberById(subscriberId: String): Promise<void>;
}
