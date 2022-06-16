import type { NextComponentType } from "next";
import TrendingProducts from "@/components/home/trend/index";
import WeekDeals from "@/components/home/weekDeals";
import HomeShipping from "@/components/home/homeShipping";
import ImageSlider from "@/components/home/imageSlider";
import FeaturedProducts from "@/components/home/featuredProducts";
import BannerPage from "@/components/global/bannerComponent";
import BestSell from "@/components/home/bestSell";
import Blog from "@/components/home/blog/blog";
import HomefullBanner from "@/components/global/bannerComponent/homeFullBanner";
import { useDispatch } from "react-redux";
import { storeProducts } from "toolkit/ProductsSlice";
import { useEffect } from "react";
import productData from "../../allData/product-data.json";

const HomeComponent: NextComponentType = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeProducts(productData.products));
  }, []);

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
