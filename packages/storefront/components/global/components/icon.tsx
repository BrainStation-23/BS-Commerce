import { userAPI } from "APIs";
import { Product } from "models";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

interface SingleProduct {
  product: Product;
}

const Icon = (props: SingleProduct) => {
  const { product } = props;
  const dispatch = useDispatch();
  // const token = useAppSelector((state) => { })
  // const token = document.cookie("token");
  // console.log(token)

  return (
    <div className="bg-white rounded-full text-center drop-shadow-md p-2">
      {/* <Link href="/" passHref> */}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="peer h-7 w-7 p-1 mr-1 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl text-black hover:text-white transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          onClick={async () => {
            await userAPI.addToCart({
              productId: product.id!,
              quantity: 1,
            });
            location.href = "/home"
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <div className="absolute flex-col items-center hidden mb-6 peer-hover:flex -left-5 -top-7">
          <span className="z-10 p-2 text-sm leading-none text-white whitespace-no-wrap bg-zinc-900 shadow-lg rounded-md">
            Add to cart
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-zinc-900"></div>
        </div>
      </span>
      {/* </Link> */}

      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="peer h-7 w-7 p-1 mr-1 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl text-black hover:text-white transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div className="absolute flex-col items-center hidden mb-6 peer-hover:flex left-3 -top-7">
          <span className="z-10 p-2 text-sm leading-none text-white whitespace-no-wrap bg-zinc-900 shadow-lg rounded-md">
            Quick View
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-zinc-900"></div>
        </div>
      </span>

      <Link href="/wishlist" passHref>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="peer h-7 w-7 p-1 mr-1 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl text-black hover:text-white transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div className="absolute flex-col items-center hidden mb-6 peer-hover:flex left-6 -top-6">
            <span className="z-10 p-[6px] text-sm leading-none text-white whitespace-no-wrap bg-zinc-900 shadow-lg rounded-md w-full">
              + Add to wishlist
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-zinc-900"></div>
          </div>
        </span>
      </Link>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="peer h-7 w-7 p-1 mr-1 inline-block hover:bg-[#40A944] rounded-[50px] text-5xl text-black hover:text-white transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <div className="absolute items-center hidden mb-6 peer-hover:inline-block left-7 -top-7">
          <span className="relative z-10 p-[6px] text-sm leading-none text-white whitespace-no-wrap bg-zinc-900 shadow-lg rounded-md">
            Add to compare
            <div className="absolute w-3 h-3 -mt-2 rotate-45 bg-zinc-900 right-5 -bottom-1"></div>
          </span>
        </div>
      </span>
    </div>
  );
};

export default Icon;
