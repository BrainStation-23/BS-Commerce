import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import EditOrder from '@/components/sales/orders/Edit/editOrder';
import { userAPI } from '../../../../APIs/index';
const Edit: NextPage = () => {
  const router = useRouter();
  const id = `${router.query.id}`;
  const [singleOrderInfo, setSingleOrderInfo] = useState<any>();
  const getSingleOrderData = async () => {
    const res = await userAPI.getSingleOrderById(id);
    res ? setSingleOrderInfo(res.data) : '';
  };
  useEffect(() => {
    getSingleOrderData();
  }, []);

  //   const filteredOrder = order?.filter((data: any) => data.id == id);
  //   const singleOrder = filteredOrder[0];

  return (
    <>
      <div>
        {singleOrderInfo ? (
          <EditOrder singleOrderInfo={singleOrderInfo} />
        ) : null}
      </div>
    </>
  );
};

export default Edit;
