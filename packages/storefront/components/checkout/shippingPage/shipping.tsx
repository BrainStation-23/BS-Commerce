import React from "react";
import ChevronLeft from "@/components/global/icons-for-checkout-page/chevron-left";
import Path from "@/components/global/components/path";
import OrderList from "@/components/checkout/orderList";
import CheckoutFooter from "../checkoutFooter";
import Link from "next/link";

const path = {
  cart: false,
  info: false,
  shipping: true,
  payment: false,
};

const Shipping = (props: any) => {
  const { setModal } = props;
  console.log(setModal);
  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
      <div className="px-3.5 m-0 md:mx-20 lg:mx-20 xl:mx-20 lg:my-12">
        <div className="box-border p-4 border-2 mt-5 divide-y-2 rounded-md text-center mx-auto">
          <div className="flex justify-between items-center p-4">
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-[#333333]">Contact</p>
              <p className="text-sm">+880 151-5209334</p>
            </div>
            <button
              onClick={() => {
                const obj = {
                    info: true,
                    ship: false,
                    pay: false,
                  }
                setModal(obj);
              }}
              className="ml-10 text-sm"
              style={{ border: "none" }}
            >
              Change
            </button>
          </div>

          <div className="flex justify-between items-center p-4">
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-[#333333]">Ship to</p>
              <p className="text-sm">Kalachandpur Gulshan Dhaka-1212</p>
            </div>
            <button
              onClick={() => {
                const obj = {
                    info: true,
                    ship: false,
                    pay: false,
                  }
                setModal(obj);
              }}
              className="ml-10 text-sm"
              style={{ border: "none" }}
            >
              Change
            </button>
          </div>
        </div>

        <p className="pt-7 font-normal text-lg">Shipping method</p>

        <div className="my-3 rounded-md flex flex-wrap justify-between box-border p-5 border-2 text-sm text-[#333333] hover:bg-white cursor-pointer">
          <p>Standard</p>
          <p className="ml-5 font-medium">Free</p>
        </div>

        <div className="mt-5 lg:flex">
          <div>
            <button
              onClick={() => {
                setModal({
                  info: false,
                  ship: false,
                  pay: true,
                });
              }}
              className="bg-[#000000] text-white py-5 px-6 rounded-md w-full text-sm"
            >
              Continue to payment
            </button>
          </div>
          <div className="flex flex-wrap justify-center lg:ml-6 mt-5 mb-5">
            <div className="items-center block sm:block sm:items-center md:hidden lg:hidden xl:hidden">
              <Link href="/information" passHref>
                <a className="text-decoration-none">{<ChevronLeft />}</a>
              </Link>
            </div>
            <Link href="/checkout?step=information" passHref>
              <a className="text-decoration-none">Return to information</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-6 sm:mx-10 md:mx-10 lg:mx-24">
        <hr className="mt-2" />
        <CheckoutFooter />
      </div>
    </div>
  );
};

export default Shipping;
