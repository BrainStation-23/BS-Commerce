import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import getData from '@/components/sales/service/get-data.service';
import EditOrder from '@/components/sales/editOrder';
import { userAPI } from '../../../../APIs/index';
const Edit: NextPage = () => {
  const router = useRouter();
  const id = `${router.query.id}`;
  const [singleOrderInfo, setSingleOrderInfo] = useState<any>();
  const getSingleOrderData = async () => {
    const res = await userAPI.getSingleOrderById(id);
    res ? setSingleOrderInfo(res.data) : '';
    console.log(res);
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
