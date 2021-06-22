import { Document } from 'mongoose';
import { ITemplate } from '../template/template';
import { IGroup } from '../group/group';

export interface IMailling extends Document {
  id: Number;
  title: String;
  template: ITemplate;
  sendCycle: Date | String;
  group: IGroup;
}
