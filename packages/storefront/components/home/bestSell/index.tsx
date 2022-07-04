import { NextComponentType } from "next";
import React from "react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "./banner";
import ProductRow from "./productRow.component";
import SwiperGrid from "@/components/global/components/swipergrid";
import Container from "@/components/global/components/container";
import { useAppSelector } from "customHooks/hooks";

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
        <div className="text-center mb-6">
          <p className="text-lg font-serif italic">Recently added our store</p>
          <h1 className="text-4xl text-bold ">Best Sell</h1>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-2/6 px-3 lg:px-0">
            <Link href="/">
              <a>
                <Banner />
              </a>
            </Link>
          </div>
          <div className="w-full md:w-4/6 pl-3">
            <SwiperGrid
              slidesPerViewmobile={1}
              slidesPerView768={1}
              slidesPerView980={2}
              rows={1}
              loop={products?.length > getMinimumProduct() ? true : false}
            >
              {products &&
                products.length > 0 &&
                products.map((product: any, index: number) =>
                  index % 3 === 2 ? (
                    <React.Fragment key={product?.id + products[index - 1]?.id}>
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
                    <React.Fragment key={product?.id + products[index - 1]?.id}>
                      <SwiperSlide>
                        <ProductRow
                          products={[
                            products[index],
                            index % 3 === 1 &&
                            products.length > getMinimumProduct()
                              ? products[0]
                              : null,
                            (index % 3 === 0 || index % 3 === 1) &&
                            products.length > getMinimumProduct()
                              ? products[1]
                              : null,
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
