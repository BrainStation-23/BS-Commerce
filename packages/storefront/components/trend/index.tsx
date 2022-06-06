import { FC } from "react";
import productData from "../../allData/product-data.json";
import Product from "../global/components/product/product";
import SwiperGrid from "../global/components/swipergrid";
import { SwiperSlide } from "swiper/react";
import Container from "../global/components/container";

const TrendingProducts: FC = () => {
  return (
    <>
      <Container className="max-w-6xl">
        <div className="text-center mb-6">
          <p className="text-lg font-serif italic">Recently added our store</p>
          <h1 className="text-4xl text-bold ">Trending Products</h1>
        </div>
        <SwiperGrid
          slidesPerViewmobile={2}
          slidesPerView768={3}
          slidesPerView980={5}
          rows={2}
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
    </>
  );
};

export default TrendingProducts;
