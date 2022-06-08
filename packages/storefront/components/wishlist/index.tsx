import React from "react";
import WishlistIcon from "./wishlist-icon";
import productData from "../../allData/product-data.json";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";

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
        {productData["products"].map((product, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center w-28 sm:w-28 md:w-44 lg:w-56 xl:w-56">
                <img
                  src={product.images[0]}
                  className="h-24 w-24 sm:h-24 md:h-40 lg:h-48 xl:h-48 sm:w-24 md:w-40 lg:w-48 xl:w-48"
                />
                <p className="mt-2 text-center">{product.title}</p>
                <p className="mt-2">{product.price}</p>
                <button
                  className="mb-5 mt-2 text-center"
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
