import React, { FC } from "react";

import Container from "../../global/components/container";
import Accordion from "@/components/global/components/accordion";

import { accordionBody } from "../../../utils/types";

interface Props {
  accordionList: accordionBody[];
}

const FaqContentArea: FC<Props> = ({ accordionList }) => {
  return (
    <Container>
      <div className="pb-5">
        <h4 className="text-lg mb-4 font-semibold">
          Below are frequently asked questions, you may find the answer for
          yourself
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper
          augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.
          In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum
          sit amet. Nulla convallis mauris vitae congue consequat. Donec
          interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus
          iaculis euismod dui.
        </p>
      </div>
      <div className="py-5">
        {accordionList?.map((item) => (
          <Accordion title={item.title} body={item.body} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default FaqContentArea;
