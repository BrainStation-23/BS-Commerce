import type { NextComponentType } from "next";
import React, { useState } from "react";
import DeliveryDate from "./date";
import CartTotal from "./cartTotal";
import DeilveryInstructions from "./instruction";

const DeilveryDetails: NextComponentType = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-rows-2  xl:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
        <div>
          <DeliveryDate />
        </div>
        <div>
          <CartTotal />
        </div>
        <div>
          <DeilveryInstructions />
        </div>
      </div>
    </>
  );
};

export default DeilveryDetails;
