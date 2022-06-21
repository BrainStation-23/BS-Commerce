import type { NextComponentType } from "next";
import React, { useState, useRef, useEffect } from "react";
// import { Menu } from "@headlessui/react";
import Buttons from "../../global/components/buttons/button";
import Link from "next/link";
// interface IICardData {
//   id: number;
//   meta: {
//     title: string;
//     price: string;
//     img: string;
//   };
//   quantity: string;
// }
// const CartDropdown = (props: { allCartList: IICardData[] }) => {
const CartDropdown = () => {
  const [cartTotal, setCartTotal] = useState(false);
  const componentRef = useRef();
  const [allCartList, setAllCartList] = useState([
    {
      id: Math.floor(Math.random() * 10 * Date.now() * 1),
      meta: {
        title: "Red Spinach/500gm",
        price: "53",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig14_9d050031-6a02-4a0c-ad56-c2dda1cce5d0_compact.jpg?v=1587984073",
      },
      quantity: 3,
    },
    {
      id: Math.floor(Math.random() * 10 * Date.now() * 3),
      meta: {
        title: "Cauliflower/1kg",
        price: "44",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig9_ef67d26b-f717-4bf3-82ec-5eae9aad5a11_compact.jpg?v=1587984831",
      },
      quantity: 2,
    },
    {
      id: Math.floor(Math.random() * 10 * Date.now()),
      meta: {
        title: "White Carrot/500gm",
        price: "24",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig6_1f6dc9c9-08a8-4008-b39a-478d0046362d_compact.jpg?v=1587983036",
      },
      quantity: 1,
    },
    {
      id: Math.floor(Math.random() * 10 * Date.now() * 8),
      meta: {
        title: "Poatat0/500gm",
        price: "5",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig4_cbb159dd-d3ba-4e07-9b56-5d54eb32aa81_compact.jpg?v=1587985338",
      },
      quantity: 4,
    },
  ]);
  // const CartDropdown = (props: any) => {

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          setCartTotal(false);
        }
      }
    }
  }, []);
  const dropdownData = () => {
    return allCartList.map((data) => {
      return (
        <div key={data.id}>
          <div className="group w-full flex items-center px-4 py-2 text-sm leading-5 text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            <div className="flex flex-col-4 items-center bg-white">
              <div className="col-span-2 ">
                <a href="#" className="">
                  <img
                    className="object-cover w-full h-36 rounded-t-lg w-30 rounded-none"
                    src={data.meta.img}
                    alt="Product Image"
                  />
                </a>
              </div>
              <div className="col-span-2 justify-between px-4 leading-normal">
                <div>
                  <a href="#" className="text-sm font-bold text-gray-900 mr-2">
                    {data.meta.title}
                  </a>
                </div>
                <div>
                  <div className="py-2">
                    <span className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      {data.quantity} &nbsp;
                    </span>
                    X &nbsp;
                    <span className="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                      $ {data.meta.price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <button>{cross}</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100"></div>
        </div>
      );
    });
  };
  return (
    <>
      <div
        ref={componentRef as any}
        className="flex items-center justify-center"
      >
        <div className="relative inline-block text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                onClick={(e) => setCartTotal(!cartTotal)}
              >
                {cartIcon}
              </button>
            </span>
          </div>
          {cartTotal && (
            <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg">
              <div className="rounded-md bg-white shadow-xs">
                {/* new div starts here */}
                <div className="py-1 overflow-y-auto h-60">
                  {dropdownData()}
                </div>
                {/* new div ends here */}
                <div className="flex justify-between p-4">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-base font-semibold">$175.00</span>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a href="/cart">
                    <Buttons
                      bgColor="black"
                      height={10}
                      width={68}
                      text={"VIEW CART"}
                    />
                  </a>
                </div>
                <div className="px-6 mb-4 flex justify-center">
                  <a href="/checkout">
                    <Buttons
                      bgColor="black"
                      height={10}
                      width={120}
                      text={"CHECKOUT"}
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
