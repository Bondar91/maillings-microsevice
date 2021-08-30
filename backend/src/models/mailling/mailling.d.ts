import { Document, Model } from 'mongoose';

export interface IMaillingAttributes {
  title: string;
  description: string;
  body: string;
  templateId: string;
  listsIds: string[];
}

export interface IMailling extends Document, IMaillingAttributes {
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IMaillingModel extends Model<IMailling> {
  getMaillings(): Promise<IMailling>;
  findMaillingById(maillingId: string): Promise<IMailling>;
  addMailling(mailling: IMaillingAttributes): Promise<IMailling>;
  updateMaillingById(
    maillingId: string,
    mailling: IMaillingAttributes
  ): Promise<IMailling>;
  deleteMaillingById(maillingId: string): Promise<void>;
}
