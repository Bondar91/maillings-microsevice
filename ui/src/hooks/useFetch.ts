import { useState, useEffect } from 'react';
import { IResponse } from './types';

export const useFetch = <T>(
  url: string,
  method: string = 'GET',
  body: object | null = null,
  headers: HeadersInit = { 'Content-Type': 'application/json' },
): IResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  console.log('s');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  console.log(data);
  useEffect(() => {
    const apiHandler = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : null,
        });
        console.log(response);
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        // setErrorMessage(error);
      }
    };

    apiHandler();
  }, []);

  return { data, isLoading, hasError, errorMessage };
};
