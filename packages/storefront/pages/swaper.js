import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../allData/product-data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import required modules
import { Grid, Pagination, Navigation } from "swiper";
import Product from "../components/global/components/product/product.tsx";

let temp;


export default function Swaper() {
    return (
        <>
        {/* <div className="h-10"> */}

            <Swiper
                // width= {!important}
                // slidesPerColumnFill="row"
                // onSwiper={setSwiperRef}
                slidesPerView={5}
                // grid={{
                //     rows: 2
                // }}
                centeredSlides={true}
                grid-template-columns="50%"                
                spaceBetween={30}
                pagination={{
                    // el: ".swiper-pagination",
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"


                ////////////////////////////////////////////////////////////////
                // slidesPerView= {1}
                // grid= {{
                //   rows: 1,
                // }}
                // spaceBetween= {30}
                // pagination= {{
                //   el: ".swiper-pagination",
                //   clickable: "true"
                // }}

                // slidesPerView={3} // or 'auto'
                // slidesPerColumn={2}
                // slidesPerGroup={3}
                // spaceBetween={5}
                // slidesPerColumnFill="row"
                // grabCursor={true}
                // autoplay={{ delay: 3000 }}
                // navigation
            >
                <div className="h-1/4">
                    {productData["products"] &&
                        productData["products"].length > 0 &&
                        productData.products.map((product) => (
                            // temp.push(product) && 
                            // product.id === 3 ?
                            <SwiperSlide key={product.id}>
                                {/* product.id % 2 === 0 ?  */}
                                <Product
                                    key={product.id}
                                    product={product}
                                ></Product>
                                 {/* <Product
                                    key={product.id}
                                    product={product}
                                ></Product>  */}
                            </SwiperSlide>
                            // <div/>
                            // temp.push(product)
                        ))}
                </div>
            </Swiper>
            {/* </div> */}

        </>
    );
}
