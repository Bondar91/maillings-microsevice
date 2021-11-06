import { ISubscriberResponse } from '../../utils/types/subscriber';
import Api from '../../api';
export class SubscriberQuery {
  constructor() {}

  getAll = () => {
    return Api.get<ISubscriberResponse>('subscribers');
  };
}
