import { useState } from 'react';
import { NextComponentType } from 'next';

import CheckoutInformationComponent from '@/modules/checkout/components/informationPage/information';
import CheckoutPaymentComponent from '@/modules/checkout/components/paymentPage/payment';
import ShippingPage from '@/modules/checkout/components/shippingPage';
import withAuth from '@/modules/auth/withAuth';

const CheckoutComponent: NextComponentType = () => {
  const [modal, setModal] = useState({
    info: true,
    ship: false,
    pay: false,
  });

  return (
    <>
      {modal.info ? <CheckoutInformationComponent setModal={setModal} /> : ''}
      {modal.ship ? <ShippingPage setModal={setModal} /> : ''}
      {modal.pay ? <CheckoutPaymentComponent setModal={setModal} /> : ''}
    </>
  );
};

export default withAuth(CheckoutComponent);
