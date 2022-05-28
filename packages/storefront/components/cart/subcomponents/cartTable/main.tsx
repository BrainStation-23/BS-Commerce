import type { NextComponentType } from "next";
import React, { useState } from "react";
import Buttons from "../../../global/components/buttons/button";
import DataTable from "./dataTable";
import ItemsLists from "./itemListSmall";
const CartDetails: NextComponentType = () => {
  const [allCartList, setAllCartList] = useState([
    {
      id: Math.floor(Math.random() * 10),
      meta: {
        title: "Red Spinach/500gm",
        price: "53",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig14_9d050031-6a02-4a0c-ad56-c2dda1cce5d0_compact.jpg?v=1587984073",
      },
      quantity: "3",
    },
    {
      id: Math.floor(Math.random() * 10),
      meta: {
        title: "Cauliflower/1kg",
        price: "44",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig9_ef67d26b-f717-4bf3-82ec-5eae9aad5a11_compact.jpg?v=1587984831",
      },
      quantity: "2",
    },
    {
      id: Math.floor(Math.random() * 10),
      meta: {
        title: "White Carrot/500gm",
        price: "24",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig6_1f6dc9c9-08a8-4008-b39a-478d0046362d_compact.jpg?v=1587983036",
      },
      quantity: "1",
    },
    {
      id: Math.floor(Math.random() * 10),
      meta: {
        title: "Poatat0/500gm",
        price: "5",
        img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig4_cbb159dd-d3ba-4e07-9b56-5d54eb32aa81_compact.jpg?v=1587985338",
      },
      quantity: "4",
    },
  ]);
  return (
    <>
      <div>
        <div className="flex justify-center hidden md:flex">
          <DataTable cartDatas={allCartList} />
        </div>
        <div className="md:hidden">
          {allCartList.map((item) => (
            <ItemsLists
              key={item.id}
              title={item.meta.title}
              price={item.meta.price}
              image={item.meta.img}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="md:hidden flex justify-center p-4">
          <Buttons
            bgColor="black"
            height={40}
            width={80}
            text={"PROCEED TO CHECKOUT"}
          />
        </div>
        <div className="md:hidden flex justify-center px-4 mb-6">
          <Buttons
            bgColor="black"
            height={40}
            width={80}
            text={"UPDATE CART"}
          />
        </div>
      </div>
    </>
  );
};

export default CartDetails;
