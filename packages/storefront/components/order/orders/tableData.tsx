import { OrderByUserId } from '@bs-commerce/models';
import { useAppSelector } from 'customHooks/hooks';
import moment from 'moment';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

interface Props {
  singleOrder: OrderByUserId;
}
const TableData: React.FC<Props> = ({ singleOrder }) => {
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.persistedReducer.currency);

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
      <td className="px-5 py-4">
        {Intl.NumberFormat(
          `${currency.currencyLanguage}-${currency.currencyStyle}`,
          { style: 'currency', currency: `${currency.currencyName}` }
        ).format(singleOrder?.productCost)}
      </td>
      <td className="px-5 py-4 text-primary">
        <Link
          href={{
            pathname: `/order/[id]`,
            query: { id: singleOrder?.orderId },
          }}
        >
          {t('order:view')}
        </Link>
      </td>
    </>
  );
};
export default TableData;
