import React from "react";
import CartProductList from "./cartProductList";

const OrderedProducts = () => {
  return (
    <div className="w-full">
      <div className="row mx-0 sm:mx-0 lg:mx-12 xl:mx-12 my-7 px-0 sm:px-2 md:px-5 lg:px-0 xl:px-0 overflow-hidden">
        <div className="flex flex-col divide-y-2 h-full overflow-hidden">
          <div className="overflow-y-scroll h-60">
            <CartProductList />
          </div>
          <div className="mt-5">
            <div className="row text-sm">
              <div className="flex flex-wrap justify-between mt-4">
                <p className="text-gray-600/100">Subtotal</p>
                <p className="font-semibold">$11.39</p>
              </div>
              <div className="flex flex-wrap justify-between mt-2">
                <p className="text-gray-600/100 ">Shipping</p>
                <p className="font-semibold">Free</p>
              </div>
              <div className="flex flex-wrap justify-between mt-2">
                <p className="text-gray-600/100">Taxes</p>
                <p className="font-semibold">$2.33</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="flex flex-wrap justify-between mt-4">
                <p className="text-gray-600/100">Total</p>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs text-gray-500">USD</p>
                  <p className="text-2xl font-semibold">$13.72</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedProducts;
