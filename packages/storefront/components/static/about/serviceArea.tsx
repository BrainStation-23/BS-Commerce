import Image from 'next/image';
import React, { FC } from 'react';

import Container from '@/components/global/components/container';

const ServiceArea: FC = () => {
  return (
    <Container>
      <div className="flex flex-wrap">
        <div className="basis-full p-1 text-center md:basis-1/2 md:p-4 lg:basis-1/3">
          <div className="mb-3 md:mb-4">
            <Image
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon1_50x50.png?v=1588134758"
              width="48"
              height="48"
              alt="about"
            />
          </div>
          <div className="text-center">
            <h3 className="text-base md:text-xl">Creative Design</h3>
            <p className="text-sm md:text-base">
              Erat metus sodales eget dolor consectetuer, porta ut purus at et
              alias, nulla ornare velit amet
            </p>
          </div>
        </div>
        <div className="basis-full p-1 text-center md:basis-1/2 md:p-4 lg:basis-1/3">
          <div className="mb-3 md:mb-4">
            <Image
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon2_50x50.png?v=1588134840"
              width="48"
              height="48"
              alt="about"
            />
          </div>
          <div className="chose_content">
            <h3 className="text-base md:text-xl">100% Money Back Guarantee</h3>
            <p className="text-sm md:text-base">
              Erat metus sodales eget dolor consectetuer, porta ut purus at et
              alias, nulla ornare velit amet
            </p>
          </div>
        </div>
        <div className="basis-full p-1 text-center md:basis-1/2 md:p-4 lg:basis-1/3">
          <div className="mb-2 md:mb-4">
            <Image
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon3_50x50.png?v=1588134892"
              width="48"
              height="48"
              alt="about"
            />
          </div>
          <div className="box_content">
            <h3 className="text-base md:text-xl">Online Support 24/7</h3>
            <p className="text-sm md:text-base">
              Erat metus sodales eget dolor consectetuer, porta ut purus at et
              alias, nulla ornare velit amet
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceArea;
