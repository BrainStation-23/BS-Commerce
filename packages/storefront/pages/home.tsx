import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { storeAllCartItems } from "toolkit/cartSlice";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { useEffect } from "react";
var cookie = require("cookie");

const Home: NextPage = ({ products, featuredProducts, cartData }: any) => {
  const dispatch = useAppDispatch();

  const store = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  useEffect(() => {
    dispatch(storeAllCartItems(cartData.items));
  }, []);
  // console.log("Products---------------------", products)
  // console.log("Carts---------------------", cartData)
  return (
    <HomeComponent products={products} featuredProducts={featuredProducts} />
  );
};

export async function getServerSideProps({ req }) {
  let { token } = cookie.parse(req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts(token);
  // console.log(allProducts);
  const featuredProducts = await userAPI.getFeaturedProducts(token);
  const cartData = await userAPI.getCart(token);
  return {
    props: {
      products: allProducts || [],
      featuredProducts: featuredProducts || [],
      cartData: cartData || [],
    },
  };
}

export default Home;
