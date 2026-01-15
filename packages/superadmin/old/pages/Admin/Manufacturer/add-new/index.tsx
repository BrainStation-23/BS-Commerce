import { NextPage } from "next";
import CreateManufacturer from "../../../../components/manufacturer/add-new/createManufacturer";
const CreateManufacturerPage: NextPage = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        <CreateManufacturer />
      </div>
    </>
  );
};

export default CreateManufacturerPage;
