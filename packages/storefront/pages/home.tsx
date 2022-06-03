import type { NextPage } from "next";
import TrendingProducts from "@/components/trend/index";
import WeekDeals from "@/components/weekDeals";
import HomeShipping from "@/components/homeShipping";
// import HomeBanner from "@/components/homeBanner";
import ImageSlider from "@/components/imageSlider";
import FeaturedProducts from "@/components/featuredProducts";
import BannerPage from "@/components/global/banners";
import BestSell from "@/components/bestSell";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <ImageSlider />
      </div>
      <div>
        <HomeShipping />
      </div>
      <div className="mb-10">
        <TrendingProducts />
      </div>
      <div className="mb-10">
        {/* <HomeBanner /> */}
        <BannerPage />
      </div>
      <div className="mb-10">
        <BestSell />
      </div>
      <div className="mb-10">
        <WeekDeals />
      </div>
      <div className="mb-10">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
