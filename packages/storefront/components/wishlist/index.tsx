import React from "react";
import Link from "next/link";

import { NextComponentType } from "next";
import { useAppSelector } from "customHooks/hooks";

import Picture from "@/components/global/components/product/common/picture";
import Breadcrumb from "@/components/global/breadcrumbs/breadcrumb";
import ProductInfo from "@/components/global/components/product/productInfo";
import WishlistIcon from "@/components/wishlist/wishlist-icon";

const WishlistComponent: NextComponentType = () => {
  const productData = useAppSelector(state => state.persistedReducer.product.publicProducts)

  function handleClick(data: any) {
    
  }
  return (
    <>
      <Breadcrumb
        title="Wishlist"
        pathArray={["Home", "Wishlist"]}
        linkArray={["/home", "/wishlist"]}
      />
      <div className="flex flex-wrap gap-5 mt-10 mx-5 sm:mx-5 md:mx-7 lg:mx-10 xl:mx-10 justify-center">
        {productData.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-wrap flex-col items-center">
                <Link href={`/product/${product.id}`} passHref>
                  <div className="cursor-pointer flex flex-col items-center justify-center w-28 sm:w-28 md:w-44 lg:w-56 xl:w-56">
                    <Picture
                      src={product?.photos[0]?.url}
                      alt={product?.tags[0]}
                      width={200}
                      height={200}
                    />
                    <div className="text-center">
                      <ProductInfo product={product} />
                    </div>
                  </div>
                </Link>
                <button
                  className="mb-5 mt-2 text-center items-center"
                  onClick={() => {
                    handleClick(product.id);
                  }}
                >
                  <WishlistIcon />
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default WishlistComponent;