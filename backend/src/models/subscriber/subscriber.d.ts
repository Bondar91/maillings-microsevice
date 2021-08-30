import { Document, Model } from 'mongoose';

export interface ISubscriberAttributes {
  name: string;
  email: string;
}

export interface ISubscriber extends Document, ISubscriberAttributes {
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ISubscriberModel extends Model<ISubscriber> {
  getSubscribers(): Promise<ISubscriber>;
  findSubscriberById(subscriberId: string): Promise<ISubscriber>;
  addSubscriber(subscriber: ISubscriberAttributes): Promise<ISubscriber>;
  updateSubscriberById(
    subscriberId: string,
    subscriber: ISubscriberAttributes
  ): Promise<ISubscriber>;
  deleteSubscriberById(subscriberId: string): Promise<void>;
  findSubscribersByIds(subscribersIds: string[]): Promise<ISubscriber[]>;
}
