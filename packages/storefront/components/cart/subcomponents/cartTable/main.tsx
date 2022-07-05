import React from "react";

import type { NextComponentType } from "next";

import Buttons from "@/components/global/components/buttons/button";
import DataTable from "@/components/cart/subcomponents/cartTable/dataTable";
import ItemsLists from "@/components/cart/subcomponents/cartTable/itemListSmall";

const CartDetails: NextComponentType = () => {
  
  return (
    <>
      <div>
        <div className="flex justify-center hidden md:flex">
          <DataTable />
        </div>
        <div className="md:hidden">
          <ItemsLists />
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
