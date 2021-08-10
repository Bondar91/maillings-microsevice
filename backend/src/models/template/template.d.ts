import { Document, Model } from 'mongoose';

export interface ITemplateAttributes {
  title: String;
  description: String;
  body: String;
}

export interface ITemplate extends Document, ITemplateAttributes {
  createdAt?: Date | String;
  updatedAt?: Date | String;
}

export interface ITemplateModel extends Model<ITemplate> {
  getTemplates(): Promise<ITemplate>;
  findTemplateById(templateId: String): Promise<ITemplate>;
  addTemplate(template: ITemplateAttributes): Promise<ITemplate>;
  updateTemplateById(
    templateId: String,
    template: ITemplateAttributes
  ): Promise<ITemplate>;
  deleteTemplateById(templateId: String): Promise<void>;
}
