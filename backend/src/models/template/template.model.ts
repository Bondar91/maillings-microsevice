import { model, models, Schema } from 'mongoose';
import { ITemplate } from './template.d';

const TemplateSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TemplateModel =
  models['Template'] || model<ITemplate>('Template', TemplateSchema);

export default TemplateModel;
