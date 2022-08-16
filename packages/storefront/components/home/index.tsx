import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import {
  setCartModalState,
  setModalState,
  setLoginModalState,
} from 'toolkit/modalSlice';

import ImageSlider from '@/components/home/imageSlider';
import HomeShipping from '@/components/home/homeShipping';
import TrendingProducts from '@/components/home/trend/index';
import BannerPage from '@/components/global/bannerComponent';
import WeekDeals from '@/components/home/weekDeals';
import HomefullBanner from '@/components/global/bannerComponent/homeFullBanner';
import BestSell from '@/components/home/bestSell';
import FeaturedProducts from '@/components/home/featuredProducts';
import Modal from '@/components/comparison';
import ModalLogin from '@/components/global/components//modal/modal';
import { useEffect } from 'react';
import BackToTopButton from 'pages/BackToTopButton';
import CartModal from '../global/components/modal/cartModal';

const HomeComponent: NextComponentType = () => {
  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
  );

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
        {modalState && <Modal setModal={true} />}

        {modalStateLogin && (
          <ModalLogin
            setModalOn={setModalOn}
            setChoice={setChoice}
            modalTitle="You need to login first."
            bodyText="Proceed to login?"
          />
        )}

        {modalStateCart && (
          <CartModal
            open={modalStateCart}
            onClose={closeCartModal}
            product={modalProduct!}
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
      </div>
    </>
  );
};

export default HomeComponent;
