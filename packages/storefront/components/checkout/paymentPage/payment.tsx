import PaymentPage from ".";
import OrderList from "../orderList";

const CheckoutPaymentComponent = (props: any) => {
  return (
    <>
       <div className="row">
        <div className="divide-x-0 sm:divide-x-0 md:divide-x-0 lg:divide-x-2 xl:divide-x-2 flex flex-wrap flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-between">
          <PaymentPage/>
          <OrderList />
        </div>
      </div>
    </>
  );
};

export default CheckoutPaymentComponent;
