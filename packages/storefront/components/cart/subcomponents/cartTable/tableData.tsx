import { userAPI } from "APIs";
import { useAppSelector } from "customHooks/hooks";
import { GetCustomerProductParams } from "models";
import Image from "next/image";
import ShowData from "./showData";

const TableData = () => {
  const cartData = useAppSelector(
    (state) => state.getAllCartItemsStore.allCartItems
  );
  return (
    <>
      {cartData ? cartData?.items?.map((data, index) => {
        return (
         <ShowData key={index} data={data} />
        );
      }) : <></>}
    </>
  );
};

export default TableData;
