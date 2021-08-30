import { Document, Model } from 'mongoose';

export interface ISubscriberListAttributes {
  name: string;
  subscribersIds: string[];
}

export interface ISubscriberList extends Document, ISubscriberListAttributes {
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ISubscriberListModel extends Model<ISubscriberList> {
  getSubscriberLists(): Promise<ISubscriberList>;
  findSubscriberListById(subscriberListId: string): Promise<ISubscriberList>;
  addSubscriberList(
    subscriberList: ISubscriberListAttributes
  ): Promise<ISubscriberList>;
  updateSubscriberListById(
    subscriberListId: string,
    subscriberList: ISubscriberListAttributes
  ): Promise<ISubscriberList>;
  deleteSubscriberListById(subscriberListId: string): Promise<void>;
  findSubscriberListsByIds(
    subscriberListsIds: string[]
  ): Promise<ISubscriberList[]>;
}
