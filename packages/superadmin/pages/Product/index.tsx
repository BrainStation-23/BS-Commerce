import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { userAPI } from '@/APIs';
import { Product } from '@bs-commerce/models';
import ProductsList from '@/components/products/productsList';
import SearchWindow from '@/components/products/searchWindow';

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
      <main className="px-5">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="fs-2">Products</div>
          <a className="btn btn-primary" href="/Product/Create">
            Add new
          </a>
        </div>
        <div>
          <SearchWindow setProducts={setProducts} />
          {products ? (
            <ProductsList productsList={products} setProducts={setProducts} />
          ) : (
            'There is no product'
          )}
        </div>
      </main>
    </>
  );
};
export default Products;
