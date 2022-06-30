import { SwiperSlide } from "swiper/react";

import ProductShow from "./product";
import productData from "../../../allData/product-data.json";
import SwiperGrid from "@/components/global/components/swipergrid";
import Container from "@/components/global/components/container";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { productInterface } from "./models";
import { Product } from "models";
import React from "react";
import ProductRow from "../bestSell/productRow.component";

interface Products {
  products: Product[];
}

const FeaturedProducts = ({products}: Products) => {
  const getMinimumProduct =()=>{
    const w = window.innerWidth;
    if(w>=980) return 9;
    return 6;
  }
  return (
    <Container className="max-w-6xl">
      <div className="text-center mb-6">
        <p className="text-lg font-serif italic">Recently added our store</p>
        <h1 className="text-4xl text-bold ">Featured Products</h1>
      </div>
      <SwiperGrid
        slidesPerViewmobile={1}
        slidesPerView768={2}
        slidesPerView980={3}
        rows={1}
        loop={products.length>getMinimumProduct() ? true : false}
      >
        {products &&
          products.length > 0 &&
          products.map((product: any, index: any) => (
            index % 3 === 2 ? (
              <React.Fragment key={product?.id + products[index-1]?.id}>
                <SwiperSlide>
                  <ProductRow
                    products={[products[index - 2], products[index - 1], products[index]]}
                  />
                </SwiperSlide>
              </React.Fragment>
            ) : index + 1 === products.length ? (
              <React.Fragment key={product?.id + products[index-1]?.id}>
                <SwiperSlide>
                  <ProductRow products={[products[index], index % 3 === 1 && products.length>getMinimumProduct() ? products[0] : null , (index % 3 === 0 || index % 3 === 1) && products.length>getMinimumProduct() ? products[1] : null ] } />
                </SwiperSlide>
              </React.Fragment>
            ) : (
              null
            )
          ))}
      </SwiperGrid>
    </Container>
  );
};

export default FeaturedProducts;
