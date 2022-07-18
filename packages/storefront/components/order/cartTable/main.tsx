import React from "react";
import DataTable from "./dataTable";
import { IOrderResponseData } from "models";
interface Props {
  singleOrder: IOrderResponseData;
}

const CartDetails: React.FC<Props> = ({singleOrder}: Props) => {

  return (
    <>
      <div>
        <div className="justify-center flex flex-wrap">
          <DataTable singleOrder={singleOrder}/>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
