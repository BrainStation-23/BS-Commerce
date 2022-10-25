import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { NextComponentType } from 'next';

import { userAPI } from 'APIs';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { deleteFullWishlist } from 'store/slices/productsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';

import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import HeartIcon from '@/modules/common/icons/heartIcon';
import WithAuth from '@/modules/auth/withAuth';
import Modal from '@/modules/common/modal/modal';
import WishlistBody from '@/modules/wishlist/components/body';
import CircledRightArrow from '@/modules/common/icons/circledRightArrow';
import ButtonSecondary from '../common/buttons/buttonSecondary';

const WishlistComponent: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const wishlistData = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );

  const handleDeleteAllWishlistItems = async () => {
    try {
      await userAPI.deleteFullWishlist();
      dispatch(deleteFullWishlist());
      toast.error(`${t('common:wishlist_cleared')}`, {
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
      <Breadcrumb
        title="Wishlist"
        pathArray={['Home', 'Wishlist']}
        linkArray={['/', '/wishlist']}
      />

      {modalOn && wishlistData.items?.length! > 0 && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          trigger={handleDeleteAllWishlistItems}
          modalTitle={`${t('wishlist:delete_wishlist')}`}
          bodyText={`${t('common:are_you_sure')}`}
        />
      )}
      <div className="container mx-auto">
        <div className="mx-5 flex items-center justify-between pt-3">
          <p className="text-xl">{t('wishlist:favourites')}</p>
          {wishlistData?.items?.length! > 0 && (
            <ButtonSecondary
              text={t('wishlist:clear_wishlist')}
              onClickFunction={() => setModalOn(true)}
              className="mt-5 py-2 px-6"
            />
          )}
        </div>
        {wishlistData?.items?.length! <= 0 && (
          <div className="my-10 flex flex-col items-center gap-y-2">
            <div className="fill-primary stroke-primary dark:fill-dark_primary dark:stroke-dark_primary">
              <HeartIcon height="h-16" width="w-16" />
            </div>
            <p className="text-xl text-primary dark:text-dark_primary">
              {t('wishlist:empty_wishlist')}
            </p>
            <Link href="/" passHref>
              <div className="flex cursor-pointer flex-wrap justify-center gap-x-1 hover:text-primary dark:hover:text-dark_primary">
                <p>{t('common:continue_shopping')}</p>
                <CircledRightArrow height="h-6" width="h-6" />
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
