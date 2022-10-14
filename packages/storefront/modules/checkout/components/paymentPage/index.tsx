import CheckoutFooter from '@/modules/checkout/components/checkoutFooter';
import Payment from '@/modules/checkout/components/paymentPage/paymentForm';
interface Props {
  setModal: Function;
}

const PaymentPage: React.FC<Props> = (props) => {
  const { setModal } = props;
  return (
    <>
      <div className="flex-initial lg:w-3/5 xl:w-3/5">
        <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28 xl:mx-28">
          <Payment setModal={setModal} />
          <hr className="mt-2" />
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
