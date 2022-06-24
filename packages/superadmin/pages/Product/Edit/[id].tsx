import { NextPage } from "next";
import { useRouter } from "next/router";
import { userAPI } from "../../../APIs";
import EditProduct from "../../../components/products/editProductDetails";

const EditProductPage: NextPage = ({ product }) => {
  return (
    <div className="bg-light px-5">
      <main className="">
        <EditProduct product={product} />
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  const res = await userAPI.getProduct({ productId: context.params.id });
  return {
    props: { product: res?.data },
  };
}

export default EditProductPage;
