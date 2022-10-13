import { useState } from 'react';
import { NextComponentType } from 'next';
import { useAppSelector } from 'store/hooks/index';

import ChevronDown from '@/modules/global/iconsforCheckoutPage/chevron-down';
import ChevronUp from '@/modules/global/iconsforCheckoutPage/chevron-up';
import ShoppingCart from '@/modules/global/iconsforCheckoutPage/shopping-cart';
import OrderedProducts from '@/modules/checkout/orderList/orderDetail';
import useTranslation from 'next-translate/useTranslation';

const OrderList: NextComponentType = () => {
  const [dropdown, setDropdown] = useState(false);
  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );
  const { t } = useTranslation();

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);
  return (
    <>
      <div className="hidden flex-initial sm:hidden md:hidden lg:block lg:w-2/5 xl:block">
        <OrderedProducts />
      </div>

      <div className="my-7 flex flex-wrap justify-between border-gray-500 py-5 px-3 text-xs sm:block sm:px-10 md:block md:px-10 lg:hidden lg:px-5 xl:hidden xl:px-5">
        <div className="flex w-full flex-wrap justify-between sm:px-4 md:px-16">
          <div className="flex flex-wrap">
            <ShoppingCart />

            <button
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <div className="flex flex-wrap justify-between px-2">
                {dropdown === true ? (
                  <>
                    <p className="text-sm">
                      {t('checkout:hide_order_summary')}
                    </p>
                    <ChevronUp />
                  </>
                ) : (
                  <>
                    <p className="text-sm">
                      {t('checkout:show_order_summary')}
                    </p>
                    <ChevronDown />
                  </>
                )}
              </div>
            </button>
          </div>
          <p className="text-xl font-semibold">${totalCartPrice}</p>
        </div>

        {dropdown && (
          <div className="w-full md:px-14">
            <OrderedProducts />
          </div>
        )}
      </div>
    </>
  );
};

export default OrderList;
