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
      <Container className="max-w-md md:max-w-4xl lg:max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-light italic pt-5 md:text-sm lg:text-base">
            Recently added our store
          </p>
          <h1 className="font-bold mb-10 text-xl md:text-3xl lg:text-4xl ">
            Best Sell
          </h1>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-2/6 px-3">
            <Link href="/">
              <a>
                <Banner />
              </a>
            </Link>
          </div>
          <div className="w-full md:w-4/6 pl-3">
            <SwiperGrid
              slidesPerViewmobile={1}
              slidesPerView768={1}
              slidesPerView980={2}
              rows={3}
            >
              {productData["products"] &&
                productData["products"].length > 0 &&
                productData.products.map((product: any, index) => (
                  <SwiperSlide key={product.id} className="">
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
