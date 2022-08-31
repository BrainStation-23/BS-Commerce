import React from "react";
import WishlistIcon from "./wishlist-icon";
import productData from "../../allData/product-data.json";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";
import Link from "next/link";
import Picture from "../global/components/product/common/picture";
import ProductInfo from "../global/components/product/productInfo";

const WishlistComponent = () => {
  function handleClick(data: any) {
    console.log(data);
  }
  return (
    <>
      <Breadcrumb
        title="Wishlist"
        pathArray={["Home", "Wishlist"]}
        linkArray={["/home", "/wishlist"]}
      />
      <div className="flex flex-wrap gap-5 mt-10 mx-5 sm:mx-5 md:mx-7 lg:mx-10 xl:mx-10 justify-center">
        {productData["products"].slice(0,8).map((product, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-wrap flex-col items-center">
                <Link href="/product/1" passHref>
                  <div className="cursor-pointer flex flex-col items-center justify-center w-28 sm:w-28 md:w-44 lg:w-56 xl:w-56">
                    <Picture
                      src={product.images[0]}
                      alt={product.title}
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
