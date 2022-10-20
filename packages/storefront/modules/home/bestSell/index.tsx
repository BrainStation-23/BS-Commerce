import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import Link from 'next/link';
import { NextComponentType } from 'next';
import { SwiperSlide } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';

import { useAppSelector } from 'store/hooks/index';

import { CustomerProduct } from '@bs-commerce/models';

import PageContainer from '@/modules/common/layout/pageContainer';
import Banner from '@/modules/home/bestSell/components/banner';
import SwiperGrid from '@/modules/global/components/swipergrid';
import CycleProductGroup from '@/modules/home/common/cycleProductGroup';
import HomeComponentHeader from '@/modules/home/common/homeComponentHeader';

const BestSell: NextComponentType = () => {
  const { t } = useTranslation();
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 6;
    return 3;
  };
  return (
    <>
      <PageContainer>
        <HomeComponentHeader
          heading1={t('home:recently_added')}
          heading2={t('home:best_sell')}
        />
        <div className="flex w-full flex-wrap">
          <div className="w-full px-3 md:w-5/12 lg:w-2/6 lg:px-0">
            <Link href="/">
              <a>
                <Banner />
              </a>
            </Link>
          </div>
          <div className="w-full md:w-6/12 md:pl-5 lg:w-4/6">
            <SwiperGrid
              slidesPerViewmobile={1}
              slidesPerView768={1}
              slidesPerView980={2}
              rows={1}
              loop={products?.length > getMinimumProduct() ? true : false}
            >
              {products &&
                products.length > 0 &&
                products.map((product: CustomerProduct, index: number) =>
                  index % 3 === 2 ? (
                    <React.Fragment
                      key={product?.id! + products[index - 1]?.id}
                    >
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
                  ) : (
                    index + 1 === products.length && (
                      <React.Fragment
                        key={product?.id! + products[index - 1]?.id}
                      >
                        <SwiperSlide key={Math.random() * 999999}>
                          <CycleProductGroup
                            products={[
                              products[index],
                              index % 3 === 0 &&
                              products.length > getMinimumProduct()
                                ? products[0]
                                : products[index - 1],
                              index % 3 === 0 &&
                              products.length > getMinimumProduct()
                                ? products[1]
                                : products[0],
                            ]}
                          />
                        </SwiperSlide>
                      </React.Fragment>
                    )
                  )
                )}
            </SwiperGrid>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default BestSell;
