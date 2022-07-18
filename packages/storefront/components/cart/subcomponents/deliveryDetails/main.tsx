import React, { useState } from 'react';

import type { NextComponentType } from 'next';

import DeliveryDate from '@/components/cart/subcomponents/deliveryDetails/date';
import CartTotal from '@/components/cart/subcomponents/deliveryDetails/cartTotal';
import DeilveryInstructions from '@/components/cart/subcomponents/deliveryDetails/instruction';

const DeilveryDetails: NextComponentType = () => {
  const [fill, setFill] = useState(false);
  return (
    <>
      <div className="container mb-8">
        {/* <div className="px-4">
          <DeliveryDate/>
        </div> */}

        {/* <div className="px-4">
          <DeilveryInstructions />
        </div> */}
        <div className="float-right px-4">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default DeilveryDetails;
