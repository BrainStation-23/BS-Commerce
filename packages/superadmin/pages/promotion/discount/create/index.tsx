import { NextPage } from "next";
import CreateDiscount from "../../../../components/discount/createDiscount";

const CreateDiscountPage: NextPage = () => {
  return (
    <>
      <div className="px-5">
      <CreateDiscount /> 
      </div>
    </>
  );
};

export default CreateDiscountPage;