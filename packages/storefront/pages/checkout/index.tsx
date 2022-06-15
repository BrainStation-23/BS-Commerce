import CheckoutInformationComponent from "@/components/checkout/informationPage/information";
import CheckoutPaymentComponent from "@/components/checkout/paymentPage/payment";
import ShippingPage from "@/components/checkout/shippingPage";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  
  return (
    <>
      {router.query.step === "information" && <CheckoutInformationComponent />}
      {router.query.step === "shipping" && <ShippingPage />}
      {router.query.step === "payment" && <CheckoutPaymentComponent />}
    </>
  );
};

export default CheckoutPage;
