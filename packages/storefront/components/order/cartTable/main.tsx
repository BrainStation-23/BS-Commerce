import React from "react";
import type { NextComponentType } from "next";
import DataTable from "./dataTable";
import { IOrderResponseData } from "models";
interface Props {
  singleOrder: IOrderResponseData;
}

const CartDetails: React.FC<Props> = ({singleOrder}: Props) => {

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
