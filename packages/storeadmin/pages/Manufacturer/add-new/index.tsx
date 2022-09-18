import { NextPage } from "next";
import CreateManufacturer from "../../../components/manufacturer/add-new/createManufacturer";
const CreateManufacturerPage: NextPage = () => {
  return (
    <>
      <div className="mt-2 px-5">
        <CreateManufacturer />
      </div>
    </>
  );
};

export default CreateManufacturerPage;
