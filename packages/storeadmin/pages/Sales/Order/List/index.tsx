import OrderListMain from "@/components/sales/orders/index";
import React from "react";
import type { NextPage } from "next";

const List: NextPage = () => {
  return (
    <main className="ms-sm-auto  px-md-4">
      <OrderListMain />
    </main>
  );
};

export default List;
