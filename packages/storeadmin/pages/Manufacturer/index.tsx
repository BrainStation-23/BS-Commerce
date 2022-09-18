import type { NextPage } from "next";
import List from "../../components/manufacturer/index";
const ManufacturerLists: NextPage = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <List />
    </main>
  );
};

export default ManufacturerLists;
