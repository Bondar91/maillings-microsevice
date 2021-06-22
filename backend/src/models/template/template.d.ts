import { Document } from 'mongoose';

export interface ITemplate extends Document {
  id: Number;
  title: String;
  desctiption: Text;
  body: Text;
}
