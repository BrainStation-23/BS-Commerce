import React, { FC, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import _ from 'lodash';
import moment from 'moment';
import Pagination from '../../../global/pagination';
import Table from '../../../global/table/table';
interface Props {
  orderListData: any;
}
const OrderList: FC<Props> = ({ orderListData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orderListData?.orders?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, orderListData]);

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
        <td className="text-center">
          <button
            className={
              data?.orderStatus === 'Completed'
                ? 'btn-sm bg-success rounded border-0 px-2 mt-1 text-white'
                : data?.orderStatus === 'Processing'
                ? 'btn-sm bg-info rounded border-0 px-2 mt-1 text-white'
                : data?.orderStatus === 'Cancelled'
                ? 'btn-sm bg-danger mbrounded border-0 px-2 mt-1 text-white'
                : 'btn-sm bg-warning rounded border-0 px-2 mt-1 text-white'
            }
            disabled
          >
            <td className="text-center">{data?.orderStatus}</td>
          </button>
        </td>
      ),
    },
    {
      label: 'Payment status',
      path: 'payment_status',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data?.paymentStatus}</td>
      ),
    },
    {
      label: 'Shipping status',
      path: 'shipping_status',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data?.shippingStatus}</td>
      ),
    },
    {
      label: 'Customer Name',
      path: 'customer',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          {`${data?.billingAddress.firstName} ${data?.billingAddress.lastName}`}
        </td>
      ),
    },
    {
      label: 'Created on',
      path: 'created',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          {moment(data?.orderedDate).format('lll')}
        </td>
      ),
    },
    {
      label: 'Order total',
      path: 'order_total',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data?.totalCost}</td>
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
      <main className="px-1">
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
              {orderListData.orders?.length ? (
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
