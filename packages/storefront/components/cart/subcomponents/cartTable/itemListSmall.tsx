import type { NextComponentType } from "next";
import React, { useState } from "react";
interface Properties {
  title: string;
  price: string;
  image: string;
  quantity: string;
}
const ItemsLists: React.FC<Properties> = (props) => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col-3 items-center bg-white rounded-lg border">
          <div className="mr-4">
            <img
              className="object-cover w-full h-48 rounded-t-lg w-30 rounded-none"
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig6_1f6dc9c9-08a8-4008-b39a-478d0046362d_compact.jpg?v=1587983036"
              alt=""
            />
          </div>
          <div className="col-span-2 justify-between px-4 leading-normal">
            <h5 className="mb-2 text-lg font-bold text-gray-900 mb-3">
              {props.title}
            </h5>
            <div>
              <div className="box-content h-2 w-32 py-4 border-2 mb-2">
                <div className="flex justify-between">
                  <button className="ml-2">+</button>
                  <div className="px-2">{props.quantity}</div>
                  <button className="mr-2">-</button>
                </div>
                <span></span>
              </div>
              <div className="py-2">
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  ${props.price}
                </p>
              </div>
              <div>
                <span className="text-base font-semibold">Total</span>
                <span>$70.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsLists;
