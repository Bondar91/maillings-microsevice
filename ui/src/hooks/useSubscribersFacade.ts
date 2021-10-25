import {useEffect, useState} from 'react';
import { ISubscriberAttributes, ISubscriberResponse } from 'services/types';
import subscriberService from '../services/subscriberService';

export const useSubscribersFacade = () => {
  const [apiData, setApiData] = useState<ISubscriberAttributes | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await subscriberService.getAll();
        const data = await response?.data;

        setApiData(data);

        return data;

      } catch( error) {
        console.log(error)
      }
    }

    getData();
  }, [])
  // const getData = () => {
    // return new Promise<ISubscriberResponse>((resolve, reject) => {
    //   subscriberService
    //     .getAll()
    //     .then((result) => {
    //       resolve({
    //         data: result.data,
    //       })
    //     })
    //     .catch((err) => reject(err));
    // });
    
  // };

 

  return {
    apiData,
   
  };
};
