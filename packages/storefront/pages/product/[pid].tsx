import type { GetServerSideProps, NextPage } from "next";
import ProductDetailsComponent from "@/components/product";
import axios from "axios";
import { userAPI } from "APIs";
import { Product } from "models";

interface SingleProduct {
  product: Product;
}

const ProductDetails: NextPage = ({product}: SingleProduct) => {
  return (
    <>
      <ProductDetailsComponent product={product}></ProductDetailsComponent>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { pid } = context.params;
  const res = await userAPI.getPublicProductsById(pid);
  return {
    props: {
      product: res,
    },
  };
}

export default ProductDetails;
