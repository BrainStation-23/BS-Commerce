import React, { useState } from "react";
import type { NextComponentType } from "next";
import { useAppSelector } from "customHooks/hooks";

import ShowItemSmall from "@/components/cart/subcomponents/cartTable/showItemSmall";

const ItemsLists: NextComponentType = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + (data?.product?.info?.price! * data.quantity);
  }, 0);
  const [total, setTotal] = useState(totalCartPrice);

  return (
    <>
      <div>
        {cartData ? (
          cartData?.map((data, index) => {
            return <ShowItemSmall key={index} data={data} setTotal={setTotal} total={total} />;
          })
        ) : (
          <></>
        )}
        <div className="flex flex-wrap justify-center">
          <span className="text-base font-semibold mr-2">Total</span>
          <span>${total}</span>
        </div>
      </div>
    </>
  );
};

export default ItemsLists;
