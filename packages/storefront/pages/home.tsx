import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { storeAllCartItems } from "toolkit/cartSlice";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { useEffect } from "react";
import Loading from "@/components/global/loader";
var cookie = require("cookie");

const Home: NextPage = ({ products, featuredProducts, cartData, token }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(storeAllCartItems(cartData.items));
  }, []);

  return (
    <>
      <HomeComponent products={products} featuredProducts={featuredProducts} />
    </>
  );
};

export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const cartData = await userAPI.getCart(token.token);
  return {
    props: {
      products: allProducts ? JSON.parse(JSON.stringify(allProducts)) : [],
      featuredProducts: featuredProducts ? JSON.parse(JSON.stringify(featuredProducts)) : [],
      cartData: cartData ? JSON.parse(JSON.stringify(cartData)) : [],
      token: token,
    },
  };
}

export default Home;
