import { NextPage } from "next";
import { useRouter } from "next/router";
import { userAPI } from "../../../APIs";
import EditProduct from "../../../components/products/editProductDetails";

const LogDetailPage: NextPage = ({ product }) => {
  return (
    <div className="bg-light">
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
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

export default LogDetailPage;
