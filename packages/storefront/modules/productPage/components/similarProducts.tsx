import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { SwiperSlide } from 'swiper/react';
import { useAppSelector } from 'store/hooks/index';
import { NextComponentType } from 'next';

import SwiperGrid from '@/modules/common/swiper/swipergrid';
import PageContainer from '@/modules/common/layout/pageContainer';
import VerticalProduct from '@/modules/common/product/verticalProduct';
import { CustomerProduct } from '@bs-commerce/models';

const SimilarProducts: NextComponentType = () => {
  const { t } = useTranslation();

  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );
  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 6;
    if (w >= 768) return 3;
    return 2;
  };
  return (
    <>
      <PageContainer className="max-w-7xl dark:text-dark_text">
        <div className="mb-6 text-center">
          <h1 className="text-bold text-4xl ">
            {t('product-details:similar_products')}
          </h1>
        </div>
        <SwiperGrid
          slidesPerViewmobile={2}
          slidesPerView768={3}
          slidesPerView980={5}
          rows={1}
          loop={products?.length > getMinimumProduct() ? true : false}
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

export default SimilarProducts;
