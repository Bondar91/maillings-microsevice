import React from 'react';
import { Layout, Table, columns } from '../../components';
import { useSubscribersFacade } from '../../hooks/useSubscribersFacade';

export const SubscribersPage = () => {
  const { data, isLoading, hasError, errorMessage } = useSubscribersFacade();

  return (
    <Layout title="Subscribers" isLoading={isLoading}>
      {data?.data && <Table data={data?.data} columns={columns.subscribers} />}
      {hasError && <p>{errorMessage}</p>}
    </Layout>
  );
};
