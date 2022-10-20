import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { SwiperSlide } from 'swiper/react';

import { CustomerProduct } from '@bs-commerce/models';

import { useAppSelector } from 'store/hooks/index';

import SwiperGrid from '@/modules/common/swiper/swipergrid';
import PageContainer from '@/modules/common/layout/pageContainer';
import CycleProductGroup from '@/modules/home/common/cycleProductGroup';
import HomeComponentHeader from '@/modules/home/common/homeComponentHeader';

const FeaturedProducts = () => {
  const { t } = useTranslation();
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );
  // Gets number of products to show
  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 9;
    return 6;
  };
  return (
    <PageContainer className="max-w-6xl">
      <HomeComponentHeader
        heading1={t('home:recently_added')}
        heading2={t('home:featured_products')}
      />
      <SwiperGrid
        slidesPerViewmobile={1}
        slidesPerView768={2}
        slidesPerView980={3}
        rows={1}
        loop={products?.length > getMinimumProduct() ? true : false}
      >
        {products &&
          products.length > 0 &&
          products.map((product: CustomerProduct, index: number) =>
            index % 3 === 2 ? (
              <React.Fragment key={product?.id! + products[index - 1]?.id}>
                <SwiperSlide key={Math.random() * 999999}>
                  <CycleProductGroup
                    products={[
                      products[index - 2],
                      products[index - 1],
                      products[index],
                    ]}
                  />
                </SwiperSlide>
              </React.Fragment>
            ) : index + 1 === products.length ? (
              <React.Fragment key={product?.id! + products[index - 1]?.id}>
                <SwiperSlide key={Math.random() * 999999}>
                  <CycleProductGroup
                    products={[
                      products[index],
                      index % 3 === 0 && products.length > getMinimumProduct()
                        ? products[0]
                        : products[index - 1],
                      index % 3 === 0 && products.length > getMinimumProduct()
                        ? products[1]
                        : products[0],
                    ]}
                  />
                </SwiperSlide>
              </React.Fragment>
            ) : null
          )}
      </SwiperGrid>
    </PageContainer>
  );
};

export default FeaturedProducts;
