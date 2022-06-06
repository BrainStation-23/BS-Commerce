import CheckoutFooter from "../checkoutFooter";
import Payment from "./paymentForm";

const PaymentPage = () => {
  return (
    <>
      <div className="flex-initial lg:w-3/5 xl:w-3/5">
        <div className="mx-4 sm:mx-4 md:mx-20 lg:mx-20 xl:mx-20">
          <Payment />
          <hr className="mt-2"/>
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
