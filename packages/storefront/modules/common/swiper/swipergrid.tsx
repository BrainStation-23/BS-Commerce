import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Grid, Navigation } from 'swiper';
import { Swiper, useSwiper } from 'swiper/react';
import React, { FC, useCallback, useState } from 'react';
import ChevronLeft from '../icons/chevronLeft';
import ChevronRight from '../icons/chevronRight';
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
  const [swiperRef, setSwiperRef] = useState(useSwiper());

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <div className="group relative">
      <button
        onClick={handleLeftClick}
        className="absolute inset-y-0  left-0 origin-right scale-100 opacity-0 transition-all duration-300 group-hover:left-[-14px] group-hover:block group-hover:scale-150 group-hover:opacity-100"
      >
        <ChevronLeft className="fill-current " />
      </button>
      <Swiper
        onSwiper={setSwiperRef}
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
        // navigation={true}
        spaceBetween={10}
        centerInsufficientSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        <>{children}</>
      </Swiper>
      <button
        onClick={handleRightClick}
        className="absolute inset-y-0  right-0 z-10 origin-left scale-100 opacity-0 transition-all duration-300 group-hover:right-[-14px] group-hover:block group-hover:scale-150 group-hover:opacity-100"
      >
        <ChevronRight className="fill-current " />
      </button>
    </div>
  );
};

export default SwiperGrid;
