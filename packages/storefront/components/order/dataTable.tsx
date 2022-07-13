import React, { useState } from 'react';
import type { NextComponentType } from 'next';
import ShowData from './showData';
import Link from 'next/link';
import { IOrderResponseData } from 'models';

interface Props {
  storedOrderProducts: IOrderResponseData[];
}

const DataTable: React.FC<Props> = ({ storedOrderProducts }: Props) => {

  return (
    <>
      <div className="xl:px-30 2xl:40 py-20 md:px-2 lg:px-20">
        <table className="border-collapse border border-slate-400">
          <thead className="">
            <tr>
              <th className="border border-slate-300 bg-slate-200 px-16 py-4 text-base md:px-8">
                Order ID
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Status
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Order Date
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Payment Method
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                Product Cost
              </th>
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-10">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {storedOrderProducts?.length > 0
              ? storedOrderProducts?.map((data: any) => (
                  <ShowData key={data.orderId} data={data} />
                ))
              : "You haven't placed any order yet"}
          </tbody>
        </table>
        <div className="mt-8" style={{ textAlign: 'center' }}>
          <button className="rounded-md bg-green-600 py-2 px-6 font-light text-white transition-all duration-200 ease-linear hover:bg-stone-900">
            <Link href="/">Go to home page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default DataTable;
