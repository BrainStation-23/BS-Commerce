import {
  IOrderProduct,
  OrderByUserId,
} from '@bs-commerce/models';
import ShowData from './showData';
interface Props {
  singleOrder: OrderByUserId;
}

const TableData: React.FC<Props> = ({ singleOrder }: Props) => {
  return (
    <>
      {singleOrder ? (
        singleOrder?.products?.map((data: IOrderProduct) => {
          return <ShowData key={singleOrder.orderId} data={data} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TableData;
