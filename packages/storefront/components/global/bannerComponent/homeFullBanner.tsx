import React, { FC } from 'react';

import Banner from '@/components/global/bannerComponent/banner';
import BannerHeading from '@/components/global/bannerComponent/bannerHeading';

const HomefullBanner: FC = () => {
  return (
    <div className="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-center bg-no-repeat">
      <Banner
        position="relative"
        width="w-full"
        height="h-52 sm:h-52 md:h-52 lg:h-80 xl:h-80"
        hasButton={true}
        buttonText="Discover Now"
        linkhref="/deals" //need to modify href later
        buttonPosition=" "
        buttonEdge="rounded-lg"
        buttonPadding="px-3 sm:px-3 md:px-9 lg:px-9 xl:px-9 py-2 sm:py-2 lg:py-2.5 xl:py-2.5"
        buttonMargin="my-5"
        buttonBg="bg-primary"
        onHover="bg-black"
        buttonTextColor="text-white"
        hasHeading={true}
        heading={
          <BannerHeading
            largeHeading="true"
            largeHeadingText="SALE 50% OFF"
            mediumHeading="true"
            mediumHeadingText="ALL VEGETABLE PRODUCTS"
            smallHeading="true"
            smallHeadingText="Black Fridays!"
            smallHeadingColor="text-primary"
          />
        }
      />
    </div>
  );
};

export default HomefullBanner;
