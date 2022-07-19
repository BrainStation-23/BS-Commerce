import type { NextComponentType } from 'next';
import React, { useState, useRef, useEffect } from 'react';

import { ResponseItem } from 'models';
import { deleteCartItem } from 'toolkit/cartSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import Buttons from '@/components/global/components/buttons/button';

const CartDropdown: NextComponentType = () => {
  const componentRef = useRef();
  const dispatch = useAppDispatch();

  const [cartTotal, setCartTotal] = useState(false);

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);

  const handleCartItemDelete = async (product: ResponseItem) => {
    dispatch(deleteCartItem(product));
  };

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
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
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
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
    return cartData?.map((cartData, index) => {
      return (
        <div key={cartData.productId}>
          <div className='flex items-center justify-between mr-4'>
            <div className="group flex h-auto w-full items-center px-4 py-2 text-sm leading-5 text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
              <div className="flex-col-4 flex items-center bg-white">
                <div className="col-span-2">
                  <a href="#" className="">
                    <img
                      src={cartData?.product?.photos[0]?.url}
                      alt="Product Image"
                      height={100}
                      width={100}
                    />
                  </a>
                </div>
                <div className="col-span-2 justify-between px-4 leading-normal">
                  <div>
                    <a
                      href="#"
                      className="mr-2 text-sm font-bold text-gray-900"
                    >
                      {cartData?.product?.info?.name}
                    </a>
                  </div>
                  <div>
                    <div className="py-2">
                      <span className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        {cartData?.quantity} &nbsp;
                      </span>
                      X &nbsp;
                      <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                        $ {cartData?.product?.info?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-16 mb-16">
              <button onClick={() => handleCartItemDelete(cartData)}>
                {cross}
              </button>
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
          <div className="hover:text-green-600">
            <button
              type="button"
              className="focus:shadow-outline-blue inline-flex w-full justify-center text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-green-600 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800"
              onClick={(e) => setCartTotal(!cartTotal)}
            >
              {cartIcon}
              <p className="badge badge-light ">{cartData?.length}</p>
            </button>
          </div>
          {cartTotal && (
            <div className="absolute right-0 mt-2 h-auto w-96 origin-top-right rounded-md ">
              <div className=" rounded-md bg-white">
                {/* new div starts here */}
                <div className={cartData.length ? "h-48 overflow-y-scroll py-1 border-x-2": "h-20 border"}>
                  {cartData.length > 0 ? (
                    dropdownData()
                  ) : (
                    <div className="p-5 text-lg">
                      Your cart is currently empty
                    </div>
                  )}
                </div>
                {/* new div ends here */}
                {cartData.length > 0 ? (
                  <>
                    <div className="flex justify-between p-6 border-x-2">
                      <span className="text-base font-semibold">Total</span>
                      <span className="text-base font-semibold">
                        ${totalCartPrice}
                      </span>
                    </div>
                    <div className="px-6 py-2 border-x-2">
                      <a href="/cart">
                        <Buttons
                          bgColor="bg-slate-300"
                          height={10}
                          text={'VIEW CART'}
                        />
                      </a>
                    </div>
                    <div className="mb-4 px-6 pb-5 border-x-2 border-b-2">
                      <a href="/checkout">
                        <Buttons
                          bgColor="bg-slate-300"
                          height={10}
                          text={'CHECKOUT'}
                        />
                      </a>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
