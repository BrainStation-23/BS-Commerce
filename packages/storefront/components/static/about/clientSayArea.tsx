import React, { FC } from "react";

import Accordion from "@/components/global/components/accordion";
import CarouselSlider from "@/components/global/components/CarouselSlider";

import { accordionBody, CarouselBody } from "utils/types";

import Container from "../../global/components/container";

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
            <CarouselSlider CarouselList={CarouselList} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientSayArea;
