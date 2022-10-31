import React, { FC, useEffect, useState } from 'react';

import { SwiperSlide } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { useAppSelector } from 'store/hooks/index';

import PageContainer from '@/modules/common/layout/pageContainer';
import HomeComponentHeader from '@/modules/home/common/homeComponentHeader';

import ProductRow from '../common/cycleProductGroup';
import SwiperGrid from '@/modules/common/swiper/swipergrid';
import { CustomerProduct } from '@bs-commerce/models';

const TrendingProducts = () => {
  let [filterKey, setFilterKey] = useState('smartphones');
  let [filteredProduct, setProducts] = useState<CustomerProduct[]>([]);

  const { t } = useTranslation();
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  // Gets number of products to show
  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 10;
    if (w >= 768) return 6;
    return 4;
  };
  useEffect(() => {
    const newProduct = products?.filter(
      (product) => true || product.categories[0].name === 'smartphones'
    );
    setProducts(newProduct);
  }, [products]);

  const handleClick = (text: string) => {
    const newProduct = products?.filter(
      (product) => true || product.categories[0].name === text
    );
    setProducts(newProduct);
    setFilterKey(text);
  };

  return (
    <>
      <PageContainer className="max-w-6xl">
        <HomeComponentHeader
          heading1={t('home:recently_added')}
          heading2={t('home:trending')}
        />
        {/* <ul className="m-5 flex justify-center text-base font-semibold ">
          <li className="mr-1 md:mr-3">
            <button
              onClick={() => handleClick('smartphones')}
              className={
                filterKey === 'smartphones'
                  ? 'inline-block rounded-full border border-primary bg-white px-4 py-1 text-primary'
                  : 'inline-block rounded-full bg-white px-2 py-1 text-black md:px-4'
              }
            >
              SMARTPHONES
            </button>
          </li>
          <li className="mr-1 md:mr-3">
            <button
              onClick={() => handleClick('laptops')}
              className={
                filterKey === 'laptops'
                  ? 'inline-block rounded-full border border-primary bg-white px-4 py-1 text-primary'
                  : 'inline-block rounded-full bg-white px-2 py-1 text-black md:px-4'
              }
            >
              LAPTOPS
            </button>
          </li>
          <li className="mr-1 md:mr-3">
            <button
              onClick={() => handleClick('fragrances')}
              className={
                filterKey === 'fragrances'
                  ? 'inline-block rounded-full border border-primary bg-white px-4 py-1 text-primary'
                  : 'inline-block rounded-full bg-white px-2 py-1 text-black md:px-4'
              }
            >
              FRAGRANCES
            </button>
          </li>
        </ul> */}
        {products?.length > 1 && (
          <SwiperGrid
            slidesPerViewmobile={2}
            slidesPerView768={3}
            slidesPerView980={5}
            rows={1}
            loop={products.length > getMinimumProduct() ? true : false}
          >
            {products?.map((product: CustomerProduct, index: number) =>
              index % 2 === 1 ? (
                <React.Fragment key={product.id}>
                  <SwiperSlide key={Math.random() * 999999}>
                    <ProductRow
                      products={[products[index - 1], products[index]]}
                    />
                  </SwiperSlide>
                </React.Fragment>
              ) : index + 1 === products.length ? (
                <React.Fragment key={product.id}>
                  <SwiperSlide key={Math.random() * 999999}>
                    <ProductRow
                      products={[
                        products.length > getMinimumProduct()
                          ? products[0]
                          : products[index],
                      ]}
                    />
                  </SwiperSlide>
                </React.Fragment>
              ) : (
                ''
              )
            )}
          </SwiperGrid>
        )}
      </PageContainer>
    </>
  );
};

export default TrendingProducts;
