import { useAppSelector } from "customHooks/hooks";
import ShowData from "@/components/cart/subcomponents/cartTable/showData";

const TableData = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  return (
    <>
      {cartData ? (
        cartData?.map((data, index) => {
          return <ShowData key={index} data={data} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TableData;
