import { model, models, Schema } from 'mongoose';
import { IList, IListAttributes, IListsModel } from './list.d';
import { Subscriber } from 'models';
import { ISubscriber } from 'models/subscriber/subscriber.d';

const ListSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subscribers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subscriber',
        required: true,
      },
    ],
    maillings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Mailling',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

ListSchema.statics.addList = async function (
  list: IListAttributes
): Promise<IList | boolean> {
  const entry: IList = new this(list);
  const saved = await entry.save();
  return saved;
};

ListSchema.statics.updateListById = async function (
  listId: string,
  list: IListAttributes
): Promise<IList | boolean> {
  const listResult: IList = await this.findByIdAndUpdate(listId, list);
  return listResult;
};

ListSchema.statics.getLists = async function (
  withSubscribers = true
): Promise<IList> {
  return await this.find({}).populate({
    path: 'subscribers',
    select: '_id name email',
  });
};

ListSchema.statics.findListById = async function (
  listId: string
): Promise<IList> {
  return await this.findById(listId).populate({
    path: 'subscribers',
    select: '_id name email',
  });
};

ListSchema.statics.deleteListById = async function (
  listId: string
): Promise<void> {
  const list = await this.findByIdAndDelete(listId);

  list.subscribers.map(async (subscribers: ISubscriber) => {
    await Subscriber.findByIdAndUpdate(subscribers._id, {
      $pull: { lists: list._id },
    });
  });
};

const ListModel =
  (models['List'] as IListsModel) ||
  model<IList, IListsModel>('List', ListSchema);

export default ListModel;
