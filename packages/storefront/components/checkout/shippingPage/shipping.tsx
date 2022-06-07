import React from "react";
import Path from "@/components/global/components/path";
import OrderList from "@/components/checkout/orderList";

const path = {
    cart: false,
    info: false,
    shipping: true,
    payment: false,
};

const  Shipping = () => {
    return (
        <div className="w-3/5">
            <div className="px-3.5 m-0 lg:mx-20 lg:my-12">
                {/* <Path
                    cart={path.cart}
                    info={path.info}
                    shipping={path.shipping}
                    payment={path.payment}
                ></Path> */}
                <div className="box-border p-4 border-2 mt-10 divide-y-2 rounded-md text-center mx-auto">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex flex-wrap gap-4">
                            <p className="text-xs text-[#333333]">Contact</p>
                            <p className="text-xs">+880 151-5209334</p>
                        </div>

                        <a
                            href="https://seinfeldquotes.com"
                            className="ml-10 text-xs"
                        >
                            Change
                        </a>
                    </div>

                    <div className="flex justify-between items-center p-4">
                        <div className="flex flex-wrap gap-4">
                            <p className="text-xs text-[#333333]">Ship to</p>
                            <p className="text-xs">
                                Kalachandpur Gulshan Dhaka-1212
                            </p>
                        </div>
                        <a
                            href="https://seinfeldquotes.com"
                            className="ml-10 text-xs"
                        >
                            Change
                        </a>
                    </div>
                </div>

                <p className="pt-7 font-normal text-lg">Shipping method</p>

                <div className="my-3 rounded-md flex flex-wrap justify-between box-border p-5 border-2 text-sm text-[#333333] hover:bg-white cursor-pointer">
                    <p className="text-lg">Standard</p>
                    <p className="ml-5 text-lg font-medium">Free</p>
                </div>

                <div className="mt-5 lg:flex">
                    <div>
                        <button className="bg-[#000000] text-white py-5 px-6 rounded-md w-full text-lg">
                            Continue to payment
                        </button>
                    </div>
                    <div className="mt-5 text-center">
                        <a
                            href="https://seinfeldquotes.com"
                            className="py-5 px-6 w-full text-lg"
                        >
                            Return to information
                        </a>
                    </div>
                </div>
                {/* <div>
                    <OrderList></OrderList>
                </div> */}
            </div>
        </div>
    );
};

export default Shipping;
