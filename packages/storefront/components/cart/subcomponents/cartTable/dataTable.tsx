import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';

import { deleteCart } from 'store/slices/cartSlice';
import { useAppDispatch } from 'store/hooks/index';

import TableData from '@/components/cart/subcomponents/cartTable/tableData';
import { userAPI } from 'APIs';

const DataTable: NextComponentType = () => {
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
        <div className="">
          <table className="w-full border-collapse border border-slate-400">
            <thead className="">
              <tr className="text-center">
                <th className="border border-slate-300 bg-slate-200 px-16 py-4 text-base capitalize dark:bg-black md:px-8">
                  {t('common:image').toLowerCase()}
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base capitalize dark:bg-black md:px-2 xl:px-10">
                  {t('common:products')}
                </th>
                <th className="border border-slate-300 bg-slate-200 px-10 py-4 text-base capitalize dark:bg-black">
                  {t('common:price').toLowerCase()}
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base capitalize dark:bg-black md:px-2 xl:px-10">
                  {t('common:quantity').toLowerCase()}
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base capitalize dark:bg-black md:px-2 xl:px-6">
                  {t('common:total').toLowerCase()}
                </th>
                <th className="border border-slate-300 bg-slate-200 py-4 text-base capitalize dark:bg-black md:px-2 xl:px-10">
                  {t('common:remove').toLowerCase()}
                </th>
              </tr>
            </thead>
            <tbody>
              <TableData />
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th className="p-4"></th>
                <th className="p-4">
                  <button
                    style={{
                      color: 'white',
                      height: '39px',
                      width: '150px',
                    }}
                    className="bg-black text-xs hover:bg-primary dark:bg-dark_primary dark:hover:border dark:hover:bg-black"
                    onClick={() => {
                      router.push('/');
                    }}
                  >
                    {t('common:continue_shopping').toUpperCase()}
                  </button>
                </th>
                <th className="p-4">
                  <button
                    style={{
                      color: 'white',
                      height: '39px',
                      width: '120px',
                    }}
                    className="bg-black text-xs hover:bg-primary dark:bg-dark_primary dark:hover:border dark:hover:bg-black"
                    onClick={handleDeleteAllCartItem}
                  >
                    {t('cart:clear_cart').toUpperCase()}
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
