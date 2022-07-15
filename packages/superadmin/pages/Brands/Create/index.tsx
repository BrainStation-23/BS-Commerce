import CreateBrand from "@/components/brands/createBrand";
import { NextPage } from "next";

const CreateBrandPage: NextPage = () => {
  return (
    <>
      <div className="px-5 mt-2">
        <CreateBrand />
      </div>
    </>
  );
};

export default CreateBrandPage;