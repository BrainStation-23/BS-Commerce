import ContactDetails from "@/components/checkout/paymentPage/subsections/contactDetails";
import PaymentDetails from "@/components/checkout/paymentPage/subsections/paymentDetails";

interface Props {
  setModal: Function
}

const Payment: React.FC<Props> = (props) => {
  const {setModal} = props;
  return (
    <>
      <ContactDetails setModal={setModal} />
      <PaymentDetails  setModal={setModal} />
    </>
  );
};

export default Payment;
