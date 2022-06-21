import type { GetServerSideProps, NextPage } from "next";
import ProductDetailsComponent from "@/components/product";
import axios from "axios";

const ProductDetails: NextPage = () => {
  return (
    <>
      <ProductDetailsComponent></ProductDetailsComponent>
    </>
  );
};

export async function getServerSideProps(context: any) {
  console.log(`Context: ${context}`);
  try {
    const { productid } = context.query;
    const res = await axios.get(`http://localhost:3000/api/product/${productid}`, {headers: context.req.headers})
    const product = await res.data;
    console.log(product);
    return { props: { product } };
  }
  catch(err) {
    console.log(err);
    return { props: { }}
  }
}

export default ProductDetails;