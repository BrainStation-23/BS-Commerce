import { OrderByUserId } from 'models';
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import TableData from '@/components/order/orders/tableData';

interface Props {
  orderList: OrderByUserId[];
}
const OrderTable: React.FC<Props> = ({ orderList }) => {
  return (
    <>
      <div className="mt-5">
        <div className="overflow-x-auto rounded-lg border">
          <div className="inline-block min-w-full py-2 sm:px-4">
            <table className="inline-table w-full text-left text-sm">
              <thead className="">
                <tr className="border-b">
                  <th scope="col" className="px-5 py-4">
                    Order ID
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Payment Method
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Product Cost
                  </th>
                  <th scope="col" className="px-5 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderList?.map((singleOrder, index) => {
                  return (
                    <React.Fragment key={singleOrder?.orderId}>
                      <tr
                        className={
                          index === orderList?.length - 1
                            ? 'border-none'
                            : 'border-b'
                        }
                      >
                        <TableData singleOrder={singleOrder} />
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
