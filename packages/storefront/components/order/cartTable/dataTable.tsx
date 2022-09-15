import React from 'react';
import TableData from './tableData';
import moment from 'moment';
import { OrderByUserId } from '@bs-commerce/models';
interface Props {
  singleOrder: OrderByUserId;
}

const DataTable: React.FC<Props> = ({ singleOrder }: Props) => {
  return (
    <>
      <div>
        <div
          className="flex justify-center py-4"
          style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Order Number{' '}
          <div
            style={{ fontSize: '23px', fontWeight: 'bold', color: '#16A34A' }}
          >
            #{singleOrder.orderId}
          </div>
        </div>
        <div className="px-4">
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

            <div>
              <div>Subtotal : ${singleOrder.totalCost}</div>
            </div>

            <div>
              <div>Delivery Fee : $00</div>
            </div>

            <div>
              <div>Payment Method : {singleOrder.paymentMethod}</div>
            </div>
            {singleOrder.paymentMethod !== 'Cash on Delivery' ? (
              <div>
                <div>Card no : {singleOrder.paypalPaymentId}</div>
              </div>
            ) : (
              ''
            )}
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
                Address line: {singleOrder?.shippingAddress?.addressLine1}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                Flat/Building Name: {singleOrder?.shippingAddress?.addressLine2}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Postcode: {singleOrder?.shippingAddress?.postCode}</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                Phone Number: {singleOrder?.shippingAddress?.phoneNumber}
              </div>
            </div>
          </div>

          {/* <div
            style={{
              // border: '1px solid LightGray',
              // borderRadius: '10px',
              // boxShadow: '0 0 2px',
              // marginBottom: '20px',
              // padding: '10px',
            }}
          >
            <b>Customer Details</b>

            <div className="d-flex justify-content-between">
              <div>
                Customer Name: {singleOrder?.shippingAddress?.firstName}{' '}
                {singleOrder?.shippingAddress?.lastName}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                Phone Number: {singleOrder?.shippingAddress?.phoneNumber}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Email: {singleOrder?.shippingAddress?.email}</div>
            </div>
          </div> */}
        </div>

        {/* {singleOrder.billingAddress.firstName} */}
        <div className="px-4">
          <table className="border-collapse border border-slate-400">
            <thead className="">
              <tr>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                  Image
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                  Product
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base xl:px-6">
                  Price
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-4">
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
      </div>
    </>
  );
};

export default DataTable;
