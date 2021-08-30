import { model, models, Schema } from 'mongoose';
import { ITemplate, ITemplateAttributes, ITemplateModel } from './template.d';

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
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

TemplateSchema.statics.addTemplate = async function (
  template: ITemplateAttributes
): Promise<ITemplate> {
  const entry: ITemplate = new this(template);
  const saved = await entry.save();

  return saved;
};

TemplateSchema.statics.updateTemplateById = async function (
  templateId: string,
  template: ITemplateAttributes
): Promise<ITemplate> {
  const templateResult = await this.findByIdAndUpdate(templateId, template);
  return templateResult;
};

TemplateSchema.statics.getTemplates = async function (): Promise<ITemplate> {
  console.log('fs');
  return await this.find({});
};

TemplateSchema.statics.findTemplateById = async function (
  templateId: string
): Promise<ITemplate> {
  return await this.findById(templateId);
};

TemplateSchema.statics.deleteTemplateById = async function (
  templateId: string
): Promise<void> {
  await this.findByIdAndDelete(templateId);
};

const TemplateModel =
  (models['Template'] as ITemplateModel) ||
  model<ITemplate, ITemplateModel>('Template', TemplateSchema);

export default TemplateModel;
