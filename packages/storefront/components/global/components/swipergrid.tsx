import React, { FC } from "react";
import { Swiper } from "swiper/react";
import { Grid, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

interface Props {
  children: any;
  slidesPerViewmobile: number;
  slidesPerView768: number;
  slidesPerView980: number;
  rows: number;
}

const SwiperGrid: FC<Props> = ({
  children,
  slidesPerViewmobile,
  slidesPerView768,
  slidesPerView980,
  rows,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerViewmobile}
      loop={true}
      grid={{
        fill: "row",
        rows: rows,
      }}
      breakpoints={{
        768: {
          slidesPerView: slidesPerView768,
        },
        980: {
          slidesPerView: slidesPerView980,
        },
      }}
      navigation={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default SwiperGrid;

// import this component and pass your children to it
//example 1:
// <SwiperGrid
//   slidesPerViewmobile={2}
//   slidesPerView768={3}
//   slidesPerView980={5}
//   rows={2}
// >
//   <SwiperSlide>Slide 1</SwiperSlide>
//   <SwiperSlide>Slide 2</SwiperSlide>
//   <SwiperSlide>Slide 3</SwiperSlide>
//   <SwiperSlide>Slide 4</SwiperSlide>
//   <SwiperSlide>Slide 5</SwiperSlide>
//   <SwiperSlide>Slide 6</SwiperSlide>
//   <SwiperSlide>Slide 7</SwiperSlide>
//   <SwiperSlide>Slide 8</SwiperSlide>
//   <SwiperSlide>Slide 9</SwiperSlide>
//   <SwiperSlide>Slide 8</SwiperSlide>
//   <SwiperSlide>Slide 9</SwiperSlide>
//   <SwiperSlide>Slide 8</SwiperSlide>
//   <SwiperSlide>Slide 9</SwiperSlide>
//   <SwiperSlide>Slide 8</SwiperSlide>
//   <SwiperSlide>Slide 12</SwiperSlide>
// </SwiperGrid>

//example 2:
//  <SwiperGrid
//           slidesPerViewmobile={2}
//           slidesPerView768={3}
//           slidesPerView980={5}
//           rows={2}
//         >
//           {productData["products"] &&
//             productData["products"].length > 0 &&
//             productData.products.map((product: any) => (
//               <SwiperSlide key={product.id}>
//                 <Product product={product} />
//               </SwiperSlide>
//             ))}
//         </SwiperGrid>
