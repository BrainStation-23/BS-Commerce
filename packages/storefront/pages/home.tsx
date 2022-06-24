import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { useDispatch } from "react-redux";
import { storeAllCartItems } from "toolkit/cart/getAllCartItems";
import { useAppDispatch } from "customHooks/hooks";

const Home: NextPage = ({ products, featuredProducts, cartData }: any) => {
  const dispatch = useAppDispatch()
  dispatch(storeAllCartItems(cartData));
  return <HomeComponent products={products} featuredProducts={featuredProducts} />;
};

export async function getServerSideProps(context: any) {
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const cartData = await userAPI.getCart();
  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      cartData: cartData,
    }
  }
}

export default Home;
