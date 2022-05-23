import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

import { CarouselBody } from "utils/types";

import "swiper/css";
import "swiper/css/autoplay";

interface Props {
  CarouselList: CarouselBody[];
}

const CarouselSlider: FC<Props> = ({ CarouselList }) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
    >
      {CarouselList?.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="py-16 px-5 bg-neutral-100 relative">
            <Image src={data?.image} alt="" width={100} height={100} />
            <div className="pt-1">
              <div>{data?.title}</div>
              <p>{data.body}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
