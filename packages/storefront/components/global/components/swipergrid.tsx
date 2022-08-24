import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import React, { FC } from 'react';
import { Swiper } from 'swiper/react';
import { Grid, Navigation } from 'swiper';
import { ReactNode } from 'react';
interface Props {
  children: React.ReactNode;
  slidesPerViewmobile: number;
  slidesPerView768: number;
  slidesPerView980: number;
  rows: number;
  loop: boolean;
}

const SwiperGrid: FC<Props> = ({
  children,
  slidesPerViewmobile,
  slidesPerView768,
  slidesPerView980,
  rows,
  loop,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerViewmobile}
      loop={loop}
      grid={{
        fill: 'row',
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
      centerInsufficientSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Navigation]}
      className="mySwiper"
    >
      <>{children}</>
    </Swiper>
  );
};

export default SwiperGrid;
