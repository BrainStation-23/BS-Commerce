import React from "react";
import Path from "@/components/global/components/path";
import OrderList from "@/components/checkout/orderList";
import ShippingPage from "@/components/checkout/shippingPage";

const path = {
    cart: false,
    info: false,
    shipping: true,
    payment: false,
};

const Practice = () => {
    return (
        <ShippingPage/>
    );
};

export default Practice;
