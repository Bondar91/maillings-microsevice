import { Document, Model } from 'mongoose';
import { ISubscriberAttributes } from 'models/subscriber/subscriber.d';
import { IMaillingAttributes } from 'model/mailling/mailling.d';

export interface IListAttributes {
  name: String;
  subscribers: ISubscriberAttributes[];
  maillings: IMaillingAttributes[];
}

export interface IList extends Document, IListAttributes {
  createdAt?: Date | String;
  updatedAt?: Date | String;
}

export interface IListsModel extends Model<IList> {
  getLists(): Promise<IList>;
  findListById(listId: string): Promise<IList>;
  addList(list: IListAttributes): Promise<IList>;
  updateListById(listId: string, list: IListAttributes): Promise<IList>;
  deleteListById(listId: string): Promise<void>;
}
