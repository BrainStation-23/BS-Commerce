import React, { useState } from 'react';
import type { NextComponentType } from 'next';
import { useAppSelector, useAppDispatch } from 'store/hooks/index';
import useTranslation from 'next-translate/useTranslation';
import SingleItem from '@/modules/cart/components/cartProducts/listView/singleItem';
import { deleteCart } from 'store/slices/cartSlice';
import { userAPI } from 'APIs';
import Link from 'next/link';
import ButtonPrimary from '@/modules/common/buttons/buttonPrimary';
import { useRouter } from 'next/router';

const ItemsList: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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
          <ButtonPrimary
            onClickFunction={() => {
              router.push('/');
            }}
            className="text-sm "
            text={t('common:continue_shopping').toUpperCase()}
          />
        )}
        {cartData?.length > 0 && (
          <ButtonPrimary
            onClickFunction={handleDeleteAllCartItem}
            className="text-sm"
            text={t('cart:clear_cart').toUpperCase()}
          />
        )}
      </div>
    </>
  );
};

export default ItemsList;
