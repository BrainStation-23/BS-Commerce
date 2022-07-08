import type { GetServerSideProps, NextPage } from "next";

import { userAPI } from "APIs";
import { Product } from "models";

import ProductDetailsComponent from "@/components/product";

interface SingleProduct {
  product: Product;
}

const ProductDetails: NextPage<SingleProduct> = ({product}) => {
  return (
    <>
      <ProductDetailsComponent product={product}></ProductDetailsComponent>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const res = await userAPI.getPublicProductsById(context.query.id);
  return {
    props: {
      product: res,
    },
  };
}

export default ProductDetails;
