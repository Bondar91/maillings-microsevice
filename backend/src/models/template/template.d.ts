import { Document, Model } from 'mongoose';

export interface ITemplateAttributes {
  title: string;
  description: string;
  body: string;
}

export interface ITemplate extends Document, ITemplateAttributes {
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ITemplateModel extends Model<ITemplate> {
  getTemplates(): Promise<ITemplate>;
  findTemplateById(templateId: string): Promise<ITemplate>;
  addTemplate(template: ITemplateAttributes): Promise<ITemplate>;
  updateTemplateById(
    templateId: string,
    template: ITemplateAttributes
  ): Promise<ITemplate>;
  deleteTemplateById(templateId: string): Promise<void>;
}
