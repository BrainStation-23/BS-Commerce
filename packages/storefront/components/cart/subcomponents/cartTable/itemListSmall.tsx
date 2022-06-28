import { useAppSelector } from "customHooks/hooks";
import type { NextComponentType } from "next";
import React, { FC, useState } from "react";
//import cartDatas from "../../../../allData/cart-data.json";
import ShowItemSmall from "./showItemSmall";

const ItemsLists: FC = (props) => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + (data?.product?.info?.price * data.quantity);
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
