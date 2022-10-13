import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useState } from 'react';
import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';

import { useAppSelector } from 'store/hooks/index';
import Modal from '@/modules/global/components/modal/modal';

const CartTotal: NextComponentType = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);

  const handleClickProceed = () => {
    if (!token) setModalOn(true);
    else {
      router.push('/checkout');
    }
  };

  return (
    <>
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          modalTitle="You need to login first."
          bodyText="Proceed to login?"
        />
      )}
      <div className="grid dark:border lg:row-span-2 xl:row-span-2">
        <div className="overflow-hidden shadow-lg">
          <div className="w-full bg-primary dark:bg-dark_primary">
            <div className="px-6 py-1 text-base font-medium text-white">
              {t('cart:cart_total').toUpperCase()}
            </div>
          </div>
          <div className="flex justify-center py-5 px-6">
            <table className="w-full border-collapse border border-slate-400">
              <tbody>
                <tr>
                  <td className="ml-20 border border-slate-300 px-8 py-5 md:px-8 lg:px-8 xl:px-8">
                    <span className="font-semibold sm:mr-8 md:mr-16">
                      {t('cart:cart_subtotal')}
                    </span>
                  </td>
                  <td className="mx-5 ml-20 border border-slate-300 px-10 py-5 text-center md:px-8 lg:px-8 xl:px-8">
                    <p className="sm:mx-10">
                      {Intl.NumberFormat(
                        `${currency.currencyLanguage}-${currency.currencyStyle}`,
                        {
                          style: 'currency',
                          currency: `${currency.currencyName}`,
                        }
                      ).format(totalCartPrice)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="ml-20 border border-slate-300 px-8 py-5">
                    <span className="font-semibold md:mr-24 xl:mr-24">
                      {t('common:total')}
                    </span>
                  </td>
                  <td className="border border-slate-300 px-8 py-5 text-center">
                    <p className="sm:mx-10">
                      {Intl.NumberFormat(
                        `${currency.currencyLanguage}-${currency.currencyStyle}`,
                        {
                          style: 'currency',
                          currency: `${currency.currencyName}`,
                        }
                      ).format(totalCartPrice)}{' '}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end px-2 pb-4">
            <button
              onClick={handleClickProceed}
              style={{
                color: 'white',
                height: '39px',
                width: '200px',
              }}
              className="bg-black text-xs hover:bg-primary dark:bg-dark_primary dark:hover:border dark:hover:bg-black"
            >
              {t('cart:proceed_to_checkout').toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
