import React from 'react';
import Link from 'next/link';

import { CustomerProduct } from '@bs-commerce/models';

interface SingleProduct {
  product: CustomerProduct;
}

const ProductInfo: React.FC<SingleProduct> = (props: SingleProduct) => {
  const { product } = props;

  return (
    <div className="py-4 text-center">
      <Link href="/product/1" passHref>
        <div className="text-base text-inherit text-gray-600">
          {product?.info.name}
        </div>
      </Link>
      <p className="m-1 font-['arial'] text-sm text-gray-600">
        {product?.tags
          ? product?.tags[0]
          : product?.brands
          ? product?.brands[0]
          : ''}
      </p>
      <div className="text-lg font-semibold text-primary">
        {product?.info?.price}
      </div>
    </div>
  );
};

export default ProductInfo;
