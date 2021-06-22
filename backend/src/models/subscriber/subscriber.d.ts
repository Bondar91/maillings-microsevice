import { Document, Model } from 'mongoose';
import { IGroup } from '../group/group';

export interface ISubscriber extends Document {
  id: Number;
  name: String;
  email: String;
  group: IGroup;
}

export interface ISubscriberModel extends Model<ISubscriber> {
  addSubscriber(request: ISubscriber): Promise<ISubscriber>;
  updateSubscriber(
    subscriber_id: Number,
    request: ISubscriber,
  ): Promise<ISubscriber>;
  deleteSubscriber(subscriber_id: Number): void;
}
