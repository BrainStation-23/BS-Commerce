import { userAPI } from 'APIs';
import { useAppSelector } from 'customHooks/hooks';
import { OrderByUserId } from '@bs-commerce/models';
import moment from 'moment';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  singleOrder: OrderByUserId;
}

const OrderSummary: React.FC<Props> = ({ singleOrder }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-5 w-full rounded-lg border">
        <div className="grid grid-cols-1 gap-y-2 p-5 lg:grid-cols-3 lg:gap-x-7">
          <div className="grid w-full grid-cols-2">
            <div>
              <p className="text-[#7c827f] dark:text-gray-400">
                {t('order:order_created')}
              </p>
            </div>
            <div>
              <p className=" ml-4 text-black dark:text-gray-400 lg:ml-0">
                : {moment(singleOrder?.orderedDate).format('LL')}
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f] dark:text-gray-400">
                  {t('common:sub_total')}
                </p>
              </div>
              <div>
                <p className="ml-4 text-black dark:text-gray-400">
                  : ${singleOrder?.totalCost}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f] dark:text-gray-400">
                  {t('order:payment_method')}
                </p>
              </div>
              <div>
                <p className="ml-4 text-black dark:text-gray-400">
                  : {singleOrder?.paymentMethod}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-5 mb-5" />

        <div className="grid grid-cols-1 gap-y-2 px-5 pb-5 lg:grid-cols-3 lg:gap-x-7">
          <div className="grid w-full grid-cols-2">
            <div>
              <p className="text-[#7c827f] dark:text-gray-400">
                {t('order:order_time')}{' '}
              </p>
            </div>
            <div>
              <p className="ml-4 text-black dark:text-gray-400 lg:ml-0">
                : {moment(singleOrder?.orderedDate).format('LT')}
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f] dark:text-gray-400">
                  {t('order:delivery_fee')}
                </p>
              </div>
              <div>
                <p className="ml-4 text-black dark:text-gray-400">
                  : ${singleOrder?.shippingCost}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f] dark:text-gray-400">
                  {t('order:card_no')}.
                </p>
              </div>
              <div>
                <p className="ml-4 text-black dark:text-gray-400">
                  :{' '}
                  {singleOrder?.paymentMethod.toLowerCase() !==
                  'cash on delivery'
                    ? `${singleOrder?.paymentMethod}` //need to change
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-5 mb-5" />

        <div className="mx-5 mb-5 grid grid-cols-1 lg:w-1/2">
          <div className="grid w-full grid-cols-2 lg:w-3/5">
            <div>
              <p className="text-[#7c827f] dark:text-gray-400">
                {t('order:delivery_address')}
              </p>
            </div>
            <div>
              <p className=" ml-3 text-black dark:text-gray-400 lg:ml-0">
                :{' '}
                {`${singleOrder?.shippingAddress?.addressLine1},  ${singleOrder?.shippingAddress?.city}, ${singleOrder?.shippingAddress.postCode}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
