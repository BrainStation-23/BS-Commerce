import Product from "./product";
import productData from "../../allData/product-data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import SwiperGrid from "../global/components/swipergrid";

const FeaturedProducts = () => {
  return (
    <>
      <div className="text-center mb-5  ">
        <p className="text-sm font-light italic pt-5 md:text-sm lg:text-base ">
          Recently added our store
        </p>
        <h1 className="font-bold mb-10 text-xl md:text-3xl lg:text-4xl ">
          Featured Products
        </h1>
      </div>

      <SwiperGrid
        slidesPerViewmobile={1}
        slidesPerView768={2}
        slidesPerView980={3}
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
    </>
  );
};

export default FeaturedProducts;
