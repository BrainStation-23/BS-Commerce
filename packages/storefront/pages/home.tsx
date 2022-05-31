import type { NextPage } from "next";
import Image from "next/image";
import productPic from "../public/product.jpeg";
import type { User } from "models";
import Blog from "@/components/blog/blog";

const newUser: User = {
  id: "2",
  name: "Asad",
};
const Home: NextPage = () => {
  return (
    <>
      {/* <Products></Products> */}
      <Blog></Blog>
    </>
  );
};

export default Home;
