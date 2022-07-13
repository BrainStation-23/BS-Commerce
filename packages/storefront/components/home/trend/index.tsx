import React, { FC, useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";
import { useAppSelector } from "customHooks/hooks";

import Container from "@/components/global/components/container";
import ProductRow from "./productRow.component";
import SwiperGrid from "@/components/global/components/swipergrid";

const TrendingProducts = () => {
  let [filterKey, setFilterKey]: any = useState("smartphones");
  let [filteredProduct, setProducts]: any = useState([]);

  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 10;
    if (w >= 768) return 6;
    return 4;
  };
  useEffect(() => {
    const newProduct = products?.filter(
      (product: any) => product.category === "smartphones"
    );
    setProducts(newProduct);
  }, [products]);

  const handleClick = (text: any) => {
    const newProduct = products?.filter(
      (product: any) => product.category === text
    );
    setProducts(newProduct);
    setFilterKey(text);
  };

  return (
    <>
      <Container className="max-w-6xl">
        <div className="text-center mb-6">
          <p className="text-lg font-serif italic">Recently added our store</p>
          <h1 className="text-4xl text-bold ">Trending Products</h1>
        </div>
        <ul className="flex justify-center text-base m-5 font-semibold ">
          <li className="mr-1 md:mr-3">
            <button
              onClick={() => handleClick("smartphones")}
              className={
                filterKey === "smartphones"
                  ? "border border-[#40A944] inline-block rounded-full bg-white text-[#40A944] px-4 py-1"
                  : "inline-block rounded-full bg-white text-black px-2 md:px-4 py-1"
              }
            >
              SMARTPHONES
            </button>
          </li>
          <li className="mr-1 md:mr-3">
            <button
              onClick={() => handleClick("laptops")}
              className={
                filterKey === "laptops"
                  ? "border border-[#40A944] inline-block rounded-full bg-white text-[#40A944] px-4 py-1"
                  : "inline-block rounded-full bg-white text-black px-2 md:px-4 py-1"
              }
            >
              LAPTOPS
            </button>
          </li>
          <li className="mr-1 md:mr-3">
            <button
              onClick={() => handleClick("fragrances")}
              className={
                filterKey === "fragrances"
                  ? "border border-[#40A944] inline-block rounded-full bg-white text-[#40A944] px-4 py-1"
                  : "inline-block rounded-full bg-white text-black px-2 md:px-4 py-1"
              }
            >
              FRAGRANCES
            </button>
          </li>
        </ul>
        {products?.length > 1 && (
          <SwiperGrid
            slidesPerViewmobile={2}
            slidesPerView768={3}
            slidesPerView980={5}
            rows={1}
            loop={products.length > getMinimumProduct() ? true : false}
          >
            {products?.map((product: any, index: any) =>
              index % 2 === 1 ? (
                <React.Fragment key={product.id}>
                  <SwiperSlide className="pl-5">
                    <ProductRow
                      products={[products[index - 1], products[index]]}
                    />
                  </SwiperSlide>
                </React.Fragment>
              ) : index + 1 === products.length ? (
                <React.Fragment key={product.id}>
                  <SwiperSlide>
                    <ProductRow
                      products={[
                        products[index],
                        products.length > getMinimumProduct()
                          ? products[0]
                          : "",
                      ]}
                    />
                  </SwiperSlide>
                </React.Fragment>
              ) : (
                ""
              )
            )}
          </SwiperGrid>
        )}
      </Container>
      {/* <ProductRow products={[products[0], products[1]]} /> */}
    </>
  );
};

export default TrendingProducts;
