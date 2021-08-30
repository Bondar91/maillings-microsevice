import { model, models, Schema } from 'mongoose';
import {
  ISubscriberList,
  ISubscriberListAttributes,
  ISubscriberListModel,
} from './subscriberList.d';

const SubscriberListSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subscribersIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subscriber',
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

SubscriberListSchema.statics.addList = async function (
  list: ISubscriberListAttributes
): Promise<ISubscriberList | boolean> {
  const entry: ISubscriberList = new this(list);
  const saved = await entry.save();
  return saved;
};

SubscriberListSchema.statics.updateListById = async function (
  listId: string,
  list: ISubscriberListAttributes
): Promise<ISubscriberList | boolean> {
  const listResult: ISubscriberList = await this.findByIdAndUpdate(
    listId,
    list
  );
  return listResult;
};

SubscriberListSchema.statics.getLists = async function (
  withSubscribers = true
): Promise<ISubscriberList> {
  return await this.find({}).populate({
    path: 'subscribers',
    select: '_id name email',
  });
};

SubscriberListSchema.statics.findListById = async function (
  listId: string
): Promise<ISubscriberList> {
  return await this.findById(listId).populate({
    path: 'subscribers',
    select: '_id name email',
  });
};

SubscriberListSchema.statics.findListsByIds = async function (
  listsIds: string[]
): Promise<void> {
  await this.find().where('_id').in(listsIds).exec();
};

SubscriberListSchema.statics.deleteListById = async function (
  listId: string
): Promise<void> {
  await this.findByIdAndDelete(listId);
};

const SubscriberListModel =
  (models['SubscriberList'] as ISubscriberListModel) ||
  model<ISubscriberList, ISubscriberListModel>(
    'SubscriberList',
    SubscriberListSchema
  );

export default SubscriberListModel;
