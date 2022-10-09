import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  OrderByUserId,
  IOrderProduct,
  IReOrderQuery,
} from '@bs-commerce/models';

import { userAPI } from 'APIs';
import ReorderModal from '@/components/global/components/modal/reorderModal';
import useTranslation from 'next-translate/useTranslation';
interface Props {
  singleOrder: OrderByUserId;
}

const ReOrder: React.FC<Props> = ({ singleOrder }: Props) => {
  const { t } = useTranslation();
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  const [unavailableProducts, setUnavailableProducts] = useState<
    IOrderProduct[]
  >([]);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const closeCartModal = () => {
    setShowCartModal(false);
    setUnavailableProducts([]);
  };

  const handleReorder = (
    overWriteCart: boolean,
    ignoreInvalidItems: boolean
  ) => {
    const pastOrderId = singleOrder.orderId;
    const reorderParameters: IReOrderQuery = {
      orderId: pastOrderId,
      overWriteCart,
      ignoreInvalidItems,
    };
    placeReorder(reorderParameters);
  };

  const placeReorder = async (reorderParameters: IReOrderQuery) => {
    try {
      const info = await userAPI.reorder(reorderParameters);

      if ('data' in info!) {
        if (info.data.products?.length && info.data.message === undefined) {
          router.push('/cart');
        }
        if (
          info.data.message ===
          'YOUR ITEMS IN THE CART WILL BE REPLACED. DO YOU WANT TO CONTINUE?'
        ) {
          setMessage(info.data.message);
          setShowCartModal(true);
        }
        if (
          info.data.message ===
          'SOME PRODUCTS ARE NOT AVAILABLE. DO YOU WISH TO CONTINUE?'
        ) {
          setMessage(info.data.message);
          setUnavailableProducts(info.data.products!);
          setShowCartModal(true);
        }
        if (info.data.message === 'THESE ITEMS ARE NOT AVAILABLE RIGHT NOW') {
          setMessage(info.data.message);
          setShowCartModal(true);
        }
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="flex justify-center pt-6">
        <button
          onClick={() => handleReorder(false, false)}
          className="rounded bg-green-700 py-2 px-8 font-bold text-white hover:bg-black"
          id="re-order"
        >
          {t('common:reorder')}
        </button>
      </div>
      <ReorderModal
        open={showCartModal}
        onClose={closeCartModal}
        message={message}
        onReorder={handleReorder}
        unavailableProducts={unavailableProducts}
      />
    </>
  );
};

export default ReOrder;
