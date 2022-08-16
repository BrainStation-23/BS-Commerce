import type { NextComponentType } from 'next';
import { useAppSelector } from 'customHooks/hooks';
import DeliveryDetails from '@/components/cart/subcomponents/deliveryDetails/main';
import CartDetails from '@/components/cart/subcomponents/cartTable/main';
import PageTitle from '@/components/global/components/pageTitle';

const CartComponent: NextComponentType = () => {
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  return (
    <>
      <div>
        <PageTitle title={'Your Shopping Cart'} />
      </div>
      <div>
        <CartDetails />
      </div>
      {cartData?.length > 0 && (
        <div className="flex justify-center sm:overflow-hidden sm:px-8 lg:px-8">
          <DeliveryDetails />
        </div>
      )}
    </>
  );
};

export default CartComponent;
