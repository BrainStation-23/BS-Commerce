import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";

const Home: NextPage = ({ products, featuredProducts }: any) => {
  return <HomeComponent products={products} featuredProducts={featuredProducts} />;
};

export async function getServerSideProps(context: any) {
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
    }
  }
}

export default Home;
