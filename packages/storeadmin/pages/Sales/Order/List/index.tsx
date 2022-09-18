import OrderListMain from "@/components/sales/orders/index";
import React from "react";
import type { NextPage } from "next";

const List: NextPage = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <OrderListMain />
    </main>
  );
};

export default List;
