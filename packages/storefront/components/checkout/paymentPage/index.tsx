import CheckoutFooter from "../checkoutFooter";
import Payment from "./paymentForm";

const PaymentPage = (props: any) => {
  const {setModal} = props;
  return (
    <>
      <div className="flex-initial lg:w-3/5 xl:w-3/5">
        <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28 xl:mx-28">
          <Payment setModal={setModal} />
          <hr className="mt-2"/>
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
