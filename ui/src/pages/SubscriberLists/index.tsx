import React, { FC } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { columns } from '../../components/Table/common/columns';
import { useFetch } from '../../hooks/useFetch';
import { ISubscriberList } from '../../../../backend/src/models/subscriberList/subscriberList.d';

interface ISubscriberListsResponse {
  data: ISubscriberList[];
}

const SubscriberLists = () => {
  const { data, isLoading, hasError, errorMessage } =
    useFetch<ISubscriberListsResponse>(
      'http://localhost:3000/api/subscriberLists',
    );

  return (
    <Layout title="Subscribers" isLoading={isLoading}>
      {data?.data && (
        <Table data={data?.data} columns={columns.subscribersColumn} />
      )}
      {hasError && <p>{errorMessage}</p>}
    </Layout>
  );
};

export default SubscriberLists;
