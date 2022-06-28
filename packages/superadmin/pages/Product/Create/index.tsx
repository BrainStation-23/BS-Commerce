import { NextPage } from "next";
import CreateProduct from "../../../components/products/createProduct";
import ProductInfoForm from "../../../components/products/forms/productInfoForm";

const CreateProductPage: NextPage = () => {
  return (
    <>
      <div className="px-5 mt-2">
        <CreateProduct />
      </div>
    </>
  );
};

export default CreateProductPage;
