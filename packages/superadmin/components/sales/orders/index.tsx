import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import OrderList from './List/ordersList';
import OrderSearchWindow from './subComponent/searchWindow';
import { userAPI } from '../../../APIs';
const OrderListMain = () => {
  const [singleOrder, setSingleOrder] = useState({});
  const [id, setId] = useState('');
  const [search, setSearch] = useState(false);
  const [orderListData, setOrderListData] = useState<any>();
  const getAllOrderList = async () => {
    const res = await userAPI.getAllOrderList();
    // console.log('orderList**', res);
    res ? setOrderListData(res) : '';
  };
  useEffect(() => {
    getAllOrderList();
  }, []);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const singleOrderList = orderListData?.orders?.filter((order: any) => order.orderId === id);
    const order = {
      orders: singleOrderList
    }
    setSingleOrder(order);
    setSearch(true);
  };

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
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start">
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
              </div>

              <div>
                <form className="form-inline">
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="orderId"
                      placeholder="OrderID"
                      onChange={(e) => {setId(e.target.value)}}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            
            {search ? (
               <div>
               {singleOrder ? (
                 <OrderList orderListData={singleOrder} />
               ) : (
                 'No Order Found'
               )}
             </div>
            ) : (
              <div>
                {orderListData ? (
                  <OrderList orderListData={orderListData} />
                ) : (
                  'No Order Data Found'
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderListMain;
