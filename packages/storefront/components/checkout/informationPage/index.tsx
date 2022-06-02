import CheckoutFooter from "../checkoutFooter";
import Information from "./information";

const InformationPage = () => {
  return (
    <>
      <div className="flex-initial lg:w-3/5">
        <div className="lg:divide-y-2 sm:mx-4 md:mx-20 lg:mx-20">
          <Information />
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default InformationPage;
