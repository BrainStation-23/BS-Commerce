import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { setModalState, setWishlistModalState } from 'toolkit/modalSlice';

import ImageSlider from '@/components/home/imageSlider';
import HomeShipping from '@/components/home/homeShipping';
import TrendingProducts from '@/components/home/trend/index';
import BannerPage from '@/components/global/bannerComponent';
import WeekDeals from '@/components/home/weekDeals';
import HomefullBanner from '@/components/global/bannerComponent/homeFullBanner';
import BestSell from '@/components/home/bestSell';
import FeaturedProducts from '@/components/home/featuredProducts';
import Modal from '@/components/comparison';
import ModalWishlist from '@/components/global/components//modal/modal';
import { useEffect } from 'react';

const HomeComponent: NextComponentType = () => {
  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
  );

  const modalStateWishlist = useAppSelector(
    (state) => state.persistedReducer.modal.setModalWishlist
  );

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  useEffect(() => {
    dispatch(setModalState(false));
    dispatch(setWishlistModalState(false));
  }, [router.asPath]);

  return (
    <>
      {modalState && <Modal setModal={true} />}
      {modalStateWishlist && (
        <ModalWishlist
          setModalOn={setModalOn}
          setChoice={setChoice}
          modalTitle="You need to login first."
          bodyText="Proceed to login?"
        />
      )}
      <ImageSlider />
      <HomeShipping />
      <div className="mb-4 md:mb-10">
        <TrendingProducts />
      </div>
      <div className="mb-4 md:mb-10">
        <BannerPage />
      </div>
      <div className="mb-4 md:mb-10">
        <WeekDeals />
      </div>
      <div className="mb-4 md:mb-10">
        <HomefullBanner />
      </div>
      <div className="mb-4 md:mb-10">
        <BestSell />
      </div>
      {/* <div className="mb-5 md:mb-10">
        <Blog />
      </div> */}
      <div className="mb-4 md:mb-10">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default HomeComponent;
