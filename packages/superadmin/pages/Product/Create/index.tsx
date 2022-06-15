import { NextPage } from "next";
import CreateProduct from "../../../components/products/createProduct";
import ProductInfoForm from "../../../components/products/forms/productInfoForm";

const CreateProductPage: NextPage = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
      <CreateProduct />  
      </div>
    </>
  );
};

export default CreateProductPage;