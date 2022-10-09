import React, { useState } from 'react';
import type { NextComponentType } from 'next';
import { useAppSelector } from 'customHooks/hooks';
import useTranslation from 'next-translate/useTranslation';
import ShowItemSmall from '@/components/cart/subcomponents/cartTable/showItemSmall';

const ItemsLists: NextComponentType = () => {
  const { t } = useTranslation();
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);
  const [total, setTotal] = useState(totalCartPrice);

  return (
    <>
      <div>
        {cartData ? (
          cartData?.map((data, index) => {
            return (
              <ShowItemSmall
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
    </>
  );
};

export default ItemsLists;
