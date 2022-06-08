import Link from "next/link";
import ContactDetails from "./subsections/contactDetails";
import PaymentDetails from "./subsections/paymentDetails";

const Payment = () => {
  return (
    <>
      <ContactDetails />
      <PaymentDetails />
    </>
  );
};

export default Payment;
