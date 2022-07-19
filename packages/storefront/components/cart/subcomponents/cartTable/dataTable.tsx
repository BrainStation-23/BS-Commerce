import React from 'react';

import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';

import { deleteCart } from 'toolkit/cartSlice';
import { useAppDispatch } from 'customHooks/hooks';

import TableData from '@/components/cart/subcomponents/cartTable/tableData';

const DataTable: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <div className="container px-4 py-20">
        <div className="">
          <table className="w-full border-collapse border border-slate-400">
            <thead className="">
              <tr>
                <th className="border border-slate-300 bg-slate-200 px-16 py-4 text-base md:px-8">
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
                <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                  Remove
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
                    className="bg-black text-xs hover:bg-green-600"
                    onClick={() => {
                      router.push('/');
                    }}
                  >
                    CONTINUE SHOPPING
                  </button>
                </th>
                <th className="p-4">
                  <button
                    style={{
                      color: 'white',
                      height: '39px',
                      width: '120px',
                    }}
                    className="bg-black text-xs hover:bg-green-600"
                    onClick={() => {
                      dispatch(deleteCart());
                    }}
                  >
                    CLEAR CART
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
