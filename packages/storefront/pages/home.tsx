import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
    <Link href="/search">
    <div className="hover:cursor-pointer text-blue-600">
      Search Products
    </div>
    </Link>
    </>
  );
};

export default Home;