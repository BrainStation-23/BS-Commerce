import React from 'react';

import { CustomerProduct } from '@bs-commerce/models';
import { useAppSelector } from 'customHooks/hooks';

interface SingleProduct {
  product: CustomerProduct;
}

const ProductInfo = (props: SingleProduct) => {
  const { product } = props;
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  return (
    <div>
      <div className="pl-4">
        <div
          className="text-base text-inherit text-gray-600"
          id="searchProductName"
        >
          {product?.info?.name}
        </div>
        <p className="py-2 font-['arial'] text-xs text-gray-600">
          {product?.tags![0]}
        </p>
        <p className="text-base font-semibold text-green-600">
          {Intl.NumberFormat(
            `${currency.currencyLanguage}-${currency.currencyStyle}`,
            { style: 'currency', currency: `${currency.currencyName}` }
          ).format(product?.info?.price)}
          {Math.abs(product?.info.oldPrice - product?.info.price) > 0 ? (
            <span className="ml-2 text-xs font-semibold text-black">
              <s>
                {Intl.NumberFormat(
                  `${currency.currencyLanguage}-${currency.currencyStyle}`,
                  { style: 'currency', currency: `${currency.currencyName}` }
                ).format(product?.info?.oldPrice)}
              </s>
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
