import axios from "axios";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../APIs";
import ManufacturerSearchWindow from "../../components/manufacturer/searchWindow";
import ManufactureList from "../../components/manufacturer/manufactureList";

const List = () => {
  // const list = ({ manufactureData }: any) => {
  const [manufactureData, setManufactureData] = useState<any>();

  const getAllManufacturers = async () => {
    const res = await userAPI.getManufacturer();
    console.log(res);

    res ? setManufactureData(res) : "";
  };
  useEffect(() => {
    getAllManufacturers();
  }, []);
  return (
    <>
      <main className="px-5">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="fs-2">Manufacturers</div>
          <a className="btn btn-primary" href="/Manufacturer/add-new">
            Add new
          </a>
        </div>
        <div>
          <ManufacturerSearchWindow />

          {manufactureData ? (
            <ManufactureList
              manufactureData={manufactureData}
              getAllManufacturers={getAllManufacturers}
            />
          ) : (
            "No data found"
          )}
        </div>
      </main>
    </>
  );
};

// export async function getServerSideProps(context: any) {
//   const res = await userAPI.getManufacturer();

//   return {
//     props: {
//       manufactureData: res,
//     },
//   };
// }

export default List;
