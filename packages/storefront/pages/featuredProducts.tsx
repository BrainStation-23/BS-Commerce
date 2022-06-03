import type { NextPage } from "next";
import FeaturedProducts from "../components/featuredProducts";

const Home: NextPage = () => {
  return (
    <>
      <div className="px-2 sm:px-36 lg:40px ">      
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
