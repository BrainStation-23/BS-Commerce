import React, { Children, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

import { CarouselBody } from "utils/types";

import "swiper/css";
import "swiper/css/autoplay";

interface Props {
  children: any;
}

//Need to pass the CarouselList props to the CarouselSlider component
const CarouselSlider: FC<Props> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {children}
    </Swiper>
  );
};

export default CarouselSlider;
