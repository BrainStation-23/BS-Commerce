import type { GetServerSideProps, NextPage } from "next";
import Product from "../components/products"

const Products: NextPage = (props) => {

    return (
        <>
            <Product></Product>
        </>
    );
};

export default Products;
