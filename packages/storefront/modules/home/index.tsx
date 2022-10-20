import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { useAppDispatch } from 'store/hooks/index';
import {
  setCartModalState,
  setModalState,
  setLoginModalState,
} from 'store/slices/modalSlice';

import BestSell from '@/modules/home/bestSell';
import WeekDeals from '@/modules/home/weekDeals';
import ImageSlider from '@/modules/home/imageSlider';
import HomeShipping from '@/modules/home/homeShipping';
import TrendingProducts from '@/modules/home/trendingProducts/index';
import BannerPage from '@/modules/common/banner';
import FeaturedProducts from '@/modules/home/featuredProducts';
import HomefullBanner from '@/modules/common/banner/components/homeFullBanner';

const HomeComponent: NextComponentType = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setModalState(false));
    dispatch(setLoginModalState(false));
    dispatch(setCartModalState({ showModal: false }));
  }, [router.asPath]);

  return (
    <>
      <div className="scroll-smooth hover:scroll-auto">
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
