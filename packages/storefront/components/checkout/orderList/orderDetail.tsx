import React from 'react';
import { NextComponentType } from 'next';
import { useAppSelector } from 'store/hooks/index';
import CartProductList from '@/components/checkout/orderList/cartProductList';
import useTranslation from 'next-translate/useTranslation';

const OrderedProducts: NextComponentType = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);

  return (
    <div className="w-full">
      <div className="row mx-0 my-7 overflow-hidden px-0 sm:mx-0 sm:px-2 md:px-5 lg:mx-12 lg:px-0 xl:mx-12 xl:px-0">
        <div className="flex h-full flex-col divide-y-2 overflow-hidden">
          <div
            className={` ${
              cartData.length >= 4 ? 'h-[300px] overflow-y-scroll pr-3' : ''
            }`}
          >
            <CartProductList />
          </div>
          <div className="mt-5">
            <div className="row text-sm">
              <div className="mt-4 flex flex-wrap justify-between">
                <p className="text-gray-600/100 dark:text-dark_text">
                  {t('checkout:sub_total')}
                </p>
                <p className="font-semibold">
                  {Intl.NumberFormat(
                    `${currency.currencyLanguage}-${currency.currencyStyle}`,
                    { style: 'currency', currency: `${currency.currencyName}` }
                  ).format(totalCartPrice)}
                </p>
              </div>
              <div className="mt-2 flex flex-wrap justify-between">
                <p className="text-gray-600/100 dark:text-dark_text">
                  {t('checkout:shipping')}
                </p>
                <p className="font-semibold">{t('checkout:free')}</p>
              </div>
              {/* <div className="flex flex-wrap justify-between mt-2">
                <p className="text-gray-600/100">Taxes</p>
                <p className="font-semibold">$2.33</p>
              </div> */}
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="mt-4 flex flex-wrap justify-between">
                <p className="text-gray-600/100 dark:text-dark_text">
                  {t('checkout:total')}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-2xl font-semibold">
                    {Intl.NumberFormat(
                      `${currency.currencyLanguage}-${currency.currencyStyle}`,
                      {
                        style: 'currency',
                        currency: `${currency.currencyName}`,
                      }
                    ).format(totalCartPrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedProducts;
