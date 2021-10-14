import React from 'react';
import { config } from 'config';
import { useFetch } from 'hooks/useFetch';
import { ISubscriberResponse } from './types';

const { apiUrl } = config;

export const get = () => {};

class subscriberService {
  static getAll() {
    const { data, isLoading, hasError, errorMessage } =
      useFetch<ISubscriberResponse>(`${apiUrl}subscribers`);

    return { data, isLoading, hasError, errorMessage };
  }
}

export default subscriberService;
