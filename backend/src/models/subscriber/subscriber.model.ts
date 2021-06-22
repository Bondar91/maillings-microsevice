import { model, models, Schema } from 'mongoose';
import { ISubscriber, ISubscriberModel } from './subscriber.d';

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
    group: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

SubscriberSchema.statics.addGroup = function (
  request: ISubscriber
): Promise<ISubscriber> {
  const group = new this({
    name: request.name,
    email: request.email,
    group: request.group,
  });

  return group.save();
};

SubscriberSchema.statics.updateGroup = function (
  subscriber_id: Number,
  request: ISubscriber
) {};

SubscriberSchema.statics.deleteGroup = function (subscriber_id: Number) {};

const SubscriberModel =
  models['Subscriber'] ||
  model<ISubscriber, ISubscriberModel>('Subscriber', SubscriberSchema);

export default SubscriberModel;
