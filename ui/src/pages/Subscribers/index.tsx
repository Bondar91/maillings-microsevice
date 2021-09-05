import React, { FC } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { columns } from '../../components/Table/common/columns';

const Subscribers: FC = (): JSX.Element => {
  return (
    <Layout title="Subscribers">
      <Table {...columns.subscribers} />
    </Layout>
  );
};

export default Subscribers;
