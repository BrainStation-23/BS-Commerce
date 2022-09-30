import ContactDetails from '@/components/checkout/paymentPage/subsections/contactDetails';
import PaymentDetails from '@/components/checkout/paymentPage/subsections/paymentDetails';
import PromotionalCodeField from '@/components/global/components/promotionalCodeField';

interface Props {
  setModal: Function;
}

const Payment: React.FC<Props> = (props) => {
  const { setModal } = props;
  return (
    <>
      <ContactDetails setModal={setModal} />
      <br />
      <PromotionalCodeField placeholder="Enter Promotional Code" />
      <br />
      <PaymentDetails />
    </>
  );
};

export default Payment;
