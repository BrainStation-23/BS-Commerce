import { SwiperSlide } from "swiper/react";

import ProductShow from "./product";
import productData from "../../../allData/product-data.json";
import SwiperGrid from "../../global/components/swipergrid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import Banner from "./banner";
import Container from "../../global/components/container";
import Link from "next/link";
import { Product } from "models";

interface Products {
  products: Product[]
}

const BestSell = ({products} : Products) => {
  return (
    <>
      <Container className="">
        <div className="text-center mb-6">
          <p className="text-lg font-serif italic">Recently added our store</p>
          <h1 className="text-4xl text-bold ">Best Sell</h1>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-2/6 px-3 lg:px-0">
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
              {products &&
                products.length > 0 &&
                products.map((product: any, index: number) => (
                  <SwiperSlide key={product.id} className="">
                    <ProductShow product={product} />
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
