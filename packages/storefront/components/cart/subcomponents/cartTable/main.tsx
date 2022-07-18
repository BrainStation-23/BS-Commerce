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
          <DataTable />
        </div>
        {cartData.length > 0 ? (
          <div className="md:hidden">
            <ItemsLists />
          </div>
        ) : (
          <div className="my-5 mx-5 flex-col justify-center text-xl md:hidden">
            <p>Your cart is currently empty.</p>
            <p>
              Continue browsing{' '}
              <span className="hover:text-green-600">
                <Link href="/" passHref>
                  here
                </Link>
              </span>
            </p>
          </div>
        )}
        <div className="my-6 flex flex-col justify-center gap-y-5 px-4 md:hidden">
          {cartData.length > 0 && (
            <button className="w-full bg-black py-2 text-sm text-white hover:bg-green-600">
              UPDATE CART
            </button>
          )}

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
