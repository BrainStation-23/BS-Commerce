import { SwiperSlide } from "swiper/react";

import Product from "./product";
import productData from "../../allData/product-data.json";
import SwiperGrid from "../global/components/swipergrid";
import Container from "../global/components/container";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

const FeaturedProducts = () => {
  return (
    <Container>
      <div className="text-center mb-5  ">
        <p className="text-sm font-light italic md:text-sm lg:text-base ">
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
          productData.products.map((product: any) => (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
      </SwiperGrid>
    </Container>
  );
};

export default FeaturedProducts;
