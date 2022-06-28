import React, { FC } from "react";

import Accordion from "@/components/global/components/accordion";
import CarouselSlider from "@/components/global/components/CarouselSlider";

import { accordionBody, CarouselBody } from "utils/types";

import Container from "../../global/components/container";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

interface Props {
  CarouselList: CarouselBody[];
  accordionList: accordionBody[];
}

const ClientSayArea: FC<Props> = ({ accordionList, CarouselList }) => {
  return (
    <Container>
      <div className="flex flex-wrap">
        <div className="p-1 w-full md:p-4 md:w-2/4">
          <h2 className="text-2xl text-center mb-5">What Can We Do For You?</h2>
          {accordionList?.map((item) => (
            <Accordion title={item.title} body={item.body} key={item.id} />
          ))}
        </div>
        <div className="p-1 w-full md:p-4 md:w-2/4 text-center">
          <h2 className="text-2xl">What Our Customers Say?</h2>
          <div className="mt-5">
            <CarouselSlider>
              {CarouselList?.map((data) => (
                <SwiperSlide key={data?.id}>
                  <div className="py-16 px-5 bg-neutral-100 relative mt-12">
                    <div className="absolute left-0 right-0 -top-12">
                      <Image
                        src={data?.image}
                        alt=""
                        width={100}
                        height={100}
                      />
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
            </CarouselSlider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientSayArea;
