import { FC } from "react";
import productData from "../../allData/product-data.json";
import Product from "../global/components/product/product";
import SwiperGrid from "../global/components/swipergrid";
import { SwiperSlide } from "swiper/react";
import Container from "../global/components/container";

const Products: FC = () => {
  return (
    <>
      <Container>
        <div className="text-center">
          <p className="text-lg font-serif italic">Recently added our store</p>
          <h1 className="text-4xl text-bold ">Trending Products</h1>
          <br />
        </div>
        {/* <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-0 justify-items-center"> */}
        <SwiperGrid>
          {productData["products"] &&
            productData["products"].length > 0 &&
            productData.products.map((product: any) => (
              <SwiperSlide>
                <Product product={product} />
              </SwiperSlide>
            ))}
        </SwiperGrid>
      </Container>
    </>
  );
};

export default Products;
