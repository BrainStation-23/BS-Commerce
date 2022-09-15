import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { userAPI } from "APIs";
import EditProduct from "@/components/products/editProductDetails";

const EditProductPage: NextPage = () => {
  const router = useRouter();
  const id = "" + `${router.query.id}`;
  const [product, setProduct] = useState<any>();
  const getProduct = async () => {
    const res = await userAPI.getProduct({ productId: `${id}` });
    res?.data ? setProduct(res.data) : "";
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="bg-light px-5">
      <main>
        {product ? <EditProduct product={product} id={id} /> : "Nothing Found"}
      </main>
    </div>
  );
};
export default EditProductPage;
