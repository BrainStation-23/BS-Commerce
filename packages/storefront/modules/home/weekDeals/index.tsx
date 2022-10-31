import { NextComponentType } from 'next';
import { SwiperSlide } from 'swiper/react';
import { useAppSelector } from 'store/hooks/index';
import useTranslation from 'next-translate/useTranslation';

import { CustomerProduct } from '@bs-commerce/models';

import PageContainer from '@/modules/common/layout/pageContainer';
import SwiperGrid from '@/modules/common/swiper/swipergrid';
import HomeComponentHeader from '@/modules/home/common/homeComponentHeader';
import VerticalProduct from '@/modules/common/product/verticalProduct';

const WeekDeals: NextComponentType = () => {
  const { t } = useTranslation();
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );
  // Gets number of products to show
  const getMinimumProducts = () => {
    const w = window.innerWidth;
    if (w >= 980) return 6;
    if (w >= 768) return 3;
    return 2;
  };
  return (
    <>
      <PageContainer className="max-w-7xl">
        <HomeComponentHeader
          heading1={t('home:recently_added')}
          heading2={t('home:weekly_deals')}
        />
        <SwiperGrid
          slidesPerViewmobile={2}
          slidesPerView768={3}
          slidesPerView980={5}
          rows={1}
          loop={products?.length > getMinimumProducts() ? true : false}
        >
          {products &&
            products.length > 0 &&
            products.map((product: CustomerProduct) => (
              <SwiperSlide key={product.id}>
                <VerticalProduct product={product} />
              </SwiperSlide>
            ))}
        </SwiperGrid>
      </PageContainer>
    </>
  );
};

export default WeekDeals;
