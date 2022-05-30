import type { NextPage } from "next";
import Counter from "../components/global/components/product/counter";
import Icon from "../components/global/components/product/icon";
import Products from "./products";

const Home: NextPage = () => {
    return (
        <>
            <Products></Products>   
         </>
    );
};

export default Home;
