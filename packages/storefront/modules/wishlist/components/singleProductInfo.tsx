import { WishlistProduct, WishlistProductInfo } from '@bs-commerce/models';
import { useAppSelector } from 'store/hooks/index';
import React from 'react';

interface SingleProductInfoProps {
  product: WishlistProduct;
}

const SingleProductInfo: React.FC<SingleProductInfoProps> = ({ product }) => {
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  return (
    <div className="px-6">
      <div className="text-sm font-medium text-gray-600 dark:text-dark_text">
        {product?.info?.name}
      </div>
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
  );
};

export default SingleProductInfo;
