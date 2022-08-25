import { OrderByUserId } from 'models';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'customHooks/hooks';
import ReorderModal from '@/components/global/components/modal/reorderModal';
import { productsState } from 'toolkit/productsSlice';
import { addToCart } from 'toolkit/cartSlice';
import { IOrderProduct } from 'models';
import { IReOrderQuery } from 'models';
import { userAPI } from 'APIs';
interface Props {
  singleOrder: OrderByUserId;
}
const ReOrder: React.FC<Props> = ({ singleOrder }: Props) => {
  const dispatch = useAppDispatch();
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  const [unavailableProd, setUnavailableProd] = useState<IOrderProduct[]>([]);
  const [newProduct, setNewProduct] = useState<IOrderProduct[]>([]);
  const [message, setMessage] = useState('');
  const [cartToken, setCartToken] = useState(false);
  let products = singleOrder.products;
  const allProducts = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  const closeCartModal = () => {
    setShowCartModal(false);
    setUnavailableProd([]);
  };
  const handleReorder = () => {
    const pastOrderId = singleOrder.orderId;
    const reOrderParams = {
      orderId: pastOrderId,
      overWriteCart: false,
      ignoreInvalidItems: false,
    };
    toReorder(reOrderParams);
  };

  const toReorder = async (reOrderParams: IReOrderQuery) => {
    try {
      const res = await userAPI.toreorderProcess(reOrderParams);
    } catch (error) {}
  };

  const handleReorderCheckout = () => {
    // toCart();
  };
  return (
    <>
      <div className="flex justify-center pt-6">
        <button
          onClick={handleReorder}
          className="rounded bg-green-700 py-2 px-8 font-bold text-white hover:bg-black"
          id="re-order"
        >
          Reorder
        </button>
      </div>
      <ReorderModal
        open={showCartModal}
        onClose={closeCartModal}
        message={message}
        onCheckOutReorder={handleReorderCheckout}
        unavailableProd={unavailableProd}
      />
    </>
  );
};

export default ReOrder;
