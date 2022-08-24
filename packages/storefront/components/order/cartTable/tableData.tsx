import { OrderByUserIdResponseData } from 'models';
import ShowData from './showData';
interface Props {
  singleOrder: OrderByUserIdResponseData;
}

const TableData: React.FC<Props> = ({ singleOrder }: Props) => {
  return (
    <>
      {singleOrder ? (
        singleOrder?.products?.map((data: any) => {
          return <ShowData key={singleOrder.orderId} data={data} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TableData;
