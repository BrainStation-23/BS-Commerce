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
           <div className="mb-10 sm:mb-10 md:mb-7 lg:mb-7 xl:mb-7 lg:w-2/4 mx-auto flex flex-wrap text-lg">
				<div className="md:w-1/4">
					<Link href="/product/1">
						<img
							alt="ecommerce"
							className="h-auto w-auto hover:cursor-pointer"
							src={product.images[0]}
						/>
					</Link>
				</div>
				<div className="md:w-3/4 pl-0 sm:pl-0 md:pl-6 lg:pl-6 xl:pl-6">
					<Link href="/product/1">
						<h2 className="mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 text-gray-900 text-base title-font font-bold mb-1 hover:cursor-pointer">
							{product.title}
						</h2>
					</Link>
					<div className="flex">
						<span className="text-gray-900 mb-1 text-sm">
							${product.price}
						</span>
					</div>
					<p className="text-gray-900 text-sm mt-2">
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
