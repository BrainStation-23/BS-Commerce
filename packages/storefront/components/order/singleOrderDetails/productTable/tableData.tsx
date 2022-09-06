import { IOrderProduct, OrderByUserId } from 'models';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  singleProduct: IOrderProduct;
}
const TableData: React.FC<Props> = ({ singleProduct }) => {
  return (
    <>
      <td className="px-5 py-4">
        <Image
          src={singleProduct?.photos![0]?.url!}
          alt={singleProduct?.photos![0]?.alt}
          width={60}
          height={60}
        />
      </td>
      <td className="px-5 py-4">{singleProduct?.name}</td>
      <td className="px-5 py-4">{singleProduct?.price}</td>
      <td className="px-5 py-4">{singleProduct?.quantity}</td>
      <td className="px-5 py-4">
        ${singleProduct?.price * singleProduct?.quantity}
      </td>
    </>
  );
};
export default TableData;
