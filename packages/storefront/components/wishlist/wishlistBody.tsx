import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { useAppSelector } from 'customHooks/hooks';
import { NextComponentType } from 'next';

import WishlistIcon from '@/components/wishlist/wishlist-icon';
import WishlistProductInfo from '@/components/wishlist/wishlistProduct';
import Icon from '@/components/global/components/icon';

interface Props {
  productImageHeight: number;
  productImageWidth: number;
}

const WishlistBody: React.FC<Props> = (props) => {
  const { productImageHeight, productImageWidth } = props;
  const wishlistData = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );
  return (
    <>
      {wishlistData.items?.length! <= 0 && (
        <div className="mx-16 my-10">
          <div className="mx-16 my-2">
            <WishlistIcon height="h-16" width="w-16" />
          </div>
          <p className="text-xl text-green-600/100">Your wishlist is empty.</p>
          <Link href="/" passHref>
            <div className="my-2 flex cursor-pointer flex-wrap justify-center hover:text-green-600/100">
              <p>Continue Shopping</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      )}
      {wishlistData?.items?.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex flex-col flex-wrap items-center">
              <Link
                href={{
                  pathname: `product/${data?.product?.info.name}`,
                  query: {
                    id: data?.product?.id,
                    name: data?.product?.info.name,
                  },
                }}
                //as={`product/${data?.product?.info.name}`}
                passHref
              >
                <div className="w-50 relative flex cursor-pointer flex-col items-center justify-center">
                  <Image
                    src={data.product?.photos![0].url!}
                    alt={data.product?.info.shortDescription}
                    width={productImageWidth}
                    height={productImageHeight}
                    layout="fixed"
                  />

                  <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-black opacity-0 duration-300 hover:-translate-y-3 hover:opacity-70">
                    <Icon product={data?.product!} />
                  </div>

                  <div className="text-center">
                    <WishlistProductInfo product={data?.product!} />
                  </div>
                </div>
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default WishlistBody;
