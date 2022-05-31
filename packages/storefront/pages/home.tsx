import type { NextPage } from "next";
import Icon from "../components/global/components/product/common/icon";
import Products from "./trendProducts";
import type { User } from "models";

const newUser: User = {
  id: "2",
  name: "Asad",
};
const Home: NextPage = () => {
  return (
    <>
      <Products></Products>
      <Icon></Icon>
    </>
  );
};

export default Home;
