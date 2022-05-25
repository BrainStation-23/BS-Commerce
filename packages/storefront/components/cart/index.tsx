import type { NextComponentType } from "next";
import Table from "./table";
import DeliveryDetails from "./deliveryDetails/main";
const CartComponent: NextComponentType = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold">Your Shopping Cart</h1>
      </div>
      <div className="flex justify-center">
        <Table />
      </div>
      <div className="flex justify-center lg:px-8 sm:ml-4">
        <DeliveryDetails />
      </div>
    </>
  );
};

export default CartComponent;
