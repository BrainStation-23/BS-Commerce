import { FC } from "react";
import productData from "../../../allData/product-data.json";
import SwiperGrid from "@/components/global/components/swipergrid";
import { SwiperSlide } from "swiper/react";
import Container from "@/components/global/components/container";
import Link from "next/link";
import Picture from "@/components/global/components/product/common/picture";
import Icon from "@/components/global/components/icon";
import ProductInfo from "@/components/global/components/product/common/productInfo";
import { Product } from "models";

interface Products {
  products: Product[];
}

const WeekDeals = ({ products }: Products) => {
  //edited type. was const WeekDeals: FC = () => {}
  // console.log(products);
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
          {products &&
            products.length > 0 &&
            products.map((product: any) => (
              <SwiperSlide key={product.id}>
                {/* <Product product={product} /> */}

                <Link href={`product/${product.id}`} passHref>
                  <div className="mb-0 overflow-hidden" key={product.id}>
                    <div className="transition duration-0 hover:duration-700 group hover:bg-white cursor-pointer">
                      <div className="rounded overflow-hidden max-w-sm">
                        <div className="relative flex items-center justify-center flex-col">
                          <div className="relative text-white overflow-hidden transition-all duration-700">
                            <div className="relative inset-0 bg-cover bg-center z-0">
                              <Picture
                                product={product}
                                height={212}
                                width={212}
                                src={product.photos[0].url}
                                alt={product.tags[0]}
                              />

                              <div className="border text-xs border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 left-3 px-1 py-1 text-white">
                                {product.stock > 0 ? "Sale" : "Soldout"}
                              </div>

                              {product.discountPercentage &&
                              product.stock > 0 ? (
                                <div className="border border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 right-3 px-1 py-1 text-white text-xs">
                                  <p>{`-${product.discountPercentage}%`}</p>
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="hover:-translate-y-3 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
                            <Icon product={product} />
                          </div>
                          {/* <ProductInfo product={product} /> */}

                          <div className="text-center py-4">
                            <Link href={`/product/${product.id}`} passHref>
                              <div className="text-inherit text-xl font-medium text-gray-600">
                                {product.info.name}
                              </div>
                            </Link>
                            <p className="text-lg font-['arial'] text-gray-600 m-1">
                              {product.tags[0]}
                            </p>
                            <div className="text-lg font-semibold text-green-600">
                              {product.info.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </SwiperGrid>
      </Container>
    </>
  );
};

export default WeekDeals;
