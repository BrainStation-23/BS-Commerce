import useTranslation from 'next-translate/useTranslation';
import { NextComponentType } from 'next';
import { SwiperSlide } from 'swiper/react';
import { useAppSelector } from 'store/hooks/index';

import { CustomerProduct } from '@bs-commerce/models';
import Container from '@/modules/global/components/container';
import SwiperGrid from '@/modules/global/components/swipergrid';
import Product from '@/modules/global/components/product/product';

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
      <Container className="max-w-7xl">
        <div className="mb-6 text-center">
          <p className="font-serif text-lg italic">
            {t('home:recently_added')}
          </p>
          <h1 className="text-bold text-4xl ">{t('home:weekly_deals')}</h1>
        </div>
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
                <Product product={product} />
              </SwiperSlide>
            ))}
        </SwiperGrid>
      </Container>
    </>
  );
};

export default WeekDeals;
