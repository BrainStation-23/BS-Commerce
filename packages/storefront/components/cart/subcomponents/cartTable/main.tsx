import type { NextComponentType } from "next";
import React, { useState, useEffect } from "react";
import Buttons from "../../../global/components/buttons/button";
import DataTable from "./dataTable";
import ItemsLists from "./itemListSmall";
const CartDetails: NextComponentType = () => {
  const [cartTotal, setCartTotal] = useState(0);

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
