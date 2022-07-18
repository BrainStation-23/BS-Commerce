import React from 'react';
import type { NextComponentType } from 'next';
import TableData from './tableData';
import moment from 'moment';
import { IOrderResponseData } from 'models';
interface Props {
  singleOrder: IOrderResponseData;
}

const DataTable: React.FC<Props> = ({ singleOrder }: Props) => {
  return (
    <>
      <div className="xl:px-30 2xl:40 py-20 md:px-2 lg:px-20">
        <div
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Order Number{' '}
          <div
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#16A34A' }}
          >
            #{singleOrder.orderId}
          </div>
        </div>
        <div>
          <div
            style={{
              border: '1px solid LightGray',
              borderRadius: '5px',
              boxShadow: '0 0 2px',
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            <b>Order Summery</b>
            <div className="d-flex justify-content-between">
              <div>
                Order Created : {moment(singleOrder.orderedDate).format('ll')}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                Order Time : {moment(singleOrder.orderedDate).format('LT')}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>Subtotal : ${singleOrder.totalCost}</div>
            </div>

            <div className="d-flex justify-content-between">
              <div>Delivery Fee : $00</div>
            </div>
          </div>

          <div
            style={{
              border: '1px solid LightGray',
              borderRadius: '10px',
              boxShadow: '0 0 2px',
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            <b>Delivery Address</b>

            <div className="d-flex justify-content-between">
              <div>
                Address line: {singleOrder.shippingAddress.addressLine1}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                Flat/Building Name: {singleOrder.shippingAddress.addressLine2}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Postcode: {singleOrder.shippingAddress.postCode}</div>
            </div>
          </div>

          <div
            style={{
              border: '1px solid LightGray',
              borderRadius: '10px',
              boxShadow: '0 0 2px',
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            <b>Customer Details</b>

            <div className="d-flex justify-content-between">
              <div>
                Customer Name: {singleOrder.shippingAddress.firstName}{' '}
                {singleOrder.shippingAddress.lastName}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>Phone Number: {singleOrder.shippingAddress.phoneNumber}</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Email: {singleOrder.shippingAddress.email}</div>
            </div>
          </div>
        </div>

        {/* {singleOrder.billingAddress.firstName} */}
        <table className="border-collapse border border-slate-400">
          <thead className="">
            <tr>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Image
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Product
              </th>
              <th className="border border-slate-300 bg-slate-200 px-10 py-4 text-base">
                Price
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Quantity
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-6">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <TableData singleOrder={singleOrder} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
