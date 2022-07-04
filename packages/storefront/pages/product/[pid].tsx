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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pid = context?.params?.pid!;
  const res = await userAPI.getPublicProductsById(pid);
  return {
    props: {
      product: res,
    },
  };
}

export default ProductDetails;
