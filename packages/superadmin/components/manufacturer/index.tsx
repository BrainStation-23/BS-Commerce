import axios from "axios";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../APIs/index";
import ManufacturerSearchWindow from "./SubComponents/searchWindow";
import ManufactureList from "./List/manufactureList";

const List = () => {
  const [manufactureData, setManufactureData] = useState<any>();
  const getAllManufacturers = async () => {
    const res = await userAPI.getManufacturer(1000);
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
              // getAllManufacturers={getAllManufacturers}
              setManufactureData={setManufactureData}
            />
          ) : (
            "No data found"
          )}
        </div>
      </main>
    </>
  );
};

export default List;
