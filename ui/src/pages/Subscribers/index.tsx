import React from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { columns } from '../../components/Table/common/columns';
import { useSubscribersFacade } from '../../hooks/useSubscribersFacade';

const Subscribers = () => {
  const { data, isLoading, hasError, errorMessage } = useSubscribersFacade();

  console.log(data);

  return (
    <Layout title="Subscribers" isLoading={isLoading}>
      {data?.data && <Table data={data?.data} columns={columns.subscribers} />}
      {hasError && <p>{errorMessage}</p>}
    </Layout>
  );
};

export default Subscribers;
