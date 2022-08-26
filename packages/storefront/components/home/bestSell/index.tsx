import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { NextComponentType } from 'next';

import { useAppSelector } from 'customHooks/hooks';

import Banner from '@/components/home/bestSell/banner';
import ProductRow from '@/components/home/bestSell/productRow.component';
import SwiperGrid from '@/components/global/components/swipergrid';
import Container from '@/components/global/components/container';
import { CustomerProduct } from 'models';

const BestSell: NextComponentType = () => {
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
      <Container className="">
        <div className="mb-6 text-center">
          <p className="font-serif text-lg italic">Recently added our store</p>
          <h1 className="text-bold text-4xl ">Best Sell</h1>
        </div>
        <div className="flex w-full flex-wrap">
          <div className="w-full px-3 md:w-5/12 lg:w-2/6 lg:px-0">
            <Link href="/">
              <a>
                <Banner />
              </a>
            </Link>
          </div>
          <div className="w-full md:w-7/12 md:pl-3 lg:w-4/6">
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
                      <SwiperSlide>
                        <ProductRow
                          products={[
                            products[index - 2],
                            products[index - 1],
                            products[index],
                          ]}
                        />
                      </SwiperSlide>
                    </React.Fragment>
                  ) : index + 1 === products.length ? (
                    <React.Fragment
                      key={product?.id! + products[index - 1]?.id}
                    >
                      <SwiperSlide>
                        <ProductRow
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
                  ) : null
                )}
            </SwiperGrid>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BestSell;
