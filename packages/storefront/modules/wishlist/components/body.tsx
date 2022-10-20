import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { useAppSelector } from 'store/hooks/index';
import { WishlistItem } from '@bs-commerce/models';

import SingleProductInfo from '@/modules/wishlist/components/singleProductInfo';
import ProductHoverActions from '@/modules/common/product/common/productHoverActions';

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
                }}
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
                    <ProductHoverActions product={data?.product!} />
                  </div>

                  <div className="text-center">
                    <SingleProductInfo product={data?.product!} />
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
