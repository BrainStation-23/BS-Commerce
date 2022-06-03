import type { NextPage } from "next";
import TrendingProducts from "@/components/trend/index";
import WeekDeals from "@/components/weekDeals";
import HomeShipping from "@/components/homeShipping";
import HomeBanner from "@/components/homeBanner";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <HomeShipping />
      </div>
      <div className="mb-10">
        <TrendingProducts />
      </div>
      <div className="mb-10">
        <HomeBanner />
      </div>
      <div className="mb-10">
        <WeekDeals />
      </div>
    </>
  );
};

export default Home;
