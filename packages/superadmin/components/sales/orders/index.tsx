import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import OrderList from './List/ordersList';
import OrderSearchWindow from './subComponent/searchWindow';
import { userAPI } from '../../../APIs';
import { useRouter } from 'next/router';
const OrderListMain = () => {
  const route = useRouter();
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
    const singleOrderList = orderListData?.orders?.filter(
      (order: any) => order.orderId === id
    );
    const order = {
      orders: singleOrderList,
    };
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
          <div className="card border-1 mt-3 rounded">
            <div className="card-header">
              <span className="ms-2 fs-4">Search</span>
            </div>

            <div>
              <form
                style={{
                  padding: '5px',
                  margin: '5px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    padding: '5px',
                    margin: '5px',
                  }}
                  className="form-col"
                >
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                      marginBottom: '5px',
                    }}
                    className="col"
                  >
                    Start Date
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                      marginBottom: '5px',
                    }}
                    className="col"
                  >
                    Start Time
                    <input
                      type="time"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                      marginBottom: '5px',
                    }}
                    className="col"
                  >
                    End Date
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                      marginBottom: '5px',
                    }}
                    className="col"
                  >
                    End Time
                    <input
                      type="time"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    padding: '5px',
                    margin: '5px',
                  }}
                  className="form-col"
                >
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                    }}
                    className="col"
                  >
                    Order Status
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected> </option>
                      <option value="1">Pending</option>
                      <option value="2">Processing</option>
                      <option value="3">Completed</option>
                      <option value="4">Cancelled</option>
                    </select>
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                    }}
                    className="col"
                  >
                    Payment Status
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected> </option>
                      <option value="1">Pending</option>
                      <option value="2">Paid</option>
                      <option value="3">Cancelled</option>
                    </select>
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                    }}
                    className="col"
                  >
                    Shipping Status
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected> </option>
                      <option value="1">NotYetShipped</option>
                      <option value="2">PartiallyShipped</option>
                      <option value="3">Shipped</option>
                      <option value="4">Delivered</option>
                    </select>
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      marginRight: '100px',
                    }}
                    className="col"
                  >
                    Order ID
                    <input
                      type="text"
                      className="form-control"
                      id="orderId"
                      placeholder=""
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    style={{
                      height: '50px',
                      width: '200px',
                      margin: '15px',
                    }}
                    className="btn btn-primary"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
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
            </div>

            {search === true ? (
              <div>
                {singleOrder ? (
                  <>
                    <OrderList orderListData={singleOrder} />
                  </>
                ) : (
                  'No Order Found'
                )}
              </div>
            ) : (
              <div></div>
            )}
            {search === false ? (
              <div>
                {orderListData ? (
                  <OrderList orderListData={orderListData} />
                ) : (
                  'No Order Data Found'
                )}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderListMain;
