import { SwiperSlide } from "swiper/react";

import Product from "./product";
import productData from "../../allData/product-data.json";
import SwiperGrid from "../global/components/swipergrid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

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
      <div  className="grid grid-cols-3">
          <div>

          </div>
        <div className="col-span-2">
        <SwiperGrid
        slidesPerViewmobile={1}
        slidesPerView768={2}
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
