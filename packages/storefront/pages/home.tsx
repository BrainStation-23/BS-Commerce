import type { NextPage } from "next";
import Product from "../components/product";
import Image from "next/image";
import img5 from "../images/laptop.jpg";
import img from "../images/fruit.avif";
import productPic from "../public/product.jpeg";

const Home: NextPage = () => {
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Storefront</h1>
                        <p className="lead fw-normal text-white-50 mb-0">
                            With this shop hompeage template
                        </p>
                    </div>
                </div>
            </header>
            <Product></Product>
        </>
    );
};

export default Home;
