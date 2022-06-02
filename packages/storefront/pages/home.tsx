import type { NextPage } from "next";
import Link from "next/link";
import Blog from "../components/blog/blog"

const Home: NextPage = () => {
  return (
    <>
    <div>
      <Blog></Blog>
    </div>
    </>
  );
};

export default Home;