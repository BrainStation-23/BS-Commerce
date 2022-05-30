import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import productPic from "../public/product.jpeg";
import { InferGetServerSidePropsType } from "next";
import Banner from "../components/global/banners/banner";
import BannerHeading from "../components/global/banners/bannerHeading";
import BannerBodyText from "../components/global/banners/bannerBodyText";

const Home: NextPage = () => {
  return (
    <>
      <div className="row">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:m-3 md:m-3 lg:m-16 sm:gap-5 md:gap-7 lg:gap-12">
          <Banner
            position="relative"
            width="w-full"
            height="sm:h-48 lg:h-56"
            buttonText="Shop Now"
            href="/home"
            bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
            buttonPosition="absolute sm:bottom-4 md:bottom-7 lg:bottom-16 sm:left-0 lg:left-10"
            buttonEdge="rounded-lg"
            hasButton="true"
            buttonPadding="sm:px-3 md:px-3 lg:px-5 py-2"
            buttonMargin="m-5"
            buttonBg="bg-green-600/100"
            onHover="bg-black"
            buttonTextColor="text-white"
            hasBodyText="true"
            bodyText={
              <BannerBodyText
                text="Fresh Vegetables"
                textColor="text-gray-500"
                textSize="sm:text-2xl md:text-2xl lg:text-2xl"
                fontWeight="font-normal"
                margin="sm:mx-5 md:mx-5 lg:mx-14 sm:my-14 md:my-12 lg:my-14"
              />
            }
          />
          <Banner
            position="relative"
            width="w-full"
            height="sm:h-48 lg:h-56"
            buttonText="Shop Now"
            href="/home"
            bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
            buttonPosition="absolute sm:bottom-4 md:bottom-7 lg:bottom-16 sm:left-0 lg:left-10"
            buttonEdge="rounded-lg"
            buttonPadding="sm:px-3 md:px-3 lg:px-5 py-2"
            buttonMargin="m-5"
            buttonBg="bg-green-600/100"
            onHover="bg-black"
            buttonTextColor="text-white"
            hasButton="true"
            hasBodyText="true"
            bodyText={
              <BannerBodyText
                text="Natural Fresh Fruits"
                textColor="text-gray-500"
                textSize="sm:text-2xl md:text-2xl lg:text-2xl"
                fontWeight="font-normal"
                margin="sm:mx-5 md:mx-5 lg:mx-14 sm:my-14 md:my-12 lg:my-14"
              />
            }
          />
        </div>
      </div>

      <br />
      <div className="row">
        <div className="grid grid-cols-1">
          <Banner
            position="relative"
            width="w-full"
            height="sm:h-52 lg:h-64"
            hasButton="true"
            buttonText="Discover Now"
            href="/home"
            bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
            buttonPosition="absolute sm:bottom-3 lg:bottom-7 sm:left-0 lg:left-10"
            buttonEdge="rounded-lg"
            buttonPadding="sm:px-3 md:px-9 lg:px-9 py-2"
            buttonMargin="m-5"
            buttonBg="bg-green-600/100"
            onHover="bg-black"
            buttonTextColor="text-white"
            hasHeading="true"
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
      </div>
    </>
  );
};
export default Home;
