import { Document, Model } from 'mongoose';

export interface IListAttributes {
  name: String;
}

export interface IList extends Document, IListAttributes {
  createdAt?: Date | String;
  updatedAt?: Date | String;
}

export interface IListsModel extends Model<IList> {
  getLists(): Promise<IList>;
  findList(listId: string): Promise<IList>;
  addList(list: IListAttributes): Promise<IList>;
  updateList(listId: string, listUpdate: IListAttributes): Promise<IList>;
  deleteList(listId: string): [];
}
