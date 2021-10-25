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
  const subscriberResult: ISubscriber = await this.findByIdAndUpdate(
    subscriberId,
    subscriber
  );
  return subscriberResult;
};

SubscriberSchema.statics.getSubscribers =
  async function (): Promise<ISubscriber> {
    return await this.find({}).populate('lists');
  };

SubscriberSchema.statics.findSubscriberById = async function (
  subscriberId: string
): Promise<ISubscriber> {
  return await this.findOne({ _id: subscriberId });
};

SubscriberSchema.statics.findSubscribersByIds = async function (
  subscribersIds: string[]
): Promise<ISubscriber[]> {
  console.log(subscribersIds);
  const subscribers = await this.find().where('_id').in(subscribersIds).exec();

  return subscribers;
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
