import React from "react";

import { useRouter } from "next/router";
import type { NextComponentType } from "next";

import { deleteCart } from "toolkit/cartSlice";
import { useAppDispatch } from "customHooks/hooks";

import TableData from "@/components/cart/subcomponents/cartTable/tableData";

const DataTable: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <div className="md:px-2 lg:px-20 xl:px-30 2xl:40 py-20">
        <table className="border-collapse border border-slate-400">
          <thead className="">
            <tr>
              <th className="border border-slate-300 px-16 py-4 md:px-8 text-base bg-slate-200">
                Image
              </th>
              <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
                Product
              </th>
              <th className="border border-slate-300 px-10 py-4 text-base bg-slate-200">
                Price
              </th>
              <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
                Quantity
              </th>
              <th className="border border-slate-300 md:px-2 xl:px-6 py-4 text-base bg-slate-200">
                Total
              </th>
              <th className="border border-slate-300 md:px-2 xl:px-10 py-4 text-base bg-slate-200">
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
              <th className="p-4">
              </th>
              <th className="p-4">
                <button
                  style={{
                    background: "black",
                    color: "white",
                    height: "39px",
                    width: "150px",
                  }}
                  className="text-xs"
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
                    background: "black",
                    color: "white",
                    height: "39px",
                    width: "120px",
                  }}
                  
                  className="text-xs"
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
    </>
  );
};

export default DataTable;
