import React from "react";
import Link from "next/link";
import { Product } from "models";

interface SingleProduct {
  product: Product
}

const ProductInfo = (props: SingleProduct) => {
  const { product } = props;

  return (
    <div className="text-center py-4">
      <Link href="/product/1" passHref>
      <div className="text-inherit text-xl font-medium text-gray-600">
        {product.info.name}
      </div>
      </Link>
      <p className="text-lg font-['arial'] text-gray-600 m-1">
        {product.tags[0]}
      </p>
      <div className="text-lg font-semibold text-green-600">
        {product.info.price}
      </div>
    </div>
  );
};

export default ProductInfo;
