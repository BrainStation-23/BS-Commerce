import type { NextComponentType } from "next";
import Product from "./product";
import productData from "../../allData/product-data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import CarouselSlider from "../global/components/CarouselSlider";
import { useState } from "react";

const BestSell = () => {
    const [slideDetails, updateSlideDetails] = useState([
        {
            id: Math.floor(Math.random() * 10), 
            image: "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider1.jpg?v=1588047077",
            Description: "Fresh Farm Products",
            Deatils:
                "10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!",
            Title: "Vegetables Big Sale",
        },
        {
            id: Math.floor(Math.random() * 10), 
            image: "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider2.jpg?v=1588047180",
            Title: "Fresh Vegetables",
            Description: "Natural Farm Products",
            Deatils:
                "Widest range of farm-fresh Vegetables, Fruits & seasonal produce",
        },
        {
            id: Math.floor(Math.random() * 10), 
            image: "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider3.jpg?v=1588047393",
            Title: "Fresh Tomatoes",
            Description: "Natural Farm Products",
            Deatils:
                "Natural organic tomatoes make your health stronger. Put your information here",
        },
    ]);
  return (
    <>
    <CarouselSlider  CarouselList={slideDetails} />
      <div className="text-center mb-5">
        <p className="text-sm font-light italic pt-5 md:text-sm lg:text-base">
          Recently added our store
        </p>
        <h1 className="font-bold mb-10 text-xl md:text-3xl lg:text-4xl ">
          Best Sell
        </h1>
      </div>
      <div  className="grid grid-cols-3">
          <div>

          </div>
        <div className="col-span-2">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Grid, Pagination, Navigation]}
            loop={true}
            grid={{
              fill: "row",
              rows: 3,
            }}
            breakpoints={{
              // when window width is >= 320px
              768: {
                slidesPerView: 2,
                //   spaceBetween: 20
              },
            }}
            navigation={true}
            className="mySwiper m-5"
          >
            {productData["products"] &&
              productData["products"].length > 0 &&
              productData.products.map((product: any, index) => (
                <SwiperSlide key={product.id} className="p-4">
                  <Product product={product} />
                </SwiperSlide>
              ))}
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestSell;
