import React, { FC } from "react";

import Image from "next/image";
import Container from "../../global/components/container";

const ImageWithDescription: FC = () => {
  return (
    <Container>
      <div className="flex items-center justify-center flex-col">
        <div className="w-full m-auto mb-5">
          <Image
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
            width="1504"
            height="580"
          />
        </div>
        <h1 className="text-xl capitalize mb-5">
          We Are A Digital Agency Focused On Delivering Content And Utility
          User-Experiences.
        </h1>
        <p className="text-center text-sm max-w-4xl mx-auto">
          Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus.
          Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend
          feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis,
          praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris,
          elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem
          consectetuer, sociosqu phasellus risus urna aliquam, ornare.
        </p>
        <Image
          src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about-us-signature_medium.png?v=1588134272"
          width="228"
          height="129"
        />
      </div>
    </Container>
  );
};

export default ImageWithDescription;
