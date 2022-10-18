import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import type { NextComponentType } from 'next';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';

import Table from '@/modules/cart/components/cartProducts/tableView/table';
import ItemsList from '@/modules/cart/components/cartProducts/listView/itemsList';

const CartDetails: NextComponentType = () => {
  const { t } = useTranslation();

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  return (
    <>
        <div className="flex hidden justify-center md:flex">
          {cartData?.length > 0 ? (
            <Table />
          ) : (
            <>
              <div className="container mx-5 mt-5 w-full flex-col justify-start gap-y-2">
                <p className="text-3xl">{t('cart:cart')}</p>
                <p className="text-2xl">{t('cart:empty_cart')}</p>
                <p className="text-sm">
                  {t('common:continue_browsing')}{' '}
                  <span className=" hover:text-primary">
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
            <ItemsList />
          </div>
        ) : (
          <div className=" mx-5 mt-5 flex-col justify-center gap-y-2 md:hidden">
            <p className="text-2xl">{t('cart:cart')}</p>
            <p className="text-xl">{t('cart:empty_cart')}</p>
            <p className="text-xs">
              {t('common:continue_browsing')}{' '}
              <span className=" hover:text-primary">
                <Link href="/" passHref>
                  {t('common:here')}
                </Link>
              </span>
            </p>
            <hr className="mt-14 mb-10" />
          </div>
        )}
    </>
  );
};

export default CartDetails;
