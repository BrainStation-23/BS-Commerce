import axios from "axios";
import React from "react";
import { userAPI } from "../../../APIs";
import ManufactureList from "../../../components/manufacturer/manufactureList";

const list = ({ manufactureData }: any) => {
  return (
    <div>
      <ManufactureList manufactureData={manufactureData} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await userAPI.getManufacturer();

  return {
    props: {
      manufactureData: res,
    },
  };
}

export default list;
