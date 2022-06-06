import React, { FC, useEffect, useState } from "react";
import productData from "../../allData/product-data.json";
import Product from "../global/components/product/product";
import SwiperGrid from "../global/components/swipergrid";
import { SwiperSlide } from "swiper/react";
import Container from "../global/components/container";

const TrendingProducts: FC = () => {
  let [filterKey, setFilterKey]: any = useState("smartphones");
  let [filteredProduct, setProducts]: any = useState([]);

  useEffect(() => {
    const newProduct = productData.products.filter(
      (product: any) => product.category === "smartphones"
    );
    setProducts(newProduct);
  }, []);

  const handleClick = (text: any) => {
    const newProduct = productData.products.filter(
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
          <li className="mr-3">
            <button
              onClick={() => handleClick("smartphones")}
              className={
                filterKey === "smartphones"
                  ? "border border-[#40A944] inline-block rounded-full bg-white text-[#40A944] px-4 py-1"
                  : "inline-block rounded-full bg-white text-black px-4 py-1"
              }
            >
              SMARTPHONES
            </button>
          </li>
          <li className="mr-3">
            <button
              onClick={() => handleClick("laptops")}
              className={
                filterKey === "laptops"
                  ? "border border-[#40A944] inline-block rounded-full bg-white text-[#40A944] px-4 py-1"
                  : "inline-block rounded-full bg-white text-black px-4 py-1"
              }
            >
              LAPTOPS
            </button>
          </li>
          <li className="mr-3">
            <button
              onClick={() => handleClick("fragrances")}
              className={
                filterKey === "fragrances"
                  ? "border border-[#40A944] inline-block rounded-full bg-white text-[#40A944] px-4 py-1"
                  : "inline-block rounded-full bg-white text-black px-4 py-1"
              }
            >
              FRAGRANCES
            </button>
          </li>
        </ul>
        {filteredProduct?.length > 1 && (
          <SwiperGrid
            slidesPerViewmobile={2}
            slidesPerView768={3}
            slidesPerView980={5}
            rows={2}
          >
            {filteredProduct?.map((product: any) => (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            ))}
          </SwiperGrid>
        )}
      </Container>
    </>
  );
};

export default TrendingProducts;
