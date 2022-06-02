import React from "react";

const ProductInfo = (props: any) => {
    const { product }: any = props;
    return (
        <div className=" py-4">
            <div className="text-inherit text-xl font-medium text-gray-600">
                {product.title}
            </div>
            <p className="text-lg font-['arial'] text-gray-600 m-1">
                {product.category}
            </p>
            <div className="text-lg font-semibold text-green-600">
                ${product.price}
            </div>
        </div>
    );
};

export default ProductInfo;
