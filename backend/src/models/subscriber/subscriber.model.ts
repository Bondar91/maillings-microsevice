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
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: 'List',
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

SubscriberSchema.statics.addSubscriber = async function (
  subscriber: ISubscriberAttributes
): Promise<ISubscriber> {
  const entry: ISubscriber = new this(subscriber);
  const saved = await entry.save();

  return saved;
};

SubscriberSchema.statics.updateSubscriberById = async function (
  subscriberId: string,
  subscriber: ISubscriberAttributes
): Promise<ISubscriber> {
  const subscriberResult = await this.findOneAndUpdate(
    { _id: subscriberId },
    subscriber,
    {
      upsert: false,
    }
  );
  return subscriberResult;
};

SubscriberSchema.statics.getSubscribers =
  async function (): Promise<ISubscriber> {
    return await this.find({}).populate('lists');
  };

SubscriberSchema.statics.findSubscriberById = async function (
  subscriberId: String
): Promise<ISubscriber> {
  return await this.findOne({ _id: subscriberId });
};

SubscriberSchema.statics.deleteSubscriberById = async function (
  subscriberId: string
): Promise<ISubscriber> {
  return await this.deleteOne({ _id: subscriberId });
};

const SubscriberModel =
  (models['Subscriber'] as ISubscriberModel) ||
  model<ISubscriber, ISubscriberModel>('Subscriber', SubscriberSchema);

export default SubscriberModel;
