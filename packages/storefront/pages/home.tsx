import type { NextPage } from "next";
import Products from "./products";
import Blog from "../components/blog/blog";

const Home: NextPage = () => {
    return (
        <>
            { /* <Products></Products> */}
            <Blog></Blog>
        </>
    );
};

export default Home;