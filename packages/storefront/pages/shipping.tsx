import React from "react";
import Link from "next/link";

const Shipping = () => {
    return (
        <div className="flex flex-wrap w-11/12">
            <div className="w-full">
                <div className="mt-20 ml-28">
                    <p className="font-medium text-5xl text-[#333333]">
                        Safira
                    </p>
                    <br />
                    {/* <div>
                        <Link href="/cart">Cart</Link>
                        <Link href="/cart/information">Information</Link>
                        <Link href="/cart/information/shipping">Shipping</Link>
                    </div> */}
                    <p>
                        Cart{">"}Information{">"}Shipping{">"}Payment
                    </p>
                    <div className="box-border h-25 w-25 p-4 border-2 mt-16 mr-10 divide-y-2 rounded-md text-center">
                        <div className="mb-5 flex flex-wrap justify-between">
                            <div className="flex-wrap justify-between sm:flex">
                                <p className="text-lg text-[#333333]">
                                    Contact
                                </p>
                                <p className="ml-10 text-lg">
                                    +880 151-5209334
                                </p>
                            </div>
                            <div>
                                <p className="ml-10">Change</p>
                            </div>
                        </div>

                        <div className="mb-5 mt-5 pt-5 flex flex-wrap justify-between">
                            <div className="flex flex-wrap justify-between">
                                <p className="text-lg text-[#333333]">
                                    Ship to
                                </p>
                                <p className="ml-10 text-lg">
                                    Kalachandpur Gulshan Dhaka-1212
                                </p>
                            </div>
                            <div>
                                <p className="ml-10">Change</p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-16 font-normal text-2xl">
                        Shipping method
                    </p>

                    <div className="rounded-md flex flex-wrap justify-between box-border h-25 w-25 p-4 border-2 mt-16 mr-10 text-xl text-[#333333] hover:bg-white cursor-pointer">
                        <p>Standard</p>
                        <p className="ml-5">Free</p>
                    </div>

                    <div className="flex mt-10">
                        <div className="">
                            
                        </div>

                        <div className="m-2 ml-5">
                            <span>Return to information</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
