import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { storeAllCartItems } from "toolkit/cartSlice";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { useEffect } from "react";
var cookie = require("cookie");
import Axios from "axios";

const Home: NextPage = ({
  products,
  featuredProducts,
}: any) => {

  return (
    <HomeComponent products={products} featuredProducts={featuredProducts} />
  );
};

export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  return {
    props: {
      products: allProducts || [],
      featuredProducts: featuredProducts || [],
    },
  };
}

export default Home;
