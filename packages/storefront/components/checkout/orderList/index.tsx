import { useState } from "react";

import ChevronDown from "@/components/global/icons-for-checkout-page/chevron-down";
import ChevronUp from "@/components/global/icons-for-checkout-page/chevron-up";
import ShoppingCart from "@/components/global/icons-for-checkout-page/shopping-cart";
import OrderedProducts from "./orderDetail";

const OrderList = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div
        className="flex-initial lg:w-2/5 hidden sm:hidden md:hidden lg:block xl:block"
        style={{ background: "#fafafa" }}
      >
        <OrderedProducts />
      </div>

      <div
        className=" border-gray-500 flex flex-wrap justify-between sm:block md:block lg:hidden xl:hidden my-7 py-5 px-3 sm:px-10 md:px-10 lg:px-5 xl:px-5 text-xs"
        style={{ background: "#fafafa" }}
      >
        <div
          className="w-full sm:px-4 md:px-16 flex flex-wrap justify-between"
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
          <div className="w-full md:px-14" style={{ background: "#fafafa" }}>
            <OrderedProducts />
          </div>
        )}
      </div>
    </>
  );
};

export default OrderList;
