import { NextComponentType } from "next";
import { useState } from "react";
import ChevronDown from "../global/icons-for-checkout-page/chevron-down";
import ChevronUp from "../global/icons-for-checkout-page/chevron-up";
import ShoppingCart from "../global/icons-for-checkout-page/shopping-cart";
import Information from "./informationPage";
import OrderedProducts from "./orderDetail";

const CheckoutComponent = (props: any) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="row">
        <div className="flex flex-wrap sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-between">
          <div className="flex-initial lg:w-3/5">
            <Information/>
          </div>

          <div
            className="flex-initial lg:w-2/5 sm:hidden md:hidden lg:block"
            style={{ background: "#fafafa" }}
          >
            <OrderedProducts />
          </div>

          <div
            className="flex flex-wrap justify-between sm:block md:block lg:hidden my-7 p-5 text-xs"
            style={{ background: "#fafafa" }}
          >
            <div
              className="flex flex-wrap justify-between"
              style={{ background: "#fafafa" }}
            >
              <div className="flex flex-wrap">
                <ShoppingCart />

                <button
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                >
                  <div className="flex flex-wrap justify-between px-2">
                    {dropdown === true ? (
                      <>
                        <p className="text-sm">Hide Order Summary</p>
                        <ChevronUp />
                      </>
                    ) : (
                      <>
                        <p className="text-sm">Show Order Summary</p>
                        <ChevronDown />
                      </>
                    )}
                  </div>
                </button>
              </div>
              <p className="text-xl font-semibold">$13.72</p>
            </div>

            {dropdown && (
              <div style={{ background: "#fafafa" }}>
                <OrderedProducts />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutComponent;
