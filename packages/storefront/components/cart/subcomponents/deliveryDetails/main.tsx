import React, { useState } from 'react';

import type { NextComponentType } from 'next';

import DeliveryDate from '@/components/cart/subcomponents/deliveryDetails/date';
import CartTotal from '@/components/cart/subcomponents/deliveryDetails/cartTotal';
import DeilveryInstructions from '@/components/cart/subcomponents/deliveryDetails/instruction';

const DeilveryDetails: NextComponentType = () => {
  const [fill, setFill] = useState(false);
  return (
    <>
      <div className="container grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2">
        {/* <div className="px-4">
          <DeliveryDate/>
        </div> */}

        <div className="px-4">
          <DeilveryInstructions />
        </div>
        <div className="px-4">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default DeilveryDetails;
