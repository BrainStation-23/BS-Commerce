import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';

import { deleteCart } from 'store/slices/cartSlice';
import { useAppDispatch } from 'store/hooks/index';

import TableData from '@/modules/cart/components/cartProducts/tableView/tableData';
import { userAPI } from 'APIs';

const Table: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  const handleDeleteAllCartItem = async () => {
    await userAPI.deleteAllCartItem();
    dispatch(deleteCart());
  };

  return (
    <>
      <div className="container px-4 py-20">
        <div className="overflow-x-auto rounded-lg border">
          <div className="inline-block min-w-full">
            <table className="inline-table w-full text-left text-sm">
              <thead className="text-center">
                <tr className="border-b">
                  <th scope="col" className="px-5 py-4 capitalize">
                    {t('common:image')}
                  </th>
                  <th scope="col" className="px-5 py-4 capitalize">
                    {t('common:products')}
                  </th>
                  <th scope="col" className="px-5 py-4 capitalize">
                    {t('common:price')}
                  </th>
                  <th scope="col" className="px-5 py-4 capitalize">
                    {t('common:quantity')}
                  </th>
                  <th scope="col" className="px-5 py-4 capitalize">
                    {t('common:total')}
                  </th>
                  <th scope="col" className="px-5 py-4 capitalize">
                    {t('common:remove')}
                  </th>
                </tr>
              </thead>

              <tbody>
                <TableData />
              </tbody>
            </table>
            <div className="float-right mt-5 mb-4 flex gap-x-4 px-4">
              <button
                className="bg-black p-3 text-xs text-white hover:bg-primary dark:bg-dark_primary dark:hover:border dark:hover:bg-black"
                onClick={() => {
                  router.push('/');
                }}
              >
                {t('common:continue_shopping').toUpperCase()}
              </button>
              <button
                className="bg-black py-3 px-7 text-xs text-white hover:bg-primary dark:bg-dark_primary dark:hover:border dark:hover:bg-black"
                onClick={handleDeleteAllCartItem}
              >
                {t('cart:clear_cart').toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
