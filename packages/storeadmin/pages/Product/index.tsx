import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { userAPI } from "@/APIs";
import { Product } from "@bs-commerce/models";
import ProductsList from "@/components/products/productsList";
import SearchWindow from "@/components/products/searchWindow";
import Link from "next/link";

const Products: NextPage = () => {
  const [products, setProducts] = useState<Product[] | undefined>();
  const getAllProducts = async () => {
    const productsList = await userAPI.getProducts(1000);
    if (productsList) setProducts(productsList);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <main className="ms-sm-auto  px-md-4">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="fs-2">Products</div>
          <Link href="/Product/Create">
            <a className="btn btn-primary">Add new</a>
          </Link>
        </div>
        <div>
          <SearchWindow setProducts={setProducts} />
          {products ? (
            <ProductsList productsList={products} setProducts={setProducts} />
          ) : (
            "There is no product"
          )}
        </div>
      </main>
    </>
  );
};
export default Products;
