import { NextComponentType } from "next";
import OrderedProducts from "./orderDetail";

const CheckoutComponent: NextComponentType = (props) => {
  return (
    <>
    <div className="row">
        <div className="grid grid-cols-2 divide-x ">
           <div>
               <p>Form</p>
           </div>
           <div className=" h-screen" style={{ background: "#fafafa"}}>
               <OrderedProducts/>
           </div>
        </div>
    </div>
    </>
  );
};

export default CheckoutComponent;
