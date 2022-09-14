import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { useAppSelector } from 'customHooks/hooks';
import { NextComponentType } from 'next';

import WishlistIcon from '@/components/wishlist/wishlist-icon';
import WishlistProductInfo from '@/components/wishlist/wishlistProduct';
import Icon from '@/components/global/components/icon';
import { Wishlist, WishlistItem } from '@bs-commerce/models';

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
      {wishlistData?.items?.map((data: WishlistItem, index: number) => {
        return (
          <React.Fragment key={data.productId}>
            <div className="flex flex-col flex-wrap items-center">
              <Link
                href={{
                  pathname: `product/${data?.product?.meta?.friendlyPageName}`,
                  // query: {
                  //   id: data?.product?.id,
                  //   name: data?.product?.info.name,
                  // },
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
