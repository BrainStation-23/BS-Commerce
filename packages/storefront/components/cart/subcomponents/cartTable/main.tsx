import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import type { NextComponentType } from 'next';
import { deleteCart } from 'toolkit/cartSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';

import Buttons from '@/components/global/components/buttons/button';
import DataTable from '@/components/cart/subcomponents/cartTable/dataTable';
import ItemsLists from '@/components/cart/subcomponents/cartTable/itemListSmall';
import { userAPI } from 'APIs';

const CartDetails: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const handleDeleteAllCartItem = async () => {
    await userAPI.deleteAllCartItem();
    dispatch(deleteCart());
  };

  return (
    <>
      <div>
        <div className="flex hidden justify-center md:flex">
          {cartData?.length > 0 ? (
            <DataTable />
          ) : (
            <>
              <div className="container mx-5 mt-5 w-full flex-col justify-start gap-y-2">
                <p className="text-3xl">{t('cart:cart')}</p>
                <p className="text-2xl">{t('cart:empty_cart')}</p>
                <p className="text-sm">
                  {t('common:continue_browsing')}{' '}
                  <span className=" hover:text-green-600">
                    <Link href="/" passHref>
                      {t('common:here')}
                    </Link>
                  </span>
                </p>
                <hr className="mt-14 mb-10" />
              </div>
            </>
          )}
        </div>
        {cartData?.length > 0 ? (
          <div className="md:hidden">
            <ItemsLists />
          </div>
        ) : (
          <div className=" mx-5 mt-5 flex-col justify-center gap-y-2 md:hidden">
            <p className="text-2xl">{t('cart:cart')}</p>
            <p className="text-xl">{t('cart:empty_cart')}</p>
            <p className="text-xs">
              {t('common:continue_browsing')}{' '}
              <span className=" hover:text-green-600">
                <Link href="/" passHref>
                  {t('common:here')}
                </Link>
              </span>
            </p>
            <hr className="mt-14 mb-10" />
          </div>
        )}
        <div className="my-6 flex flex-col justify-center gap-y-5 px-4 md:hidden">
          {cartData?.length > 0 && (
            <Link href="/" passHref>
              <button className="w-full bg-black py-2 text-sm text-white hover:bg-green-600">
                {t('common:continue_shopping').toUpperCase()}
              </button>
            </Link>
          )}

          {cartData?.length > 0 && (
            <button
              className="w-full bg-black py-2 text-sm text-white hover:bg-green-600 dark:bg-[#40a944] dark:hover:border dark:hover:bg-black"
              onClick={handleDeleteAllCartItem}
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
