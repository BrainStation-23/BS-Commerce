import React, { FC } from "react";
import { Swiper } from "swiper/react";
import { Grid, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

interface Props {
  children: any;
}

//Need to pass the CarouselList props to the CarouselSlider component
const SwiperGrid: FC<Props> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={2}
      loop={true}
      grid={{
        fill: "row",
        rows: 2,
      }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        980: {
          slidesPerView: 5,
        },
      }}
      navigation={true}
      spaceBetween={30}
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
