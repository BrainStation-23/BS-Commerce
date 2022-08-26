import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from 'customHooks/hooks';

import SwiperGrid from '@/components/global/components/swipergrid';
import Container from '@/components/global/components/container';
import ProductRow from '@/components/home/bestSell/productRow.component';
import { CustomerProduct } from 'models';

const FeaturedProducts = () => {
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );
  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 9;
    return 6;
  };
  return (
    <Container className="max-w-6xl">
      <div className="mb-6 text-center">
        <p className="font-serif text-lg italic">Recently added our store</p>
        <h1 className="text-bold text-4xl ">Featured Products</h1>
      </div>
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
              <React.Fragment key={product?.id! + products[index - 1]?.id}>
                <SwiperSlide>
                  <ProductRow
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
    </Container>
  );
};

export default FeaturedProducts;
