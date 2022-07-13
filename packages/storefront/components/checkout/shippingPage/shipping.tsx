import React from 'react';
import ChevronLeft from '@/components/global/icons-for-checkout-page/chevron-left';
import Path from '@/components/global/components/path';
import OrderList from '@/components/checkout/orderList';
import CheckoutFooter from '../checkoutFooter';
import Link from 'next/link';
import { useAppSelector } from 'customHooks/hooks';

interface Props {
  setModal: Function;
}

const Shipping: React.FC<Props> = (props: Props) => {
  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const { setModal } = props;

  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
      <div className="m-0 px-3.5 md:mx-20 lg:mx-20 lg:my-12 xl:mx-20">
        <div className="mx-auto mt-5 box-border divide-y-2 rounded-md border-2 p-4 text-center">
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-[#333333]">Contact</p>
              <p className="text-sm">{shippingInfo?.contact}</p>
            </div>
            <button
              onClick={() => {
                const obj = {
                  info: true,
                  ship: false,
                  pay: false,
                };
                setModal(obj);
              }}
              className="ml-10 text-sm"
              style={{ border: 'none' }}
            >
              Change
            </button>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-[#333333]">Ship to</p>
              <p className="text-sm">{shippingInfo?.address}</p>
            </div>
            <button
              onClick={() => {
                const obj = {
                  info: true,
                  ship: false,
                  pay: false,
                };
                setModal(obj);
              }}
              className="ml-10 text-sm"
              style={{ border: 'none' }}
            >
              Change
            </button>
          </div>
        </div>

        <p className="pt-7 text-lg font-normal">Shipping method</p>

        <div className="my-3 box-border flex cursor-pointer flex-wrap justify-between rounded-md border-2 p-5 text-sm text-[#333333] hover:bg-white">
          <p>Standard</p>
          <p className="ml-5 font-medium">Free</p>
        </div>

        <div className="mt-5 lg:flex">
          <div>
            <button
              onClick={() => {
                setModal({
                  info: false,
                  ship: false,
                  pay: true,
                });
              }}
              className="w-full rounded-md bg-[#000000] py-5 px-6 text-sm text-white"
            >
              Continue to payment
            </button>
          </div>
          <div className="mt-5 mb-5 flex flex-wrap justify-center lg:ml-6">
            <div className="block items-center sm:block sm:items-center md:hidden lg:hidden xl:hidden">
              <button
                onClick={() => {
                  const obj = {
                    info: true,
                    ship: false,
                    pay: false,
                  };
                  setModal(obj);
                }}
              >
                <a className="text-decoration-none">{<ChevronLeft />}</a>
              </button>
            </div>
            <button
              onClick={() => {
                const obj = {
                  info: true,
                  ship: false,
                  pay: false,
                };
                setModal(obj);
              }}
            >
              <a className="text-decoration-none">Return to information</a>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-6 sm:mx-10 md:mx-10 lg:mx-24">
        <hr className="mt-2" />
        <CheckoutFooter />
      </div>
    </div>
  );
};

export default Shipping;
