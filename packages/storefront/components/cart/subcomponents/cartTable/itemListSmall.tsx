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
          <div className="mr-4 relative">
            <img
              className="object-cover w-full h-48 rounded-t-lg w-30 rounded-none"
              src={props.image}
              alt="Product Image"
            />
            <span
              className="absolute -top-2 -right-3 p-0.5 text-center text-xs font-semibold text-white rounded-full"
              style={{ background: "#808080" }}
            >
              <svg
                className="w-4 h-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              X
            </span>
          </div>
          <div className="col-span-2 justify-between px-4 leading-normal">
            <h5 className="mb-2 text-lg font-bold text-gray-900 mb-3">
              {props.title}
            </h5>
            <div>
              <div className="box-content h-4 w-32 py-4 border-2 mb-2">
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
