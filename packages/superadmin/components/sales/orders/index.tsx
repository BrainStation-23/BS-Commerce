import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import OrderList from './List/ordersList';
import OrderSearchWindow from './subComponent/searchWindow';
import { userAPI } from '../../../APIs';
const OrderListMain = () => {
  const [orderListData, setOrderListData] = useState<any>();
  const getAllOrderList = async () => {
    const res = await userAPI.getAllOrderList();
    // console.log('orderList**', res);
    res ? setOrderListData(res) : '';
  };
  useEffect(() => {
    getAllOrderList();
  }, []);

  return (
    <>
      <main className="px-5">
        <div
          className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2"
          style={{ paddingLeft: '10px' }}
        >
          <h1 className="h2">Orders</h1>
        </div>
        <div>
          <OrderSearchWindow />
        </div>

        <div className="card border-1 mt-3 rounded px-2">
          <div className="card-body">
            <p>
              Learn more about
              <a
                href="#"
                style={{
                  textDecoration: 'none',
                  marginLeft: '5px',
                }}
              >
                Orders
              </a>
            </p>
            <div>
              {orderListData ? (
                <OrderList orderListData={orderListData} />
              ) : (
                'No Order Data Found'
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderListMain;
