import React from 'react';

import { NextComponentType } from 'next';
import { useAppSelector } from 'customHooks/hooks';
import Image from 'next/image';

const CartProductList: NextComponentType = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const trimDescription = (description: string) => {
    if (description.length <= 30) {
      return description;
    } else {
      let trimmedDescription = description.substring(0, 30);
      trimmedDescription = trimmedDescription + '...';
      return trimmedDescription;
    }
  };

  return (
    <>
      {cartData.map((data) => {
        return (
          <React.Fragment key={data.productId}>
            <div className="row mt-5 text-sm">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap items-center">
                  <div className="relative">
                    <div className="w-20 rounded-lg border">
                      {data?.product?.photos![0]?.url ? (
                        <Image
                          src={data?.product?.photos![0]?.url!}
                          alt={data?.product?.photos![0]?.alt!}
                          width={75}
                          height={75}
                        />
                      ) : (
                        'Problem Rendering Image'
                      )}
                    </div>
                    <span
                      className="absolute -top-2 -right-3 rounded-full p-0.5 text-center text-xs font-semibold text-white"
                      style={{ background: '#808080' }}
                    >
                      <svg
                        className="h-0 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                      {data?.quantity}
                    </span>
                  </div>
                  <div className="ml-3 sm:ml-3 md:ml-5 lg:ml-5 xl:ml-2">
                    <p className="lg:text-normal xl:text-normal text-xs font-semibold sm:text-xs md:text-sm">
                      {data?.product?.info?.name}
                    </p>
                    {data?.product?.info?.shortDescription && (
                      <div className="text-xs text-gray-500">
                        {trimDescription(data?.product?.info?.shortDescription)}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap justify-end font-semibold">
                  ${data?.product?.info?.price}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CartProductList;
