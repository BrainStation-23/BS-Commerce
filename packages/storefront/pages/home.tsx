import Product from "@/components/global/components/product/product";
import type { NextPage } from "next";
import Link from "next/link";
import Blog from "../components/blog/blog"
import Products from "./trendProducts";

const Home: NextPage = () => {
  return (
    <>
      <Blog></Blog>
      {/* <Products/> */}
    </>
  );
};

export default Home;