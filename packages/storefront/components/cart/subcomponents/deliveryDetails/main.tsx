import React, { useState } from "react";

import type { NextComponentType } from "next";

import DeliveryDate from "@/components/cart/subcomponents/deliveryDetails/date";
import CartTotal from "@/components/cart/subcomponents/deliveryDetails/cartTotal";
import DeilveryInstructions from "@/components/cart/subcomponents/deliveryDetails/instruction";

const DeilveryDetails: NextComponentType = () => {
  const [fill, setFill] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-rows-2 xl:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
        <div className="px-4">
          <DeliveryDate/>
        </div>
        <div className="px-4">
          <CartTotal/>
        </div>
        <div className="px-4">
          <DeilveryInstructions />
        </div>
      </div>
    </>
  );
};

export default DeilveryDetails;
