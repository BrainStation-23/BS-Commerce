import React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';

import { useAppSelector } from 'customHooks/hooks';
import Modal from '@/components/global/components/modal/modal';

const CartTotal: NextComponentType = () => {
  const router = useRouter();

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
      <div className="grid lg:row-span-2 xl:row-span-2">
        <div className="overflow-hidden shadow-lg">
          <div className="w-full bg-black">
            <div className="px-4 py-1 text-base font-medium text-white">
              CART TOTALS
            </div>
          </div>
          <div className="flex justify-center p-6">
            <table className="border-collapse border border-slate-400">
              <tbody>
                <tr>
                  <td className="ml-20 border border-slate-300 px-8 py-5 md:px-8 lg:px-8 xl:px-8">
                    <span className="mr-8 font-semibold md:mr-24 xl:mr-24">
                      Subtotal
                    </span>
                  </td>
                  <td className="mx-5 ml-20 border border-slate-300 px-5 py-5 md:px-8 lg:px-8 xl:px-8">
                    <span className="mr-12 font-semibold md:mr-24 xl:mr-24">
                      ${totalCartPrice}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="ml-20 border border-slate-300 px-8 py-5">
                    <span className="font-semibold md:mr-24 xl:mr-24">
                      Total
                    </span>
                  </td>
                  <td className="border border-slate-300 px-8 py-5">
                    <span className="md:mr-24 xl:mr-24">${totalCartPrice}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end py-4 px-2">
            <button
              onClick={handleClickProceed}
              style={{
                color: 'white',
                height: '39px',
                width: '200px',
              }}
              className="bg-black text-xs hover:bg-green-600"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
