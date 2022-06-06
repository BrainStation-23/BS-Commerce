import CheckoutFooter from "../checkoutFooter";
import Information from "./informationForm";

const InformationPage = () => {
  return (
    <>
      <div className="flex-initial lg:w-3/5 xl:w-3/5">
        <div className="divide-y-2 mx-4 sm:mx-4 md:mx-20 lg:mx-20 xl:mx-20">
          <Information />
          <hr className="mt-5"/>
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default InformationPage;
