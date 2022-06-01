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

//Need to pass the CarouselList props to the CarouselSlider component
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
