import Link from 'next/link';
import React from 'react';

import type { NextComponentType } from 'next';
import { useAppSelector } from 'customHooks/hooks';

const SearchItem: NextComponentType = () => {
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  return (
    <>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <div className="mx-auto mb-10 flex flex-wrap text-lg sm:mb-10 md:mb-7 lg:mb-7 lg:w-2/4 xl:mb-7">
              <div className="md:w-1/4">
                <Link href={`/product/${product.id}`} passHref>
                  <img
                    alt="ecommerce"
                    className="h-auto w-auto hover:cursor-pointer"
                    src={product?.photos![0]?.url}
                  />
                </Link>
              </div>
              <div className="pl-0 sm:pl-0 md:w-3/4 md:pl-6 lg:pl-6 xl:pl-6">
                <Link href={`/product/${product.id}`} passHref>
                  <h2 className="title-font mt-5 mb-1 text-base font-bold text-gray-900 hover:cursor-pointer sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                    {product?.info?.name}
                  </h2>
                </Link>
                <div className="flex">
                  <span className="mb-1 text-sm text-gray-900">
                    ${product?.info?.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-900">
                  {product.meta.description}
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SearchItem;
