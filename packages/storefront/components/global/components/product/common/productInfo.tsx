import React from "react";
import Link from "next/link";

const ProductInfo = (props: any) => {
  const { product }: any = props;
  return (
    <div className="text-center py-4">
      <Link href="/product/1" passHref>
      <div className="text-inherit text-xl font-medium text-gray-600">
        {product.title}
      </div>
      </Link>
      <p className="text-lg font-['arial'] text-gray-600 m-1">
        {product.category}
      </p>
      <div className="text-lg font-semibold text-green-600">
        {product.price}
      </div>
    </div>
  );
};

export default ProductInfo;
