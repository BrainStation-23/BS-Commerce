import React, { useState } from 'react';
import type { NextComponentType } from 'next';
import { useAppSelector, useAppDispatch } from 'store/hooks/index';
import useTranslation from 'next-translate/useTranslation';
import SingleItem from '@/modules/cart/components/cartProducts/listView/singleItem';
import { deleteCart } from 'store/slices/cartSlice';
import { userAPI } from 'APIs';
import Link from 'next/link';

const ItemsList: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);
  const [total, setTotal] = useState(totalCartPrice);

  
  const handleDeleteAllCartItem = async () => {
    await userAPI.deleteAllCartItem();
    dispatch(deleteCart());
  };

  return (
    <>
      <div>
        {cartData ? (
          cartData?.map((data, index) => {
            return (
              <SingleItem
                key={data.productId}
                data={data}
                setTotal={setTotal}
                total={total}
              />
            );
          })
        ) : (
          <></>
        )}
        <div className="flex flex-wrap justify-center">
          <span className="mr-2 text-base font-semibold">
            {t('common:total')}
          </span>
          <span>${total}</span>
        </div>
      </div>
      <div className="my-6 flex flex-col justify-center gap-y-5 px-4 md:hidden">
          {cartData?.length > 0 && (
            <Link href="/" passHref>
              <button className="w-full bg-black py-2 text-sm text-white hover:bg-primary dark:hover:bg-dark_primary">
                {t('common:continue_shopping').toUpperCase()}
              </button>
            </Link>
          )}

          {cartData?.length > 0 && (
            <button
              className="w-full bg-black py-2 text-sm text-white hover:bg-primary dark:bg-dark_primary dark:hover:border dark:hover:bg-black"
              onClick={handleDeleteAllCartItem}
            >
             {t('cart:clear_cart').toUpperCase()}
            </button>
          )}
        </div>
    </>
  );
};

export default ItemsList;
