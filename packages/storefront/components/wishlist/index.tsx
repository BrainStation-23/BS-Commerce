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
import CartModal from '@/components/global/components/modal/cartModal';
import { setCartModalState } from 'toolkit/modalSlice';
import Image from 'next/image';
import WishlistBody from './wishlistBody';

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
    <div className="mb-7">
      <Breadcrumb
        title="Wishlist"
        pathArray={['Home', 'Wishlist']}
        linkArray={['/', '/wishlist']}
      />
      {modalState && <ModalCompare setModal={true} />}
      {modalStateCart && (
        <CartModal
          open={modalStateCart}
          onClose={closeCartModal}
          product={modalProduct!}
        />
      )}

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
          <button
            onClick={() => setModalOn(true)}
            className="mt-5 rounded bg-green-600/100 py-2 px-6 text-white hover:bg-black"
          >
            Clear Wishlist
          </button>
        </div>
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
