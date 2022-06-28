import Link from "next/link";
import ContactDetails from "./subsections/contactDetails";
import PaymentDetails from "./subsections/paymentDetails";

const Payment = (props: any) => {
  const {setModal} = props;
  return (
    <>
      <ContactDetails setModal={setModal} />
      <PaymentDetails  setModal={setModal} />
    </>
  );
};

export default Payment;
