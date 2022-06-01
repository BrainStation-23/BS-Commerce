import type { GetServerSideProps, NextPage } from "next";
import productData from "../../allData/product-data.json";
import Product from "../global/components/product/product";
import SwiperGrid from "../global/components/swipergrid";
import { SwiperSlide } from "swiper/react";

const Products: NextPage = (props) => {
  return (
    <>
      {/* <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-0 justify-items-center"> */}
      <div className="" style={{ height: "500px" }}>
        <SwiperGrid>
          {productData["products"] &&
            productData["products"].length > 0 &&
            productData.products.map((product: any) => (
              <SwiperSlide>
                <Product key={product.id} product={product}></Product>
              </SwiperSlide>
            ))}
        </SwiperGrid>
      </div>
    </>
  );
};

export default Products;
