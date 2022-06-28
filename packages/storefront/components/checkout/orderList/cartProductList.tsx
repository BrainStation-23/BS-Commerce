import React from "react";
import checkoutProducts  from "../../../allData/checkout-products.json"

const CartProductList = () => {
  return (
    <>
      {checkoutProducts["checkoutProducts"].map((checkoutProduct, index) => {
        return (
          <React.Fragment key={index}>
            <div className="row text-sm mt-5 mr-3">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap items-center">
                  <div className="relative">
                    <img
                      src={checkoutProduct.image}
                      className="rounded-lg border h-16 w-20"
                    />
                    <span className="absolute -top-2 -right-3 p-0.5 text-center text-xs font-semibold text-white rounded-full" style={{ background: "#808080"}}>
                      <svg
                        className="w-4 h-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                      {checkoutProduct.quantity}
                    </span>
                  </div>
                  <div className="ml-3 sm:ml-3 md:ml-5 lg:ml-5 xl:ml-2">
                    <p className="text-xs sm:text-xs md:text-sm lg:text-normal xl:text-normal font-semibold">{checkoutProduct.title}</p>
                    {checkoutProduct.additionalInfo && (
                      <div className="text-xs text-gray-500">
                        {checkoutProduct.additionalInfo}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap justify-end font-semibold">
                  ${checkoutProduct.price}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CartProductList;
