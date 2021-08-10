import { Document, Model } from 'mongoose';
import { ITemplateAttributes } from 'model/template/template.d';
import { IListAttributes } from 'model/list/list.d';

export interface IMaillingAttributes {
  title: String;
  description: String;
  body: String;
  templates: ITemplateAttributes[];
  lists: IListAttributes[];
}

export interface IMailling extends Document, IMaillingAttributes {
  createdAt?: Date | String;
  updatedAt?: Date | String;
}

export interface IMaillingModel extends Model<IMailling> {
  getMaillings(): Promise<IMailling>;
  findMaillingById(maillingId: String): Promise<IMailling>;
  addMailling(mailling: IMaillingAttributes): Promise<IMailling>;
  updateMaillingById(
    maillingId: String,
    mailling: IMaillingAttributes
  ): Promise<IMailling>;
  deleteMaillingById(maillingId: String): Promise<void>;
}
