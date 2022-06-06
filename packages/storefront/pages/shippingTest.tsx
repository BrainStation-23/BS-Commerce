import React from "react";
import Path from "@/components/global/components/path";

const path = {
    cart: false,
    info: false,
    shipping: true,
    payment: false,
};

const Practice = () => {
    return (
        <div className="px-3.5 m-0 lg:mx-20 lg:my-20">
            <p className="font-medium text-5xl text-[#333333]">Safira</p>
            <br />
            <Path
                cart={path.cart}
                info={path.info}
                shipping={path.shipping}
                payment={path.payment}
            ></Path>
            <div className="box-border p-4 border-2 mt-16 divide-y-2 rounded-md text-center mx-auto">
                <div className="flex justify-between p-4">
                    <div className="flex flex-wrap">
                        <p className="text-lg text-[#333333] pr-10">Contact</p>
                        <p className="text-lg">+880 151-5209334</p>
                    </div>

                    <a
                        href="https://seinfeldquotes.com"
                        className="ml-10 text-md"
                    >
                        Change
                    </a>
                </div>

                <div className="flex justify-between p-4">
                    <div className="flex flex-wrap">
                        <p className="text-lg text-[#333333] pr-10">Ship to</p>
                        <p className="text-lg">
                            Kalachandpur Gulshan Dhaka-1212
                        </p>
                    </div>
                    {/* <p className="ml-10 text-sm">Change</p> */}
                    <a
                        href="https://seinfeldquotes.com"
                        className="ml-10 text-md"
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
        </div>
    );
};

export default Practice;
