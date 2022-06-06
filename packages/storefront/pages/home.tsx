import type { NextPage } from "next";
import TrendingProducts from "@/components/trend/index";
import WeekDeals from "@/components/weekDeals";
import HomeShipping from "@/components/homeShipping";
import ImageSlider from "@/components/imageSlider";
import FeaturedProducts from "@/components/featuredProducts";
import BannerPage from "@/components/global/banners";
import BestSell from "@/components/bestSell";
import Blog from "@/components/blog/blog";
import HomefullBanner from "@/components/global/banners/homeFullBanner";

const Home: NextPage = () => {
  return (
    <>
      <ImageSlider />
      <HomeShipping />
      <div className="mb-10">
        <TrendingProducts />
      </div>
      <div className="mb-10">
        <BannerPage />
      </div>
      <div className="mb-10">
        <WeekDeals />
      </div>
      <div className="mb-10">
        <HomefullBanner />
      </div>
      <div className="mb-10">
        <BestSell />
      </div>
      <div className="mb-10">
        <Blog />
      </div>
      <div className="mb-10">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
