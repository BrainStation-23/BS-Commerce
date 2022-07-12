import ShowData from "./showData";

const TableData = ({singleOrder}: any) => {
  return (
    <>
    {singleOrder ? (
        singleOrder?.products?.map((data: any) => {
          return <ShowData key={data.orderId} data={data} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TableData;
