import { SwiperSlide } from "swiper/react";

import Product from "./product";
import productData from "../../allData/product-data.json";
import SwiperGrid from "../global/components/swipergrid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import Banner from "./banner";

const BestSell = () => {
  return (
    <>
      <div className="text-center mb-5">
        <p className="text-sm font-light italic pt-5 md:text-sm lg:text-base">
          Recently added our store
        </p>
        <h1 className="font-bold mb-10 text-xl md:text-3xl lg:text-4xl ">
          Best Sell
        </h1>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <div className=" md:col-span-1 ">
          <Banner />
        </div>
        <div className=" md:col-span-2  ml-10">
          <SwiperGrid
            slidesPerViewmobile={1}
            slidesPerView768={1}
            slidesPerView980={2}
            rows={3}
          >
            {productData["products"] &&
              productData["products"].length > 0 &&
              productData.products.map((product: any, index) => (
                <SwiperSlide key={product.id} className="p-4">
                  <Product product={product} />
                </SwiperSlide>
              ))}
          </SwiperGrid>
        </div>
      </div>
    </>
  );
};

export default BestSell;
