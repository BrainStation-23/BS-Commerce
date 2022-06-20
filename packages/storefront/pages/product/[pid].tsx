import type { NextPage } from "next";
import ProductDetailsComponent from "@/components/product";
import axios from "axios";
import { Product } from "models";

const ProductDetails: NextPage = ({product}: Product) => {
  return (
    <>
      <ProductDetailsComponent product={product}></ProductDetailsComponent>
    </>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const { productid } = context.query;
    const res = await axios.get(`http://localhost:3000/api/product/${productid}`)
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
