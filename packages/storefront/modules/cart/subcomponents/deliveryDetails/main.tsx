import React, { useState } from 'react';

import type { NextComponentType } from 'next';

import DeliveryDate from '@/modules/cart/subcomponents/deliveryDetails/date';
import CartTotal from '@/modules/cart/subcomponents/deliveryDetails/cartTotal';
import DeilveryInstructions from '@/modules/cart/subcomponents/deliveryDetails/instruction';

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
        <div className="px-4 md:float-right">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default DeilveryDetails;
