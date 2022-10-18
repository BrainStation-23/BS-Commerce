import React from 'react';
import Path from '@/modules/global/components/path';
import OrderList from '@/modules/checkout/components/orderList';
import Shipping from '@/modules/checkout/components/shippingPage/shipping';

const path = {
  cart: false,
  info: false,
  shipping: true,
  payment: false,
};

interface Props {
  setModal: Function;
}

const ShippingPage: React.FC<Props> = (props: Props) => {
  const { setModal } = props;

  return (
    <div>
      <div className="row">
        <div className="hidden sm:hidden md:hidden lg:mx-28 lg:mt-10 lg:block xl:mx-28 xl:mt-10 xl:block">
          <Path
            cart={path.cart}
            info={path.info}
            shipping={path.shipping}
            payment={path.payment}
            setModal={setModal}
          />
        </div>
        <div className="flex flex-col-reverse flex-wrap justify-between divide-x-0 sm:flex-col-reverse sm:divide-x-0 md:flex-col-reverse md:divide-x-0 lg:flex-row lg:divide-x-2 xl:flex-row xl:divide-x-2">
          <Shipping setModal={setModal} />
          <div className="mx-5 block sm:mx-5 sm:block md:mx-28 md:block lg:hidden xl:hidden">
            <Path
              cart={path.cart}
              info={path.info}
              shipping={path.shipping}
              payment={path.payment}
              setModal={setModal}
            />
          </div>
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
