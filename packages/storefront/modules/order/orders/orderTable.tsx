import { OrderByUserId } from '@bs-commerce/models';
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import TableData from '@/modules/order/orders/tableData';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  orderList: OrderByUserId[];
}
const OrderTable: React.FC<Props> = ({ orderList }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-5">
        <div className="overflow-x-auto rounded-lg border">
          <div className="inline-block min-w-full py-2 sm:px-4">
            <table className="inline-table w-full text-left text-sm">
              <thead className="">
                <tr className="border-b">
                  <th scope="col" className="px-5 py-4">
                    {t('order:OrderID')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('order:date')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('order:status')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('order:payment_method')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('order:product_cost')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('order:action')}
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
