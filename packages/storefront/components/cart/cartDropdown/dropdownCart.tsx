import type { NextComponentType } from "next";
import React, { useState, useRef, useEffect } from "react";
import Buttons from "../../global/components/buttons/button";
// import cartDatas from "../../../allData/cart-data.json";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { userAPI } from "APIs";
import { useRouter } from "next/router";
import { deleteCartItem } from "toolkit/cartSlice";
import { ResponseItem } from "models";

const CartDropdown = () => {
  const [cartTotal, setCartTotal] = useState(false);
  const componentRef = useRef();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const handleCartItemDelete = async (product: ResponseItem) => {
    await userAPI.deleteCartItem({
      productId: product.productId,
    });

    dispatch(deleteCartItem(product));
  };

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          setCartTotal(false);
        }
      }
    }
  }, []);
  const dropdownData = () => {
    // console.log("))))))))))))))))))))))))))))))", cartData.items.length)
    return cartData?.map((cartData, index) => {
      return (
        <div key={cartData.productId}>
          <div className="group w-full flex items-center px-4 py-2 text-sm leading-5 text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            <div className="flex flex-col-4 items-center bg-white">
              <div className="col-span-2 ">
                <a href="#" className="">
                  <img
                    className="object-cover w-full h-36 rounded-t-lg w-30 rounded-none"
                    src={cartData?.product?.photos[0]?.url}
                    alt="Product Image"
                  />
                </a>
              </div>
              <div className="col-span-2 justify-between px-4 leading-normal">
                <div>
                  <a href="#" className="text-sm font-bold text-gray-900 mr-2">
                    {cartData?.product?.info?.name}
                  </a>
                </div>
                <div>
                  <div className="py-2">
                    <span className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                      {cartData?.quantity} &nbsp;
                    </span>
                    X &nbsp;
                    <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                      $ {cartData?.product?.info?.price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <button onClick={() => handleCartItemDelete(cartData)}>
                  {cross}
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100"></div>
        </div>
      );
    });
  };
  return (
    <>
      <div
        ref={componentRef as any}
        className="flex items-center justify-center"
      >
        <div className="relative inline-block text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                onClick={(e) => setCartTotal(!cartTotal)}
              >
                {cartIcon}
                <p className="badge badge-light">{cartData?.length}</p>
              </button>
            </span>
          </div>
          {cartTotal && (
            <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg">
              <div className="rounded-md bg-white shadow-xs">
                {/* new div starts here */}
                <div className="py-1 overflow-y-auto h-60">
                  {dropdownData()}
                </div>
                {/* new div ends here */}
                <div className="flex justify-between p-4">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-base font-semibold">
                    ${totalCartPrice}
                  </span>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a href="/cart">
                    <Buttons
                      bgColor="black"
                      height={10}
                      width={68}
                      text={"VIEW CART"}
                    />
                  </a>
                </div>
                <div className="px-6 mb-4 flex justify-center">
                  <a href="/checkout">
                    <Buttons
                      bgColor="black"
                      height={10}
                      width={120}
                      text={"CHECKOUT"}
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
