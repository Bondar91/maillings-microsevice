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
    templateId: {
      type: Schema.Types.ObjectId,
      ref: 'Template',
      required: true,
    },
    subscriberListsIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SubscriberList',
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
  const maillingResult: IMailling = await this.findByIdAndUpdate(
    maillingId,
    mailling
  );
  return maillingResult;
};

MaillingSchema.statics.getMaillings = async function (): Promise<IMailling> {
  return await this.find({}).populate({
    path: 'lists',
    select: '_id name',
  });
};

MaillingSchema.statics.findMaillingById = async function (
  maillingId: string
): Promise<IMailling> {
  return await this.findById(maillingId).populate({
    path: 'lists',
    select: '_id name',
  });
};

MaillingSchema.statics.deleteMaillingById = async function (
  maillingId: string
): Promise<void> {
  await this.findByIdAndDelete(maillingId);
};

const MaillingModel =
  (models['Mailling'] as IMaillingModel) ||
  model<IMailling, IMaillingModel>('Mailling', MaillingSchema);

export default MaillingModel;
