import type { NextPage } from "next";
import BestSell from "@/components/bestSell";

const Home: NextPage = () => {
  return (
    <>
      <div className="px-2 sm:px-36 lg:40px ">      
        <BestSell />
      </div>
    </>
  );
};

export default Home;
