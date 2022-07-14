import type { NextComponentType } from "next";
import DeliveryDetails from "@/components/cart/subcomponents/deliveryDetails/main";
import CartDetails from "@/components/cart/subcomponents/cartTable/main";
import PageTitle from "@/components/global/components/pageTitle";

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
