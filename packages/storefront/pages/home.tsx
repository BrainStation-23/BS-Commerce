import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { storeAllCartItems } from "toolkit/cartSlice";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { useEffect } from "react";
var cookie = require("cookie");
import Axios from "axios";


const Home: NextPage = ({ products, featuredProducts, cartData, token }: any) => {
  const dispatch = useAppDispatch();

  const store = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  useEffect(() => {
    dispatch(storeAllCartItems(cartData.items));
    Axios.defaults.headers.common = {
      Authorization: `Bearer ${token.token}`,
  };
  }, []);

  return (
    <HomeComponent products={products} featuredProducts={featuredProducts} />
  );
};

export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const cartData = await userAPI.getCart(token.token);
  return {
    props: {
      products: allProducts || [],
      featuredProducts: featuredProducts || [],
      cartData: cartData || [],
      token: token,
    },
  };
}

export default Home;
