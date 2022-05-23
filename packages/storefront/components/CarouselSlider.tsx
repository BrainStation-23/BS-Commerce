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
        delay: 2000,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      modules={[Autoplay]}
    >
      {CarouselList.map(() => (
        <SwiperSlide>
          <div className="py-16 px-5 bg-neutral-100 relative">
            <Image
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748"
              alt="files/testimonial2.png"
              width={100}
              height={100}
            />
            <div>
              <div>Rebecka Filso</div>
              <p>
                I'm so happy with all of the themes, great support, could not
                wish for more. These people are geniuses! Kudo's from the
                Netherlands!..
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <SwiperSlide>
        <div className="py-16 pr-5 bg-neutral-100 relative">
          <Image
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial1_100x100.png?v=1588138630"
            alt="files/testimonial1.png"
            width={100}
            height={100}
          />
          <div>
            <div>Rebecka Filso</div>
            <p>
              I'm so happy with all of the themes, great support, could not wish
              for more. These people are geniuses! Kudo's from the
              Netherlands!..
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-16 pr-5 bg-neutral-100 relative">
          <Image
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748"
            alt="files/testimonial2.png"
            width={100}
            height={100}
          />
          <div>
            <div>Rebecka Filso</div>
            <p>
              I'm so happy with all of the themes, great support, could not wish
              for more. These people are geniuses! Kudo's from the
              Netherlands!..
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselSlider;
