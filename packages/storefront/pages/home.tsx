import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";

const Home: NextPage = ({ products }: any) => {
  return <HomeComponent products={products} />;
};

export async function getServerSideProps(context: any) {
  try {
    const headers = context.req.headers;
    const res = await axios.get(`http://localhost:3000/api/product`, {headers})
    const products = await res.data.data;
    console.log(products);
    return { props: { products } };
  }
  catch(err: any) {
    console.log(err.response.data);
    return { props: { }}
  }
}

export default Home;
