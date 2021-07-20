import { model, models, Schema } from 'mongoose';
import {
  ISubscriber,
  ISubscriberAttributes,
  ISubscriberModel,
} from './subscriber.d';

const SubscriberSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    list: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

SubscriberSchema.statics.addSubscriber = function (
  request: ISubscriber
): Promise<ISubscriber> {
  const subscriber = new this({
    name: request.name,
    email: request.email,
    list: request.list,
  });

  return subscriber.save();
};

SubscriberSchema.statics.updateSubscriber = async function (
  subscriberId: string,
  list: ISubscriberAttributes
): Promise<ISubscriber> {
  const listResult = await this.findOneAndUpdate({ _id: subscriberId }, list, {
    upsert: false,
  });
  return listResult;
};

SubscriberSchema.statics.getLists = async function (): Promise<ISubscriber> {
  return await this.find({});
};

SubscriberSchema.statics.findList = async function (
  subscriberId: string
): Promise<ISubscriber> {
  return await this.findOne({ _id: subscriberId });
};

SubscriberSchema.statics.deleteList = async function (
  subscriberId: string
): Promise<ISubscriber> {
  return await this.deleteOne({ _id: subscriberId });
};

const SubscriberModel =
  models['Subscriber'] ||
  model<ISubscriber, ISubscriberModel>('Subscriber', SubscriberSchema);

export default SubscriberModel;
