import { useEffect, useState } from 'react';
import { ISubscriberResponse } from 'services/types';
import SubscriberQuery from '../services/subscribers/subscriberQuery';

export const useSubscribersFacade = () => {
  const [data, setData] = useState<ISubscriberResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await SubscriberQuery.getAll();
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);

        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      }
    };

    getData();
  }, []);

  return {
    data,
    isLoading,
    hasError,
    errorMessage,
  };
};
