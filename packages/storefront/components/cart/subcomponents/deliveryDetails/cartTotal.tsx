import { useAppSelector } from "customHooks/hooks";
import type { NextComponentType } from "next";
import React, { useState } from "react";
import Buttons from "../../../global/components/buttons/button";
const CartTotal: NextComponentType = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price * data.quantity;
  }, 0);

  return (
    <>
      <div className="grid lg:row-span-2 xl:row-span-2">
        <div className="max-w-xl  overflow-hidden shadow-lg">
          <div className="bg-black w-full">
            <div className="text-white px-4 py-2 text-base font-medium">
              CART TOTALS
            </div>
          </div>
          <div className="p-6 flex justify-center">
            <table className="border-collapse border border-slate-400">
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 md:px-6 xl:px-8 ml-20 py-10">
                    <span className="mr-8 md:mr-24 xl:mr-24 font-semibold">
                      Subtotal
                    </span>
                  </td>
                  <td className="border border-slate-300 px-4 md:px-6 xl:px-8 ml-20 py-10">
                    <span className="mr-12 md:mr-24 xl:mr-24 font-semibold">
                      ${totalCartPrice}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-8 ml-20 py-10">
                    <span className="md:mr-24 xl:mr-24 font-semibold">
                      Total
                    </span>
                  </td>
                  <td className="border border-slate-300 px-8 py-10">
                    <span className="md:mr-24 xl:mr-24">${totalCartPrice}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end py-4 px-2">
            <Buttons
              bgColor="black"
              height={12}
              width={150}
              text={"PROCEED TO CHECKOUT"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
