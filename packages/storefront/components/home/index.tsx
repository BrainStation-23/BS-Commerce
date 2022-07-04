import { NextComponentType } from "next";

import ImageSlider from "@/components/home/imageSlider";
import HomeShipping from "@/components/home/homeShipping";
import TrendingProducts from "@/components/home/trend/index";
import BannerPage from "@/components/global/bannerComponent";
import WeekDeals from "@/components/home/weekDeals";
import HomefullBanner from "@/components/global/bannerComponent/homeFullBanner";
import BestSell from "@/components/home/bestSell";
import FeaturedProducts from "@/components/home/featuredProducts";

const HomeComponent: NextComponentType = () => {
  return (
    <>
      <ImageSlider />
      <HomeShipping />
      <div className="mb-4 md:mb-10">
        <TrendingProducts />
      </div>
      <div className="mb-4 md:mb-10">
        <BannerPage />
      </div>
      <div className="mb-4 md:mb-10">
        <WeekDeals />
      </div>
      <div className="mb-4 md:mb-10">
        <HomefullBanner />
      </div>
      <div className="mb-4 md:mb-10">
        <BestSell />
      </div>
      {/* <div className="mb-5 md:mb-10">
        <Blog />
      </div> */}
      <div className="mb-4 md:mb-10">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default HomeComponent;
