import { FC, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userAPI } from "../../../APIs";
import ViewManufacturerComp from "./viewManufacturer";
const ViewSingleManufacturer: FC = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState<any>();
  const id = "" + `${router.query.id}`;

  const getManufacturer = async () => {
    const res = await userAPI.getSingleManufacturer(id);
    res?.data ? setManufacturer(res.data.manufacturer) : "";
    console.log(res);

    console.log(manufacturer);
  };
  useEffect(() => {
    getManufacturer();
  }, []);
  return (
    <>
      <div className="bg-light px-5">
        <main>
          {manufacturer ? (
            <ViewManufacturerComp manufacturer={manufacturer} />
          ) : (
            "No Manufacturers Found"
          )}
        </main>
      </div>
    </>
  );
};

export default ViewSingleManufacturer;
