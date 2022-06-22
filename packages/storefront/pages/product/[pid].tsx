import type { GetServerSideProps, NextPage } from "next";
import ProductDetailsComponent from "@/components/product";
import axios from "axios";
import { userAPI } from "APIs";

const ProductDetails: NextPage = () => {
  return (
    <>
      <ProductDetailsComponent></ProductDetailsComponent>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { pid } = context.params;
  const res = await userAPI.getPublicProductsById(pid);
  return {
    props: {
      products: res,
    },
  };
}

export default ProductDetails;
