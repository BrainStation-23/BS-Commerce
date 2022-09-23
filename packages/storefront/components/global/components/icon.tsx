import Link from 'next/link';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { addToCart, storeAllCartItems } from 'toolkit/cartSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { userAPI } from 'APIs';

import {
  CustomerProduct,
  Product,
  WishlistItem,
  WishlistProduct,
  ICompareItems,
} from '@bs-commerce/models';
import {
  setCartModalState,
  setModalState,
  setLoginModalState,
} from 'toolkit/modalSlice';
import {
  storeCompare,
  storeProductsToComparePublic,
} from 'toolkit/compareSlice';
import { deleteItemFromWishlist, storeWishlist } from 'toolkit/productsSlice';
import CartToast from '@/components/global/components/cartToast';

interface SingleProduct {
  product: Product | WishlistProduct | CustomerProduct;
}

const Icon: React.FC<SingleProduct> = (props: SingleProduct) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [modalCmp, setModalCmp] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [cartModalOn, setCartModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const token = useAppSelector(
    (state) => state?.persistedReducer.auth.access_token
  );

  const wishlistData = useAppSelector(
    (state) => state?.persistedReducer?.product.wishlist.items
  );

  const cartData = useAppSelector(
    (state) => state?.persistedReducer.cart.allCartItems
  );

  const compareItems = useAppSelector(
    (state) => state?.persistedReducer?.compare?.compareList?.items
  );

  const inCompareList = compareItems?.find(
    (item: ICompareItems) => item.productId === product?.id
  )
    ? true
    : false;

  let inWishlist = wishlistData?.find(
    (item: WishlistItem) => item.productId === product?.id
  )
    ? true
    : false;

  const productInCart = cartData?.find((item) => item.productId === product?.id)
    ? true
    : false;

  const btnClass =
    'peer mr-1 inline-block h-7 w-7 rounded-[50px] p-1 text-5xl text-black transition-all duration-300 hover:bg-primary hover:text-white';
  const btnClassFilled =
    'peer mr-1 inline-block h-7 w-7 rounded-[50px] p-1 text-5xl transition-all duration-300 bg-primary text-white';

  const handleAddToCart = async () => {
    if (token) {
      const cartProduct = {
        id: product.id!,
        info: product.info!,
        meta: { friendlyPageName: product.meta?.friendlyPageName! },
        photos: product.photos!,
      };
      const cartItem = {
        product: cartProduct!,
        productId: product.id!,
        quantity: 1,
      };
      // toast.success('+1 Item added to cart');
      if (!productInCart) {
        toast(<CartToast product={product} />, {
          containerId: 'bottom-left',
        });
        const cart = await userAPI.addToCart({
          productId: cartItem.productId,
          quantity: 1,
        });
        dispatch(storeAllCartItems(cart?.data?.items!));
        dispatch(addToCart(cartItem));
        // dispatch(setCartModalState({ showModal: !cartModalOn, product: product }));
      }
    } else {
      dispatch(setLoginModalState(!modalOn));
    }
  };

  const handleAddToCompare = async () => {
    if (token) {
      try {
        const res = await userAPI.addToCompare(product?.id!);
        if ('data' in res!) {
          dispatch(setModalState(!modalCmp));
          dispatch(storeCompare(res.data));
        }
      } catch (error) {
        toast.error('Error happend.', {
          containerId: 'bottom-right',
        });
      }
    } else {
      const productPhotos = product?.photos!.map((photo) => photo?.url!);
      const productDetails = {
        info: {
          name: product?.info?.name!,
          price: product?.info?.price!,
          shortDescription: product?.info?.shortDescription!,
          fullDescription: product?.info?.shortDescription!,
          oldPrice: product?.info?.oldPrice!,
        },
        meta: {
          friendlyPageName: product?.meta?.friendlyPageName!,
        },
        photos: productPhotos!,
      };
      dispatch(
        storeProductsToComparePublic({
          productId: product?.id!,
          productDetails: productDetails!,
        })
      );
      dispatch(setModalState(!modalCmp));
      //dispatch(setLoginModalState(!modalOn));
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
        try {
          const newWishlist = await userAPI.getCustomerWishlist(token);
          dispatch(storeWishlist(newWishlist!));
        } catch (error) {}
        toast.success('Item added to wishlist', {
          containerId: 'bottom-right',
        });
        inWishlist = true;
      } catch (error) {
        toast.error('Failed to add item to wishlist', {
          containerId: 'bottom-right',
        });
      }
    } else {
      dispatch(setLoginModalState(!modalOn));
    }
  };

  const deleteFromWishlist = async (productId: string) => {
    if (token) {
      try {
        await userAPI.deleteWishlistItem(productId);
        toast.error('Item removed from wishlist', {
          containerId: 'bottom-right',
        });
        dispatch(deleteItemFromWishlist(productId));
        inWishlist = false;
      } catch (error) {
        toast.error('Failed to remove item from wishlist', {
          containerId: 'bottom-right',
        });
      }
    } else {
      dispatch(setLoginModalState(!modalOn));
    }
  };

  return (
    <>
      <div className="rounded-full bg-white p-2 text-center drop-shadow-md">
        {/* <Link href="/" passHref> */}
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={productInCart ? btnClassFilled : btnClass}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            onClick={(event) => {
              handleAddToCart();
              event.preventDefault();
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          <div
            className={`absolute ${
              productInCart ? '-left-8' : '-left-5'
            } -top-7 mb-6 hidden flex-col items-center peer-hover:flex`}
          >
            <span className="whitespace-no-wrap z-10 ml-5 rounded-md bg-zinc-900 p-2 text-sm leading-none text-white shadow-lg">
              {productInCart ? 'Already Added' : 'Add to cart'}
            </span>
            <div className="-ml-5 -mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
          </div>
        </span>
        {/* </Link> */}

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={btnClass}
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

        <Link href={token ? `/` : `/account/sign-in`} passHref>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={inWishlist ? btnClassFilled : btnClass}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              onClick={(event) => {
                inWishlist === true
                  ? deleteFromWishlist(product.id!)
                  : handleAddToWishlist(product.id!, 1);
                event.preventDefault();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <div
              className={`absolute left-6 ${
                inWishlist ? '-top-10' : '-top-6'
              }  mb-6 hidden flex-col items-center peer-hover:flex`}
            >
              <span className="whitespace-no-wrap z-10 w-full rounded-md bg-zinc-900 p-[6px] text-sm leading-none text-white shadow-lg">
                {inWishlist ? '- Remove from wishlist' : '+ Add to wishlist'}
              </span>
              <div className="-mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
            </div>
          </span>
        </Link>
        <Link href="/" passHref>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={inCompareList ? btnClassFilled : btnClass}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              onClick={(event) => {
                handleAddToCompare();

                event.preventDefault();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <div className="absolute left-6 -top-7 mb-6 hidden items-center peer-hover:inline-block">
              <span className="whitespace-no-wrap relative z-10 rounded-md bg-zinc-900 p-[6px] text-sm leading-none text-white shadow-lg">
                {inCompareList ? 'Already Added' : 'Add to compare'}
                <div className="absolute right-5 -bottom-1 -mt-2 h-3 w-3 rotate-45 bg-zinc-900"></div>
              </span>
            </div>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Icon;
