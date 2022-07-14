import React from "react";

import { NextComponentType } from "next";
import { useAppSelector } from "customHooks/hooks";

const CartProductList: NextComponentType = () => {

  const cartData = useAppSelector(state => state.persistedReducer.cart.allCartItems);

  return (
    <>
      {cartData.map((data) => {
        return (
          <React.Fragment key={data.productId}>
            <div className="row text-sm mt-5 mr-3">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap items-center">
                  <div className="relative">
                    <img
                      src={data?.product?.photos[0]?.url}
                      className="rounded-lg border w-20"
                    />
                    <span className="absolute -top-2 -right-3 p-0.5 text-center text-xs font-semibold text-white rounded-full" style={{ background: "#808080"}}>
                      <svg
                        className="w-4 h-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                      {data?.quantity}
                    </span>
                  </div>
                  <div className="ml-3 sm:ml-3 md:ml-5 lg:ml-5 xl:ml-2">
                    <p className="text-xs sm:text-xs md:text-sm lg:text-normal xl:text-normal font-semibold">{data?.product?.info?.name}</p>
                    {data?.product?.info?.shortDescription && (
                      <div className="text-xs text-gray-500">
                        {data?.product?.info?.shortDescription}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap justify-end font-semibold">
                  ${data?.product?.info?.price}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CartProductList;
