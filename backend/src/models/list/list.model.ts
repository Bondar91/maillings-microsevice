import { model, models, Schema } from 'mongoose';
import { IList, IListAttributes, IListsModel } from './list.d';

const ListSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ListSchema.statics.addList = async function (
  list: IListAttributes
): Promise<IList> {
  const entry: IList = new this(list);
  const saved = await entry.save();
  return saved;
};

ListSchema.statics.updateList = async function (
  listId: string,
  list: IListAttributes
): Promise<IList> {
  const listResult = await this.findOneAndUpdate({ _id: listId }, list, {
    upsert: false,
  });
  return listResult;
};

ListSchema.statics.getLists = async function (): Promise<IList> {
  return await this.find({});
};

ListSchema.statics.findList = async function (listId: string): Promise<IList> {
  return await this.findOne({ _id: listId });
};

ListSchema.statics.deleteList = async function (
  listId: string
): Promise<IList> {
  return await this.deleteOne({ _id: listId });
};

const ListModel =
  (models['List'] as IListsModel) ||
  model<IList, IListsModel>('List', ListSchema);

export default ListModel;
