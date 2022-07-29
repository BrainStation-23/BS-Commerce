import { WishlistProduct, WishlistProductInfo } from 'models';
import React from 'react';

interface SingleProductInfo {
  product: WishlistProduct;
}

const WishlistProductInfo: React.FC<SingleProductInfo> = (
  props: SingleProductInfo
) => {
  const { product } = props;
  return (
    <div>
      <div className="px-6">
        <div className="text-base font-medium text-gray-600">
          {product?.info?.name}
        </div>
        <p className="py-2 font-['arial'] text-xs text-gray-600">
          {product?.info?.shortDescription}
        </p>
        <p className="text-base font-semibold text-green-600">
          {product?.info?.price}
          {product?.info?.oldPrice ? (
            <span className="ml-2 text-xs font-semibold text-black">
              <s>$</s>
              {product?.info?.oldPrice ? (
                <s>{product?.info?.oldPrice}</s>
              ) : null}
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default WishlistProductInfo;
