import { FC, useEffect, useState } from "react";
import productData from "../../../allData/product-data.json";
import Product from "@/components/global/components/product/product";
import SwiperGrid from "@/components/global/components/swipergrid";
import { SwiperSlide } from "swiper/react";
import Container from "@/components/global/components/container";
import axios from "axios";

const WeekDeals: FC = () => {
  const [products, setProducts] = useState();

  async function getProducts() {
    try {
      const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
      //console.log(headers);
      const res = await axios.get(`http://localhost:3000/api/product/`, { headers })
      //console.log(res);
      setProducts(res.data.data);
      //console.log(products);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Container className="max-w-7xl">
        <div className="text-center mb-6">
          <p className="text-lg font-serif italic">Recently added our store</p>
          <h1 className="text-4xl text-bold ">Deals Of The Weeks</h1>
        </div>
        <SwiperGrid
          slidesPerViewmobile={2}
          slidesPerView768={3}
          slidesPerView980={5}
          rows={1}
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

export default WeekDeals;
