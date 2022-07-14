import { NextPage } from "next";
import CreateProduct from "@/components/products/createProduct";

const CreateProductPage: NextPage = () => {
  return (
    <>
      <div className="mt-2 px-5">
        <CreateProduct />
      </div>
    </>
  );
};

export default CreateProductPage;
