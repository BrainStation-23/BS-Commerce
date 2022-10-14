import React from 'react';
import ChevronLeft from '@/modules/common/icons/chevronLeft';
import CheckoutFooter from '../checkoutFooter';
import { useAppSelector } from 'store/hooks/index';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  setModal: Function;
}

const Shipping: React.FC<Props> = (props: Props) => {
  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );
  const { t } = useTranslation();

  const { setModal } = props;

  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
      <div className="m-0 px-3.5 md:mx-20 lg:mx-20 lg:my-12 xl:mx-20">
        <div className="mx-auto mt-5 box-border divide-y-2 rounded-md border-2 p-4 text-center">
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-[#333333] dark:text-dark_text">
                {t('checkout:contact')}
              </p>
              <p className="text-sm">{shippingInfo?.phoneNumber}</p>
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
              {t('checkout:change')}
            </button>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-[#333333] dark:text-dark_text">
                {t('checkout:ship_to')}
              </p>
              <p className="text-sm">{shippingInfo?.addressLine1}</p>
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
              {t('checkout:change')}
            </button>
          </div>
        </div>

        <p className="pt-7 text-lg font-normal">
          {t('checkout:shipping_method')}
        </p>

        <div className="my-3 box-border flex cursor-pointer flex-wrap justify-between rounded-md border-2 p-5 text-sm text-[#333333] hover:bg-white dark:text-dark_text dark:hover:text-black">
          <p>{t('checkout:standard')}</p>
          <p className="ml-5 font-medium">{t('checkout:free')}</p>
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
              className="w-full rounded-md bg-[#000000] py-4 px-6 text-sm text-white dark:bg-dark_primary"
            >
              {t('checkout:continue_to_payment')}
            </button>
          </div>
          <div className="mt-4 mb-5 flex flex-wrap justify-center lg:ml-6">
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
              <a className="text-decoration-none">
                {t('checkout:return_to_information')}
              </a>
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
