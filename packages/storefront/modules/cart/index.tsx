import type { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useAppSelector } from 'store/hooks/index';
import DeliveryDetails from '@/modules/cart/subcomponents/deliveryDetails/main';
import CartDetails from '@/modules/cart/subcomponents/cartTable/main';
import PageTitle from '@/modules/global/components/pageTitle';

const CartComponent: NextComponentType = () => {
  const { t } = useTranslation();
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  return (
    <>
      <div>
        <PageTitle title={t('cart:Your_Shopping_Cart')} />
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
