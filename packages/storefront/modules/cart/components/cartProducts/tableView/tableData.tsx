import { useAppSelector } from 'store/hooks/index';
import ShowData from '@/modules/cart/components/cartProducts/tableView/showData';
import React from 'react';

const TableData = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  return (
    <>
      {cartData ? (
        cartData?.map((data, index) => {
          return (
            <React.Fragment key={data.productId}>
              <tr className="border-b text-center">
                <ShowData data={data} />
              </tr>
            </React.Fragment>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TableData;
