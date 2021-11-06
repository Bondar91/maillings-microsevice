import React, { useState } from 'react';
import { config } from 'config';
import { ISubscriberResponse } from '../types';
import Api from '../../api';

class SubscriberQuery {
  constructor() {}

  getAll = () => {
    return Api.get<ISubscriberResponse>('subscribers');
  };

  // create(subscriberData: IFormValues) {
  //   return Api.post<IFormValues>('subscribers', subscriberData);
  // }
}

const subscriberQuery = new SubscriberQuery();

export default subscriberQuery;
