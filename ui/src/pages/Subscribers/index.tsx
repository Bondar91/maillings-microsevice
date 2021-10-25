import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { columns } from '../../components/Table/common/columns';
import subscriberService from '../../services/subscriberService';

const Subscribers = () => {
  const getData = () => {
    return new Promise((resolve, reject) => {
      subscriberService
        .getAll()
        .then((result) => {
          resolve({
            data: result.data,
          });
        })
        .catch((err) => reject(err));
    });
  };

  console.log(getData());

  return (
    <Layout title="Subscribers">
      {/* {data?.data && <Table data={data?.data} columns={columns.subscribers} />}
      {hasError && <p>{errorMessage}</p>} */}
    </Layout>
  );
};

export default Subscribers;
