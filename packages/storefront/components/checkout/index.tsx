import { NextComponentType } from "next";
import { useState } from "react";
import OrderedProducts from "./orderDetail";

const CheckoutComponent: NextComponentType = (props) => {
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <>
    <div className="row">
        <div className="flex justify-between flex-wrap sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
           <div>
               <p>Form</p>
           </div>
           <div className="overflow-hidden h-screen" style={{ background: "#fafafa"}}>
               <OrderedProducts/>
           </div>
        </div>
    </div>
    </>
  );
};

export default CheckoutComponent;
