import React, { useState } from 'react';
import { config } from 'config';
import { useFetch } from 'hooks/useFetch';
import { ISubscriberAttributes, ISubscriberResponse } from './types';
import Api from '../api';

const { apiUrl } = config;

export interface IFormValues {
  name: string;
  email: string;
}

class subscriberService {
  static getAll() {
    // const { data, isLoading, hasError, errorMessage } =
    //   useFetch<ISubscriberResponse>(`${apiUrl}subscribers`);

    // return { data, isLoading, hasError, errorMessage };

    return Api.get<ISubscriberResponse[]>('subscribers');
  }

  static create(subscriberData: IFormValues) {
    return Api.post<IFormValues>('subscribers', subscriberData);
  }
}

export default subscriberService;
