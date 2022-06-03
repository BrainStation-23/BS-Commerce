import { SwiperSlide } from "swiper/react";

import Product from "./product";
import productData from "../../allData/product-data.json";
import SwiperGrid from "../global/components/swipergrid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import Banner from "./banner";
import Container from "../global/components/container";
import Link from "next/link";

const BestSell = () => {
  return (
    <>
    <Container> 
      <div className="text-center mb-5">
        <p className="text-sm font-light italic pt-5 md:text-sm lg:text-base">
          Recently added our store
        </p>
        <h1 className="font-bold mb-10 text-xl md:text-3xl lg:text-4xl ">
          Best Sell
        </h1>
      </div>
      <div className="md:grid md:grid-cols-12 md:gap-5 ">
        <div className=" md:col-span-4 xl:scale-125 ">
        <Link href="/">
          <a><Banner /></a>
        </Link>
          
        </div>
        <div className=" md:col-span-7 md:col-start-6 lg:col-start-5 lg:col-span-8 ml-10">
          <SwiperGrid
            slidesPerViewmobile={1}
            slidesPerView768={1}
            slidesPerView980={2}
            rows={3}
          >
            {productData["products"] &&
              productData["products"].length > 0 &&
              productData.products.map((product: any, index) => (
                <SwiperSlide key={product.id} className="pl-14">
                  <Product product={product} />
                </SwiperSlide>
              ))}
          </SwiperGrid>
        </div>
      </div>
    </Container>
    </>
  );
};

export default BestSell;
