import React from "react";
import Path from "@/components/global/components/path";
import OrderList from "../orderList";
import Shipping from "./shipping";

const path = {
    cart: false,
    info: false,
    shipping: true,
    payment: false,
};

const ShippingPage = () => {
    return (
        <div>
            <div className="row">
                <div className="lg:mt-10 xl:mt-10 lg:mb-5 xl:mb-5 lg:mx-28 xl:mx-28 hidden sm:hidden md:hidden lg:block xl:block">
                    <Path
                        cart={path.cart}
                        info={path.info}
                        shipping={path.shipping}
                        payment={path.payment}
                    />
                </div>
                <div className="divide-x-0 sm:divide-x-0 md:divide-x-0 lg:divide-x-2 xl:divide-x-2 flex flex-wrap flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-between">
                    <Shipping />
                    <div className="mx-5 sm:mx-5 md:mx-28 mb-5 block sm:block md:block lg:hidden xl:hidden">
                        <Path
                            cart={path.cart}
                            info={path.info}
                            shipping={path.shipping}
                            payment={path.payment}
                        />
                    </div>
                    <OrderList />
                </div>
            </div>
        </div>
    );
};

export default ShippingPage;