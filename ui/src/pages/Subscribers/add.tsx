import React from 'react';
import { Layout } from '../../components';
import { SubscriberForm } from '../../components/Forms/SubscriberForm';

export const AddSubscriberPage = () => {
  return (
    <Layout title="Dodaj Subskrybenta">
      <SubscriberForm />
    </Layout>
  );
};
