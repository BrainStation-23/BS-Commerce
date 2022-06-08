import React from "react";
import Icon from "../icon";

const ProductInfo = (props: any) => {
  const { product }: any = props;
  return (
    <div>
      <div className="px-6">
        <div className="text-base font-medium text-gray-600">
          {product.title}
        </div>
        <p className="text-xs font-['arial'] text-gray-600 py-2">
          {product.category}
        </p>
        <p className="text-base font-semibold text-green-600">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
