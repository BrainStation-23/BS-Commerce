import type { NextPage } from "next";
import Swaper from "./swaper";
import Products from "./trendProducts";

const Home: NextPage = () => {
  return (
    <>
      <Products></Products>
      <Swaper></Swaper>
    </>
  );
};

export default Home;
