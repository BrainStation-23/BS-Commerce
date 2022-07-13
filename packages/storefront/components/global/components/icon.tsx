import Link from 'next/link';

import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { addToCart } from 'toolkit/cartSlice';
import { userAPI } from 'APIs';

import React, { useState } from 'react';
import { AddCompareItem, Product } from 'models';
import { setModalState } from 'toolkit/modalSlice';
import { storeProductsToCompare } from 'toolkit/compareSlice';

interface SingleProduct {
  product: Product;
}

const Icon: React.FC<SingleProduct> = (props: SingleProduct) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [modalCmp, setModalCmp] = useState(false);

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id!,
      info: product.info!,
      photos: product.photos!,
    };
    const cartItem = {
      product: cartProduct!,
      productId: product.id!,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const handleAddToCompare = async () => {
    try {
      await userAPI.addToCompare(product.id);
    } catch (error) {
      toast.error('Error happend.');
    }
  };

  const handleAddToWishlist = async (productId: string, quantity: number) => {
    if (token) {
      const data = {
        productId,
        quantity,
      };
      try {
        await userAPI.addToWishList(data);
        toast.success('Item added to wishlist');
      } catch (error) {
        toast.error('Failed to add item to wishlist');
      }
    } else {
      toast.error('Please login to your account first.');
      router.push('/account/sign-in');
    }
  };

  return (
    <div className="rounded-full bg-white p-2 text-center drop-shadow-md">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="peer mr-1 inline-block h-7 w-7 rounded-[50px] p-1 text-5xl text-black transition-all duration-300 hover:bg-[#40A944] hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          onClick={handleAddToCart}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <div className="absolute -left-5 -top-7 mb-6 hidden flex-col items-center peer-hover:flex">
          <span className="whitespace-no-wrap z-10 rounded-md bg-zinc-900 p-2 text-sm leading-none text-white shadow-lg">
            Add to cart
          </span>
          <div className="-mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
        </div>
      </span>

      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="peer mr-1 inline-block h-7 w-7 rounded-[50px] p-1 text-5xl text-black transition-all duration-300 hover:bg-[#40A944] hover:text-white"
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
        <div className="absolute left-3 -top-7 mb-6 hidden flex-col items-center peer-hover:flex">
          <span className="whitespace-no-wrap z-10 rounded-md bg-zinc-900 p-2 text-sm leading-none text-white shadow-lg">
            Quick View
          </span>
          <div className="-mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
        </div>
      </span>

      <Link href={token ? `/wishlist` : `/account/sign-in`} passHref>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="peer mr-1 inline-block h-7 w-7 rounded-[50px] p-1 text-5xl text-black transition-all duration-300 hover:bg-[#40A944] hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            onClick={() => handleAddToWishlist(product.id, 1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div className="absolute left-6 -top-6 mb-6 hidden flex-col items-center peer-hover:flex">
            <span className="whitespace-no-wrap z-10 w-full rounded-md bg-zinc-900 p-[6px] text-sm leading-none text-white shadow-lg">
              + Add to wishlist
            </span>
            <div className="-mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
          </div>
        </span>
      </Link>
      <Link href="/" passHref>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="peer mr-1 inline-block h-7 w-7 rounded-[50px] p-1 text-5xl text-black transition-all duration-300 hover:bg-[#40A944] hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            onClick={() => {
              handleAddToCompare();
              dispatch(setModalState(!modalCmp));
              dispatch(storeProductsToCompare(product));
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <div className="absolute left-7 -top-7 mb-6 hidden items-center peer-hover:inline-block">
            <span className="whitespace-no-wrap relative z-10 rounded-md bg-zinc-900 p-[6px] text-sm leading-none text-white shadow-lg">
              Add to compare
              <div className="absolute right-5 -bottom-1 -mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
            </span>
          </div>
        </span>
      </Link>
    </div>
  );
};

export default Icon;
