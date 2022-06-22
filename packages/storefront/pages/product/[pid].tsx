import type { GetServerSideProps, NextPage } from "next";
import ProductDetailsComponent from "@/components/product";
import { userAPI } from "APIs";

const ProductDetails: NextPage = () => {
  return (
    <>
      <ProductDetailsComponent></ProductDetailsComponent>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const res = await userAPI.getPublicProductsById();
  return {
    props: {
      products: res,
    }
  }
}

export default ProductDetails;
