import React from 'react';
import ShowData from './showData';
import Link from 'next/link';
import { IOrderResponseData } from 'models';

interface Props {
  storedOrderProducts: IOrderResponseData[];
}

const DataTable: React.FC<Props> = ({ storedOrderProducts }: Props) => {
  return (
    <>
      <div className="pt-10 pb-6">
        <table className="border-collapse border border-slate-400 w-full ">
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
              <th className="border border-slate-300 bg-slate-200 py-4 text-base md:px-2 xl:px-6">
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
      </div>
    </>
  );
};

export default DataTable;
