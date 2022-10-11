import { WishlistProduct, WishlistProductInfo } from '@bs-commerce/models';
import { useAppSelector } from 'customHooks/hooks';
import React from 'react';

interface SingleProductInfo {
  product: WishlistProduct;
}

const WishlistProductInfo: React.FC<SingleProductInfo> = (
  props: SingleProductInfo
) => {
  const { product } = props;
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  return (
    <div>
      <div className="px-6">
        <div className="text-sm font-medium text-gray-600 dark:text-dark_text">
          {product?.info?.name}
        </div>
        {/* <p className="text-xs font-['arial'] text-gray-600 py-2">
          {product.info.shortDescription}
        </p> */}
        <p className="text-sm font-semibold text-primary dark:text-dark_primary">
          {Intl.NumberFormat(
            `${currency.currencyLanguage}-${currency.currencyStyle}`,
            { style: 'currency', currency: `${currency.currencyName}` }
          ).format(product?.info?.price)}
          {product?.info?.oldPrice ? (
            <span className="ml-2 text-xs font-semibold text-black dark:text-dark_text">
              {product?.info?.oldPrice ? (
                <s>
                  {Intl.NumberFormat(
                    `${currency.currencyLanguage}-${currency.currencyStyle}`,
                    { style: 'currency', currency: `${currency.currencyName}` }
                  ).format(product?.info?.oldPrice)}
                </s>
              ) : null}
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default WishlistProductInfo;
