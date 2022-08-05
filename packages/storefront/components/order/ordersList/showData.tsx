import moment from 'moment';
import Link from 'next/link';
import { IOrderResponseData } from 'models';
interface Props {
  data: IOrderResponseData;
}

const ShowData: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      <tr key={data.orderId}>
        <td className="border border-slate-300 px-8 py-4 md:px-4">
          {data.orderId}
        </td>
        <td className="border border-slate-300 py-10 md:px-2 xl:px-10">
          {data?.orderStatus}
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center">
            {moment(data?.orderedDate).format('lll')}
          </span>
        </td>
        <td className="border border-slate-300 px-4 py-14 ">
          <span className="flex justify-center">{data?.paymentMethod}</span>
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center">${data?.productCost}</span>
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <Link
            href={{
              pathname: `/order/[id]`,
              query: { id: data?.orderId },
            }}
            passHref
          >
            <button className="flex justify-center">
              <span className="px-2">Details</span>
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ShowData;
