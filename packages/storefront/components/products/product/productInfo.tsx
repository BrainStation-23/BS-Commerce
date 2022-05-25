import React from "react";

const ProductInfo = (props: any) => {
    const {product}: any = props;
    return (
        <div>
            <div className="px-6 py-4 text-center">
                <div className="text-inherit text-xl mb-2 font-medium">
                    {product.title}
                </div>
                <p className="text-base text-gray-600">{product.category}</p>
                <br />
                <p className="text-lg font-medium text-green-600">
                    ${product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;
