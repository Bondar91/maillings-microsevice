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
  getLists(): Promise<ISubscriberList>;
  findListById(listId: string): Promise<ISubscriberList>;
  addList(list: ISubscriberListAttributes): Promise<ISubscriberList>;
  updateListById(
    listId: string,
    list: ISubscriberListAttributes
  ): Promise<ISubscriberList>;
  deleteListById(listId: string): Promise<void>;
  findListsByIds(listsIds: string[]): Promise<ISubscriberList[]>;
}
