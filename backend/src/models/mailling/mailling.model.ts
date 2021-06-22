import { model, models, Schema } from 'mongoose';
import { IMailling } from './mailling.d';

const MaillingSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    template: {
      type: Object,
      required: true,
    },
    sendCycle: {
      type: Date,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const MaillingModel =
  models['Mailling'] || model<IMailling>('Mailling', MaillingSchema);

export default MaillingModel;
