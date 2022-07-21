import React, { FC, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import _ from 'lodash';
import moment from 'moment';
import Pagination from '../../../global/pagination';
import Table from '../../../global/table/table';
import { userAPI } from '../../../../APIs';
import { useRouter } from 'next/router';
interface Props {
  orderListData: any;
}
const OrderList: FC<Props> = ({ orderListData }) => {
  const route = useRouter();
  // console.log("========??????????", orderListData)
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);
  const [data, setData] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orderListData?.orders?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, data]);

  const columns = [
    {
      label: 'Order Number',
      path: 'order_number',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data.orderId}</td>
      ),
    },
    {
      label: 'Order status',
      path: 'order_status',
      content: (data: any, key: any, index: any) => (
        <div className="p-4">
          <button
            className={
              data?.orderStatus === 'Completed'
                ? 'bg-success mb-2 rounded border-0 px-3 py-2 text-white'
                : data?.orderStatus === 'Processing'
                ? 'bg-info mb-2 rounded border-0 px-3 py-2 text-white'
                : data?.orderStatus === 'Cancelled'
                ? 'bg-danger mb-2 rounded border-0 px-3 py-2 text-white'
                : 'bg-warning mb-2 rounded border-0 px-3 py-2 text-white'
            }
            disabled
          >
            <td className="text-center">{data?.orderStatus}</td>
          </button>
        </div>
      ),
    },
    {
      label: 'Payment status',
      path: 'payment_status',
      content: (data: any, key: any, index: any) => (
        <td className="p-4 text-center">{data?.paymentStatus}</td>
      ),
    },
    {
      label: 'Shipping status',
      path: 'shipping_status',
      content: (data: any, key: any, index: any) => (
        <td className="p-4 text-center">{data?.shippingStatus}</td>
      ),
    },
    {
      label: 'Customer Name',
      path: 'customer',
      content: (data: any, key: any, index: any) => (
        <td className="p-4 text-center">
          {`${data?.billingAddress.firstName} ${data?.billingAddress.lastName}`}
        </td>
      ),
    },
    {
      label: 'Customer Email',
      path: 'customer_email',
      content: (data: any, key: any, index: any) => (
        <td className="p-4 text-center">{data?.billingAddress.email}</td>
      ),
    },
    {
      label: 'Created on',
      path: 'created',
      content: (data: any, key: any, index: any) => (
        <td className="p-4 text-center">
          {moment(data?.orderedDate).format('lll')}
        </td>
      ),
    },
    {
      label: 'Order total',
      path: 'order_total',
      content: (data: any, key: any, index: any) => (
        <td className="p-4 text-center">{data?.totalCost}</td>
      ),
    },
    {
      label: 'View',
      path: 'id',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          <Link
            href={{
              pathname: `/Sales/Order/Edit/[id]`,
              query: { id: data?.orderId },
            }}
            passHref
          >
            <button className="btn btn-default">
              <span>
                <i className="bi bi-eye me-2 align-middle"></i>
              </span>
              View
            </button>
          </Link>
        </td>
      ),
    },
  ];
  return (
    <>
      <main className="px-5">
        <div
          className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2"
          style={{ paddingLeft: '10px' }}
        >
          <h1 className="h2">Orders</h1>
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

            <Table items={currentTableData} columns={columns} />

            <div>
              {orderListData.orders?.length > 1 ? (
                <Pagination
                  currentPage={currentPage}
                  totalCount={orderListData.orders?.length}
                  pageSize={PageSize}
                  setCurrentPage={setCurrentPage}
                  setPageSize={setPageSize}
                />
              ) : (
                'No data found'
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderList;
