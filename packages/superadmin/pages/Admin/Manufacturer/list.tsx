import axios from "axios";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../../APIs";
import ManufactureList from "../../../components/manufacturer/manufactureList";

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
    <div>
      {manufactureData ? (
        <ManufactureList manufactureData={manufactureData} />
      ) : (
        "No data found"
      )}
    </div>
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
