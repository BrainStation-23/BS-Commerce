import "swiper/css";
import "swiper/css/autoplay";

import React, { FC } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

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
      modules={[Autoplay,Pagination]}
    >
      {children}
    </Swiper>
  );
};

export default CarouselSlider;
