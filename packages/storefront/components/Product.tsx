import React, { FC, useContext } from "react";
import Image from "next/image";
import { ProductsApi } from "../contextApi/products/ProductContext";
import productPic from "../public/product.jpeg";
// import { Products } from "../types";

const Products: FC = () => {
  const { products, loading } = useContext(ProductsApi);
  return (
    <>
      {products?.map((product) => (
        <div className="col mb-5" key={product?._id}>
          <div className="card h-100">
            <Image
              className="card-img-top"
              src={productPic}
              width={450}
              height={300}
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{product?.name}</h5>
                {product?.price}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a
                  className="btn btn-outline-dark mt-auto"
                  href={`/product/${product?.id}`}
                >
                  View options
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
