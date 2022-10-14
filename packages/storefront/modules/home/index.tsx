import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import {
  setCartModalState,
  setModalState,
  setLoginModalState,
} from 'store/slices/modalSlice';

import ImageSlider from '@/modules/home/imageSlider';
import HomeShipping from '@/modules/home/homeShipping';
import TrendingProducts from '@/modules/home/trend/index';
import BannerPage from '@/modules/global/bannerComponent';
import WeekDeals from '@/modules/home/weekDeals';
import HomefullBanner from '@/modules/global/bannerComponent/homeFullBanner';
import BestSell from '@/modules/home/bestSell';
import FeaturedProducts from '@/modules/home/featuredProducts';
import ModalLogin from '@/modules/global/components//modal/modal';
import { useEffect } from 'react';

const HomeComponent: NextComponentType = () => {
  const modalStateLogin = useAppSelector(
    (state) => state.persistedReducer.modal.setModalLogin
  );

  const modalStateCart = useAppSelector(
    (state) => state.persistedReducer.modal?.setModalCart?.showModal
  );

  const modalProduct = useAppSelector(
    (state) => state.persistedReducer.modal?.setModalCart?.product
  );

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const closeCartModal = () => {
    setShowCartModal(false);
    dispatch(setCartModalState({ showModal: false }));
  };

  useEffect(() => {
    dispatch(setModalState(false));
    dispatch(setLoginModalState(false));
    dispatch(setCartModalState({ showModal: false }));
  }, [router.asPath]);

  return (
    <>
      <div className="scroll-smooth hover:scroll-auto">
        {modalStateLogin && (
          <ModalLogin
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
        <div className="mb-4 md:mb-10">
          <FeaturedProducts />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
