import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userAPI } from "../../../APIs/index";
import EditManufacturer from "../../../components/manufacturer/Edit/editManufacturer";

const EditManufacturerPage: NextPage = () => {
  const router = useRouter();
  const id = `${router.query.id}`;
  const [manufacturer, setManufacturerData] = useState<any>();

  const getAllManufacturers = async () => {
    const res = await userAPI.getSingleManufacturer(id);
    res?.data ? setManufacturerData(res.data) : "";
  };
  useEffect(() => {
    getAllManufacturers();
  }, []);
  return (
    <div className="bg-light">
      <main className="bg-light px-5">
        {manufacturer ? (
          <EditManufacturer manufacturer={manufacturer} />
        ) : (
          "No data"
        )}
      </main>
    </div>
  );
};
// export async function getServerSideProps(context: any) {
//   console.log(context.params.id);
//   const res = await userAPI.getSingleManufacturer( context.params.id );

//   return {
//     props: { manufacturer: res?.data },
//   };
// }

export default EditManufacturerPage;
