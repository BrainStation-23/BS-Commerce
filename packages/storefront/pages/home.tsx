import type { NextPage } from "next";
import Icon from "../components/global/components/product/common/icon";
import Products from "./trendProducts";

const Home: NextPage = () => {
    return (
        <>
            <Products></Products>  
            <Icon></Icon> 
         </>
    );
};

export default Home;
