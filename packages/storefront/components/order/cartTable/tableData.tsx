import { IOrderResponseData } from "models";
import ShowData from "./showData";
interface Props {
  singleOrder: IOrderResponseData;
}

const TableData: React.FC<Props> = ({singleOrder}: Props) => {
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
