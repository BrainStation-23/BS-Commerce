import type { NextComponentType } from "next";
import DeliveryDetails from "./subcomponents/deliveryDetails/main";
import CartDetails from "./subcomponents/cartTable/main";
const CartComponent: NextComponentType = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold">Your Shopping Cart</h1>
      </div>
      <div>
        <CartDetails />
      </div>
      <div className="flex justify-center lg:px-8 sm:px-8 sm:overflow-hidden">
        <DeliveryDetails />
      </div>
    </>
  );
};

export default CartComponent;
