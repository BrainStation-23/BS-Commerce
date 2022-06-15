import CheckoutInformationComponent from "@/components/checkout/informationPage/information";
import CheckoutPaymentComponent from "@/components/checkout/paymentPage/payment";
import ShippingPage from "@/components/checkout/shippingPage";
import { useRouter } from "next/router";
import { useState } from "react";

const CheckoutPage = () => {
  const router = useRouter();
  const [modal, setModal] = useState({
    info: true,
    ship: false,
    pay: false,
  });

  return (
    <>
      {modal.info ? <CheckoutInformationComponent setModal={setModal} /> : "" }
      {modal.ship ? <ShippingPage setModal={setModal} /> : "" }
      {modal.pay ? <CheckoutPaymentComponent setModal={setModal} /> : ""}
      {/* {router.query.step === "information" && <CheckoutInformationComponent />}
      {router.query.step === "shipping" && <ShippingPage />}
      {router.query.step === "payment" && <CheckoutPaymentComponent />} */}
    </>
  );
};

export default CheckoutPage;

