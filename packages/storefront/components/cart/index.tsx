import type { NextComponentType } from "next";
import DeliveryDetails from "./subcomponents/deliveryDetails/main";
import CartDetails from "./subcomponents/cartTable/main";
import PageTitle from "../global/components/pageTitle";
const CartComponent: NextComponentType = () => {
  return (
    <>
      <div>
        <PageTitle title={"Your Shopping Cart"} />
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
