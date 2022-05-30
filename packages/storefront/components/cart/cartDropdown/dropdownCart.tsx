import type { NextComponentType } from "next";
import React from "react";
import { Menu } from "@headlessui/react";
import Buttons from "../../global/components/buttons/button";
interface IICardData {
  id: number;
  meta: {
    title: string;
    price: string;
    img: string;
  };
  quantity: string;
}
const CartDropdown = (props: { cartDatas: IICardData[] }) => {
  const dropdownData = () => {
    return props.cartDatas.map((data) => {
      return (
        <div key="data.id">
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
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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
      <div className="flex items-center justify-center mt-24">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <Menu.Button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  m
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Menu.Button>
            </span>
          </div>
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg">
            <div className="rounded-md bg-white shadow-xs">
              {/* new div starts here */}
              <div className="py-1 overflow-y-auto h-60">{dropdownData()}</div>
              {/* new div ends here */}
              <div className="flex justify-between p-4">
                <span className="text-base font-semibold">Total</span>
                <span className="text-base font-semibold">$175.00</span>
              </div>
              <div className="px-6 py-2 flex justify-center">
                <Buttons
                  bgColor="black"
                  height={10}
                  width={68}
                  text={"VIEW CART"}
                />
              </div>
              <div className="px-6 mb-4 flex justify-center">
                <Buttons
                  bgColor="black"
                  height={10}
                  width={120}
                  text={"CHECKOUT"}
                />
              </div>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
};

export default CartDropdown;
