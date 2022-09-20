import React from 'react';

import { CustomerProduct } from '@bs-commerce/models';

interface SingleProduct {
  product: CustomerProduct;
}

const ProductInfo = (props: SingleProduct) => {
  const { product } = props;
  return (
    <div>
      <div className="pl-6">
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

export default ProductInfo;
