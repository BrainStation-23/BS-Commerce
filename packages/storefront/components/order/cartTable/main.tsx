import React from "react";

import type { NextComponentType } from "next";

import DataTable from "./dataTable";

const CartDetails: NextComponentType = ({singleOrder}: any) => {

  return (
    <>
      <div>
        <div className="flex justify-center hidden md:flex">
          <DataTable singleOrder={singleOrder}/>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
