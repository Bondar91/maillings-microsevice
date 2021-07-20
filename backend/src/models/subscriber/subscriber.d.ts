import { Document, Model } from 'mongoose';
import { IList } from '../list/list';

export interface ISubscriberAttributes extends Document {
  name: String;
  email: String;
  list: IList;
}

export interface ISubscriber extends Document, ISubscriberAttributes {
  createdAt?: Date | String;
  updatedAt?: Date | String;
}

export interface ISubscriberModel extends Model<ISubscriber> {
  getSubscribers(): Promise<ISubscriber>;
  findSubscriber(subscriberId: string): Promise<ISubscriber>;
  addSubscriber(subscriber: ISubscriberAttributes): Promise<ISubscriber>;
  updateSubscriber(
    subscriberId: string,
    subscriberUpdate: ISubscriberAttributes
  ): Promise<ISubscriber>;
  deleteSubscriber(subscriberId: string): [];
}
