import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { columns } from '../../components/Table/common/columns';
import subscriberService from '../../services/subscriberService';
import { ISubscriberAttributes, ISubscriberResponse } from '../../services/types';
import {useSubscribersFacade} from '../../hooks/useSubscribersFacade';


const Subscribers = () => {
  const { apiData } = useSubscribersFacade();
  
  console.log(apiData)
  
  return (<></>
    // <Layout title="Subscribers">
    //   <Table data={() => getData().then(res=>res)} columns={columns.subscribers} />
    //   {/* {data?.data && <Table data={data?.data} columns={columns.subscribers} />} */}
    //   {/* {hasError && <p>{errorMessage}</p>} */}
    // </Layout>
  );
};

export default Subscribers;
