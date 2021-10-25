import subscriberService from '../services/subscriberService';
import { ISubscriberAttributes, ISubscriberResponse } from '../services/types';

export const useSubscribersFacade = () => {
  const getData = () => {
    return new Promise<ISubscriberResponse>((resolve, reject) => {
      subscriberService
        .getAll()
        .then((result) => {
          if (result) {
            resolve({
              data: result.data,
            });
          }
        })
        .catch((err) => reject(err));
    });
  };

  return {
    getData,
  };
};
