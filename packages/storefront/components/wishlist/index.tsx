import React from 'react';
import Link from 'next/link';

import { NextComponentType } from 'next';

import { userAPI } from 'APIs';
import { toast } from 'react-toastify';
import { useState } from 'react';
import {
  deleteFullWishlist,
  deleteItemFromWishlist,
} from 'toolkit/productsSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';

import Picture from '@/components/global/components/product/common/picture';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import WishlistIcon from '@/components/wishlist/wishlist-icon';
import WishlistProductInfo from '@/components/wishlist/wishlistProduct';
import WithAuth from '@/components/auth/withAuth';
import Modal from '@/components/global/components/modal/modal';
import Icon from '@/components/global/components/icon';
import ModalCompare from '@/components/comparison';

const WishlistComponent: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const wishlistData = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );

  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
  );
  //console.log(wishlistData);

  const handleDeleteAllWishlistItems = async () => {
    try {
      await userAPI.deleteFullWishlist();
      dispatch(deleteFullWishlist());
      toast.success('Wishlist cleared');
    } catch (error) {
      toast.error('Error happened. Please try again.');
    }
  };

  // async function handleClick(data: string) {
  //   try {
  //     await userAPI.deleteWishlistItem(data);
  //     toast.success('Item removed from wishlist');
  //     dispatch(deleteItemFromWishlist(data));
  //   } catch (error) {
  //     toast.error('Failed to remove item from wishlist');
  //   }
  // }

  return (
    <>
      <Breadcrumb
        title="Wishlist"
        pathArray={['Home', 'Wishlist']}
        linkArray={['/', '/wishlist']}
      />
      {modalState && <ModalCompare setModal={true} />}
      {modalOn && wishlistData.items?.length! > 0 && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          trigger={handleDeleteAllWishlistItems}
          modalTitle="Delete Wishlist"
          bodyText="Are you sure?"
        />
      )}
      <div className="mx-5 flex items-center justify-between pt-3 lg:mx-16 xl:mx-16">
        <p className="text-xl">FAVOURITES</p>
        <button
          onClick={() => setModalOn(true)}
          className="mt-5 rounded bg-green-600/100 py-2 px-6 text-white hover:bg-black"
        >
          Clear Wishlist
        </button>
      </div>
      <div className="mx-5 mt-10 flex flex-wrap justify-center gap-5 sm:mx-5 md:mx-7 lg:mx-10 xl:mx-10">
        {wishlistData.items?.length! <= 0 && (
          <div className="mx-16 my-10">
            <div className="mx-16 my-2">
              <WishlistIcon height="h-16" width="w-16" />
            </div>
            <p className="text-xl text-green-600/100">
              Your wishlist is empty.
            </p>
            <Link href="/" passHref>
              <div className="my-2 flex cursor-pointer flex-wrap justify-center hover:text-green-600/100">
                <p>Continue Shopping</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        )}
        {wishlistData?.items?.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col flex-wrap items-center">
                <Link
                  href={{
                    pathname: `product/${data?.product?.info.name}`,
                    query: {
                      id: data?.product?.id,
                      name: data?.product?.info.name,
                    },
                  }}
                  //as={`product/${data?.product?.info.name}`}
                  passHref
                >
                  <div className="relative flex w-56 cursor-pointer flex-col items-center justify-center">
                    <Picture
                      src={data.product?.photos![0].url!}
                      alt={data.product?.info.shortDescription}
                      width={200}
                      height={200}
                    />

                    <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-black opacity-0 duration-300 hover:-translate-y-3 hover:opacity-70">
                      <Icon product={data?.product!} />
                    </div>

                    <div className="text-center">
                      <WishlistProductInfo product={data?.product!} />
                    </div>
                  </div>
                </Link>
                {/* <button
                  className="peer mb-5 mt-2 items-center text-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Remove from wishlist"
                  onClick={() => {
                    handleClick(data.productId);
                  }}
                >
                  <WishlistIcon height="h-6" width="w-6" />
                </button> */}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default WithAuth(WishlistComponent);
