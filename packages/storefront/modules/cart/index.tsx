import type { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useAppSelector } from 'store/hooks/index';
import DeliveryDetails from '@/modules/cart/components/deliveryDetails';
import CartDetails from '@/modules/cart/components/cartProducts';
import PageTitle from '@/modules/global/components/pageTitle';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';

const CartComponent: NextComponentType = () => {
  const { t } = useTranslation();
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  return (
    <>
      <Breadcrumb
        title={t('cart:Your_Shopping_Cart')}
        pathArray={[`${t('common:home')}`, `${t('cart:Your_Shopping_Cart')} `]}
        linkArray={['/', '/']}
      />
      <CartDetails />
      {cartData?.length > 0 && (
        <div className="flex justify-center sm:overflow-hidden sm:px-8 lg:px-8">
          <DeliveryDetails />
        </div>
      )}
    </>
  );
};

export default CartComponent;
