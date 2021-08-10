import { model, models, Schema } from 'mongoose';
import { IMailling, IMaillingAttributes, IMaillingModel } from './mailling.d';

const MaillingSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sendCycle: {
      type: Date,
      required: true,
    },
    template: {
      type: Schema.Types.ObjectId,
      ref: 'Template',
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

MaillingSchema.statics.addMailling = async function (
  mailling: IMaillingAttributes
): Promise<IMailling> {
  const entry: IMailling = new this(mailling);
  const saved = await entry.save();

  return saved;
};

MaillingSchema.statics.updateMaillingById = async function (
  maillingId: string,
  mailling: IMaillingAttributes
): Promise<IMailling> {
  const maillingResult = await this.findByIdAndUpdate(maillingId, mailling);
  return maillingResult;
};

MaillingSchema.statics.getMaillings = async function (): Promise<IMailling> {
  return await this.find({});
};

MaillingSchema.statics.findMaillingById = async function (
  maillingId: string
): Promise<IMailling> {
  return await this.findById(maillingId);
};

MaillingSchema.statics.deleteMaillingById = async function (
  maillingId: string
): Promise<void> {
  const mailling = await this.findByIdAndDelete(maillingId);
};

const MaillingModel =
  (models['Template'] as IMaillingModel) ||
  model<IMailling, IMaillingModel>('Template', MaillingSchema);

export default MaillingModel;
