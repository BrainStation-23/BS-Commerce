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
  try {
    const { pid: productid } = context.params;
    const headers = context.req.headers;
    const res = await axios.get(`http://localhost:3000/api/product/${productid}`, {headers})
    const product = await res.data;
    console.log(product);
    return { props: { product } };
  }
  catch(err: any) {
    console.log(err.response.data);
    return { props: { }}
  }
}

export default ProductDetails;