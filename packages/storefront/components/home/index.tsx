import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NextComponentType } from "next";

import ImageSlider from "@/components/home/imageSlider";
import HomeShipping from "@/components/home/homeShipping";
import TrendingProducts from "@/components/home/trend/index";
import BannerPage from "@/components/global/bannerComponent";
import WeekDeals from "@/components/home/weekDeals";
import HomefullBanner from "@/components/global/bannerComponent/homeFullBanner";
import BestSell from "@/components/home/bestSell";
import FeaturedProducts from "@/components/home/featuredProducts";

import { storeProducts } from "toolkit/ProductsSlice";
import productData from "../../allData/product-data.json";

const HomeComponent = ({products, featuredProducts}: any) => { //edited type. was const HomeComponent: NextComponentType = () => {}
  const dispatch = useDispatch();
  //const productsData = useSelector((state: any) => state.products)
  // console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).products));

  useEffect(() => {
    dispatch(storeProducts(products));
  }, []);

  return (
    <>
      <ImageSlider />
      <HomeShipping />
      <div className="mb-4 md:mb-10">
        <TrendingProducts products={products} />
      </div>
      <div className="mb-4 md:mb-10">
        <BannerPage />
      </div>
      <div className="mb-4 md:mb-10">
        <WeekDeals products={products} />
      </div>
      <div className="mb-4 md:mb-10">
        <HomefullBanner />
      </div>
      <div className="mb-4 md:mb-10">
        <BestSell products={products} />
      </div>
      {/* <div className="mb-5 md:mb-10">
        <Blog />
      </div> */}
      <div className="mb-4 md:mb-10">
        <FeaturedProducts products={featuredProducts} />
      </div>
    </>
  );
};

export default HomeComponent;
