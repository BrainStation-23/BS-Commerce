import { userAPI } from 'APIs';
import { useAppSelector } from 'customHooks/hooks';
import { OrderByUserId } from 'models';
import moment from 'moment';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';

interface Props {
  singleOrder: OrderByUserId;
}

const OrderSummary: React.FC<Props> = ({ singleOrder }) => {
  return (
    <>
      <div className="mt-5 w-full rounded-lg border">
        <div className="grid grid-cols-1 gap-y-2 p-5 lg:grid-cols-3 lg:gap-x-7">
          <div className="grid w-full grid-cols-2">
            <div>
              <p className="text-[#7c827f]">Order Created </p>
            </div>
            <div>
              <p className=" text-black">
                : {moment(singleOrder?.orderedDate).format('LL')}
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f]">Subtotal</p>
              </div>
              <div>
                <p className="ml-4 text-black">: ${singleOrder?.totalCost}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f]">Payment Method</p>
              </div>
              <div>
                <p className="ml-4 text-black">
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
              <p className="text-[#7c827f]">Order Time </p>
            </div>
            <div>
              <p className=" text-black">
                : {moment(singleOrder?.orderedDate).format('LT')}
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-2">
              <div>
                <p className="text-[#7c827f]">Delivery Fee</p>
              </div>
              <div>
                <p className="ml-4 text-black">
                  : ${singleOrder?.shippingCost}
                </p>
              </div>
            </div>
          </div>
          <div>
            {singleOrder?.paymentMethod.toLowerCase() !== 'cash on delivery' ? (
              <div className="grid w-full grid-cols-2">
                <div>
                  <p className="text-[#7c827f]">Card No.</p>
                </div>
                <div>
                  <p className="ml-4 text-black">
                    {/* : {singleOrder?.paymentMethod} */}
                  </p>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <hr className="mx-5 mb-5" />

        <div className="mx-5 mb-5 grid w-1/2 grid-cols-1">
          <div className="grid w-full grid-cols-2 lg:w-3/5">
            <div>
              <p className="text-[#7c827f]">Delivery Address</p>
            </div>
            <div>
              <p className=" text-black">
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
