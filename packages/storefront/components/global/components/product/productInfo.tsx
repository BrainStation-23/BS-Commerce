import React from "react";

const ProductInfo = (props: any) => {
    const { product }: any = props;
    return (
        <div className="">
            <div className=" py-4 text-center">
                <div className="text-inherit text-xl font-medium text-gray-600">
                    {product.title}
                </div>
                <br />
                <p className="text-lg font-['arial'] text-gray-600">{product.category}</p>
                <br />
                <p className="text-lg font-semibold text-green-600">
                    ${product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;
