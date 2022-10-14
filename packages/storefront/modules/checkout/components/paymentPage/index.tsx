import Path from '@/modules/global/components/path';
import PaymentForm from '@/modules/checkout/components/paymentPage/paymentForm';
import OrderList from '@/modules/checkout/components/orderList';
const path = {
  cart: false,
  info: false,
  shipping: false,
  payment: true,
};

interface Props {
  setModal: Function;
}

const CheckoutPaymentComponent: React.FC<Props> = (props) => {
  const { setModal } = props;
  return (
    <>
      <div className="row">
        <div className="hidden sm:hidden md:hidden lg:mx-28 lg:mt-10 lg:mb-5 lg:block xl:mx-28 xl:mt-10 xl:mb-5 xl:block">
          <Path
            cart={path.cart}
            info={path.info}
            shipping={path.shipping}
            payment={path.payment}
            setModal={setModal}
          />
        </div>
        <div className="flex flex-col-reverse flex-wrap justify-between divide-x-0 sm:flex-col-reverse sm:divide-x-0 md:flex-col-reverse md:divide-x-0 lg:flex-row lg:divide-x-2 xl:flex-row xl:divide-x-2">
          <PaymentForm setModal={setModal} />
          <div className="mx-5 mb-5 block sm:mx-5 sm:block md:mx-28 md:block lg:hidden xl:hidden">
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
    </>
  );
};

export default CheckoutPaymentComponent;
