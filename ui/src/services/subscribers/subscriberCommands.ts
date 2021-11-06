import {
  ISubscriberResponse,
  ISubscriberRequest,
} from '../../utils/types/subscriber';
import Api from '../../api';
export class SubscriberCommands {
  constructor() {}

  create = (requestQuery: ISubscriberRequest) => {
    return Api.post<ISubscriberResponse>('subscribers', requestQuery);
  };

  update = () => {};

  remove = () => {};
}
