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

//Need to pass the CarouselList props to the CarouselSlider component
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
      {CarouselList?.map((data) => (
        <SwiperSlide key={data?.id}>
          <div className="py-16 px-5 bg-neutral-100 relative mt-12">
            <div className="absolute left-0 right-0 -top-12">
              <Image src={data?.image} alt="" width={100} height={100} />
            </div>
            <div className="mb-6">
              <Image
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/t/31/assets/testimonials-icon.png?v=183134773585919069651642047575"
                alt=""
                width={27}
                height={27}
              />
            </div>
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
