import Product from "./product";
import productData from "../../allData/product-data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

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
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Grid, Pagination, Navigation]}
        loop={true}
        grid={{
          fill: "row",
          rows: 3,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            //   spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            //   spaceBetween: 30
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            //   spaceBetween: 30
          },
          // when window width is >= 2560px
          2560: {
            slidesPerView: 4,
            //   spaceBetween: 30
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
    </>
  );
};

export default FeaturedProducts;
