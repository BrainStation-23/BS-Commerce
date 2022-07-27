import React from 'react';
import Link from 'next/link';

import type { NextComponentType } from 'next';
import { deleteCart } from 'toolkit/cartSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';

import Buttons from '@/components/global/components/buttons/button';
import DataTable from '@/components/cart/subcomponents/cartTable/dataTable';
import ItemsLists from '@/components/cart/subcomponents/cartTable/itemListSmall';

const CartDetails: NextComponentType = () => {
  const dispatch = useAppDispatch();

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  return (
    <>
      <div>
        <div className="flex hidden justify-center md:flex">
          {cartData.length > 0 ? (
            <DataTable />
          ) : (
            <>
              <div className="container mx-5 mt-5 w-full flex-col justify-start gap-y-2">
                <p className="text-3xl">Shopping Cart</p>
                <p className="text-2xl">Your cart is currently empty.</p>
                <p className="text-sm">
                  Continue browsing{' '}
                  <span className=" hover:text-green-600">
                    <Link href="/" passHref>
                      here
                    </Link>
                  </span>
                </p>
                <hr className="mt-14 mb-10" />
              </div>
            </>
          )}
        </div>
        {cartData.length > 0 ? (
          <div className="md:hidden">
            <ItemsLists />
          </div>
        ) : (
          <div className=" mx-5 mt-5 flex-col justify-center gap-y-2 md:hidden">
            <p className="text-2xl">Shopping Cart</p>
            <p className="text-xl">Your cart is currently empty.</p>
            <p className="text-xs">
              Continue browsing{' '}
              <span className=" hover:text-green-600">
                <Link href="/" passHref>
                  here
                </Link>
              </span>
            </p>
            <hr className="mt-14 mb-10" />
          </div>
        )}
        <div className="my-6 flex flex-col justify-center gap-y-5 px-4 md:hidden">
          {cartData.length > 0 && (
            <Link href="/" passHref>
              <button className="w-full bg-black py-2 text-sm text-white hover:bg-green-600">
                CONTINUE SHOPPING
              </button>
            </Link>
          )}

          {cartData.length > 0 && (
            <button
              className="w-full bg-black py-2 text-sm text-white hover:bg-green-600"
              onClick={() => {
                dispatch(deleteCart());
              }}
            >
              CLEAR CART
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDetails;
