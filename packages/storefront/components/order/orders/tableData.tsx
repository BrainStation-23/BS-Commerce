import { OrderByUserId } from 'models';
import moment from 'moment';
import Link from 'next/link';

interface Props {
  singleOrder: OrderByUserId;
}
const TableData: React.FC<Props> = ({ singleOrder }) => {
  return (
    <>
      <td className="px-5 py-4">{singleOrder?.orderId}</td>
      <td className="px-5 py-4">
        {moment(singleOrder?.orderedDate).format('lll')}
      </td>
      <td className="px-5 py-4">
        {singleOrder?.orderStatus.toLowerCase() === 'pending' && (
          <button className="cursor-text rounded-md bg-[#fcd34d] bg-opacity-20 p-1">
            Pending
          </button>
        )}
        {singleOrder?.orderStatus.toLowerCase() === 'completed' && (
          <button className="cursor-text rounded-md bg-[#1d8a51] bg-opacity-10 p-1">
            Completed
          </button>
        )}
        {singleOrder?.orderStatus.toLowerCase() === 'cancelled' && (
          <button className="cursor-text rounded-md bg-[#ff0000] bg-opacity-20 p-1">
            Cancelled
          </button>
        )}
      </td>
      <td className="px-5 py-4">{singleOrder?.paymentMethod}</td>
      <td className="px-5 py-4">${singleOrder?.productCost}</td>
      <td className="px-5 py-4 text-[#40a944]">
        <Link
          href={{
            pathname: `/order/[id]`,
            query: { id: singleOrder?.orderId },
          }}
          passHref
        >
          View
        </Link>
      </td>
    </>
  );
};
export default TableData;
