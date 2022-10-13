import { useAppSelector } from 'store/hooks/index';
import ShowData from '@/modules/cart/components/cartProducts/tableView/showData';

const TableData = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  return (
    <>
      {cartData ? (
        cartData?.map((data) => {
          return <ShowData key={data.productId} data={data} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TableData;
