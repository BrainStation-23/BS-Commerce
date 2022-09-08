import { IProductOrderData } from 'models';
import Image from 'next/image';

interface Props {
  data: IProductOrderData;
}

const ShowData: React.FC<Props> = ({ data }: Props) => {
  const total = data.quantity * data.price;
  return (
    <>
      <tr key={data?.productId}>
        <td className="border border-slate-300 py-4 md:px-2 xl:px-2">
          {data?.photos![0]?.url ? (
            <Image
              src={data?.photos![0]?.url!}
              alt={data?.photos![0]?.alt}
              width={100}
              height={100}
            />
          ) : (
            'Problem Rendering Image'
          )}
        </td>
        <td className=" border border-slate-300 py-10 md:px-2 xl:px-10">
          <span className="flex justify-center px-2">{data?.name}</span>
        </td>
        <td className="border border-slate-300 px-4 py-14 ">
          <span className="flex justify-center"> ${data?.price}</span>
        </td>
        <td className="border border-slate-300 px-4 py-14 ">
          <span className="flex justify-center"> {data?.quantity}</span>
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center"> ${total}</span>
        </td>
      </tr>
    </>
  );
};

export default ShowData;
