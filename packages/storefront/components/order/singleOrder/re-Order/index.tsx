import { IOrderResponseData } from 'models';
import React, { useState } from 'react';
import { useAppSelector } from 'customHooks/hooks';
import { forEach } from 'cypress/types/lodash';
import ReorderModal from '@/components/global/components/modal/reorderModal';
interface Props {
  singleOrder: IOrderResponseData;
}

const ReOrder: React.FC<Props> = ({ singleOrder }: Props) => {
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  const [unavailableProd, setUnavailableProd] = useState([]);
  let { products } = singleOrder;
  const allProducts = useAppSelector(
    (state) => state.persistedReducer.product.featuredProducts
  );
  const orderedProductId = products.map((prod) => {
    return prod.productId;
  });
  const allProductsId = allProducts.map((prod) => {
    return prod.id;
  });
  const closeCartModal = () => {
    setShowCartModal(false);
  };
  const handleReorder = () => {
    // const orderedProductId = products.map((prod) => {
    //   return prod.productId;
    // });
    // const allProductsId = allProducts.map((prod) => {
    //   return prod.id;
    // });
    let unmatched = orderedProductId.filter(
      (id) => !allProductsId.includes(id)
    );

    if (unmatched.length > 0) {
      products.forEach((prod: any) => {
        unmatched.forEach((i) => {
          if (prod.productId == i) {
            const newObj = { ...unavailableProd };
            console.log(newObj);

            // newObj.push(prod);
            setUnavailableProd([newObj]);
          }
        });
      });
    }
    // if (unavailableProd.length > 0) {
    //   console.log(unavailableProd.length);

    //   //modal should open
    //   // setShowCartModal(true);
    //   alert('hi');
    // } else {
    //   //products should be added directly to the cart
    //   setShowCartModal(true);
    // }
  };
  return (
    <>
      <div className="flex justify-center pt-6">
        <button
          onClick={handleReorder}
          className="rounded bg-green-700 py-2 px-8 font-bold text-white hover:bg-black"
        >
          Reorder
        </button>
      </div>
      <ReorderModal open={showCartModal} onClose={closeCartModal} />
    </>
  );
};

export default ReOrder;
