import React, { FC } from "react";
import Banner from "./banner";
import BannerHeading from "./bannerHeading";

const HomefullBanner: FC = () => {
  return (
    <div className="">
      <Banner
        position="relative"
        width="w-full"
        height="h-52 sm:h-52 md:h-52 lg:h-80 xl-80"
        hasButton={true}
        buttonText="Discover Now"
        linkhref="/deals" //need to modify href later
        bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
        buttonPosition="absolute bottom-3 sm:bottom-3 md:bottom-3 lg:bottom-16 xl:bottom-12 left-16 md:left-24 lg:left-56"
        buttonEdge="rounded-lg"
        buttonPadding="px-3 sm:px-3 md:px-9 lg:px-9 xl:px-9 py-2 sm:py-2 lg:py-2.5 xl:py-2.5"
        buttonMargin="m-5"
        buttonBg="bg-green-600/100"
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
            smallHeadingColor="text-green-600"
          />
        }
      />
    </div>
  );
};

export default HomefullBanner;
