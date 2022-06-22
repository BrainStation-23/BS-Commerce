import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";

const Home: NextPage = ({ products }: any) => {
  return <HomeComponent products={products} />;
};

export async function getServerSideProps(context: any) {
  const res = await userAPI.getPublicProducts();
  return {
    props: {
      products: res,
    }
  }
}

export default Home;
