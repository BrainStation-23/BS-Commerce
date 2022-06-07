import Link from "next/link";
import type { NextComponentType } from "next";
import { products } from "../../allData/product-data.json";
import React from "react";

const SearchItem = () => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <div className="lg:w-2/4 mx-auto my-10 flex flex-wrap items-center justify-center">
              <div className="md:w-3/4 px-2">
                <Link href="/product/1">
                  <img
                    alt="ecommerce"
                    className="h-auto w-auto hover:cursor-pointer"
                    src={product.images[0]}
                  />
                </Link>
                <Link href="/product/1" passHref>
                  <h2 className="text-gray-900 font-bold text-base title-font mb-1 hover:cursor-pointer">
                    {product.title}
                  </h2>
                </Link>
                <div className="flex">
                  <span className="text-gray-900 mb-1 mt-0 text-sm">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-900 text-sm mb-10 mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SearchItem;
