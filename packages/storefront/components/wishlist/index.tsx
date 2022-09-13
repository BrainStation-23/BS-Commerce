import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
import CartModal from '@/components/global/components/modal/cartModal';
import { setCartModalState } from 'toolkit/modalSlice';
import WishlistBody from './wishlistBody';
import { WishlistItem } from '@bs-commerce/models';
import { BreadCrumb } from 'atomic-components';

const WishlistComponent: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const wishlistData = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );

  const modalProduct = useAppSelector(
    (state) => state.persistedReducer.modal.setModalCart.product
  );

  const modalStateCart = useAppSelector(
    (state) => state.persistedReducer.modal.setModalCart.showModal
  );

  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
  );
  //console.log(wishlistData);
  const closeCartModal = () => {
    setShowCartModal(false);
    dispatch(setCartModalState({ showModal: false }));
  };

  const handleDeleteAllWishlistItems = async () => {
    try {
      await userAPI.deleteFullWishlist();
      dispatch(deleteFullWishlist());
      toast.error('Wishlist cleared', {
        containerId: 'bottom-right',
      });
    } catch (error) {
      toast.error('Error happened. Please try again.', {
        containerId: 'bottom-right',
      });
    }
  };

  return (
    <div className="mb-7">
      <BreadCrumb
        title="Wishlist"
        pathArray={['Home', 'Wishlist']}
        linkArray={['/', '/wishlist']}
      />

      {modalOn && wishlistData.items?.length! > 0 && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          trigger={handleDeleteAllWishlistItems}
          modalTitle="Delete Wishlist"
          bodyText="Are you sure?"
        />
      )}
      <div className="container mx-auto">
        <div className="mx-5 flex items-center justify-between pt-3">
          <p className="text-xl">FAVOURITES</p>
          {wishlistData?.items?.length! > 0 && (
            <button
              onClick={() => setModalOn(true)}
              className="mt-5 rounded bg-green-600/100 py-2 px-6 text-white hover:bg-black"
            >
              Clear Wishlist
            </button>
          )}
        </div>
        {wishlistData?.items?.length! <= 0 && (
          <div className="my-10 flex flex-col items-center">
            <div className="my-2">
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
        <div className="mt-10 grid grid-cols-2 place-items-center gap-y-5 md:hidden">
          <WishlistBody productImageHeight={150} productImageWidth={150} />
        </div>
        <div className="mx-5 mt-10 hidden justify-center gap-5 md:flex md:flex-wrap">
          <WishlistBody productImageHeight={200} productImageWidth={200} />
        </div>
      </div>
    </div>
  );
};

export default WithAuth(WishlistComponent);
