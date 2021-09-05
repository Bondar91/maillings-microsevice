import React, { FC } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { columns } from '../../components/Table/common/columns';

const SubscriberLists: FC = (): JSX.Element => {
  return (
    <Layout title="SubscriberLists">
      <Table {...columns.subscriberLists} />
    </Layout>
  );
};

export default SubscriberLists;
