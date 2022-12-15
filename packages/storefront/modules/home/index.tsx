import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks/index';
import {
  setCartModalState,
  setLoginModalState,
  setModalState,
} from 'store/slices/modalSlice';

import BannerPage from '@/modules/common/banner';
import HomefullBanner from '@/modules/common/banner/components/homeFullBanner';
import BestSell from '@/modules/home/bestSell';
import FeaturedProducts from '@/modules/home/featuredProducts';
import HomeShipping from '@/modules/home/homeShipping';
import ImageSlider from '@/modules/home/imageSlider';
import TrendingProducts from '@/modules/home/trendingProducts/index';
import WeekDeals from '@/modules/home/weekDeals';

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
        <div className="mb-4 md:mb-16">
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
