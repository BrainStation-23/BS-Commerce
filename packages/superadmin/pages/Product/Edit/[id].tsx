import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userAPI } from "../../../APIs";
import EditProduct from "../../../components/products/editProductDetails";

const EditProductPage: NextPage = () => {
  const router = useRouter();
  const id = "" + `${router.query.id}`;
  const [product, setProduct] = useState<any>();
  const getAllProducts = async () => {
    const res = await userAPI.getProduct({ productId: `${id}` });
    res?.data ? setProduct(res.data) : "";
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="bg-light px-5">
      <main className="">
      {product ? <EditProduct product={product} /> : "Nothing Found"}

        
      </main>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   const res = await userAPI.getProduct({ productId: context.params.id });
//   return {
//     props: { product: res?.data },
//   };
// }

export default EditProductPage;
