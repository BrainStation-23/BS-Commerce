import React, { FC } from "react";
import { Swiper } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  children: any;
}

//Need to pass the CarouselList props to the CarouselSlider component
const SwiperGrid: FC<Props> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        fill: "row",
        rows: 2,
      }}
      navigation={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default SwiperGrid;
