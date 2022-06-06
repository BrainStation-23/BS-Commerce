import React from "react";
import Link from "next/link";

interface Path {
    cart: boolean;
    info: boolean;
    shipping: boolean;
    payment: boolean;
}

// const Path: React.FC<Path> = ({cart, info, shipping, payment}) => {
const Path = (props: Path) => {
    const {cart, info, shipping, payment} = props
    return (
        <div className="flex flex-wrap text-xs gap-2">
            <div className={cart ? "font-bold" : "font-normal"}>
                <Link href="/cart">Cart</Link>
            </div>
            {" > "}
            <div className={info ? "font-bold" : "font-normal"}>
                <Link href="/information">Information</Link>
            </div>
            {" > "}
            <div className={shipping ? "font-bold" : "font-normal"}>
                <Link href="/shippingTest">Shipping</Link>
            </div>
            {" > "}
            <div className={payment ? "font-bold" : "font-normal"}>
                <Link href="/payment">Payment</Link>
            </div>
        </div>
    );
};

export default Path;
