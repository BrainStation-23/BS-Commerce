import React, { useContext,useEffect } from "react";
import type { NextPage } from "next";
import { ProductsApi } from "../contextApi/products/ProductContext";
import Products from "../components/Product";
import { Product } from "../types";

const Home: NextPage<{products:Product[]}> = ({ products }) => {

  const { fetchProductInfo } = useContext(ProductsApi);

  useEffect(()=>{
    fetchProductInfo(products)
  },[])

  console.log(products,"products")
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
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/products");
  const { data } = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
