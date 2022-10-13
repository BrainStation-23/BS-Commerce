import { IOrderProduct, OrderByUserId } from '@bs-commerce/models';
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import TableData from '@/modules/order/singleOrderDetails/productTable/tableData';
import { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  productList: IOrderProduct[];
}

const ProductTable: React.FC<Props> = ({ productList }) => {
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
                    {t('common:image')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('common:product')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('common:price')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('common:quantity')}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {t('common:total')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {productList?.map((singleProduct, index) => {
                  return (
                    <React.Fragment key={singleProduct?.productId}>
                      <tr
                        className={
                          index === productList?.length - 1
                            ? 'border-none'
                            : 'border-b'
                        }
                      >
                        <TableData singleProduct={singleProduct} />
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

export default ProductTable;
