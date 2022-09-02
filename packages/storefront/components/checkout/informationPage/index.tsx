import CheckoutFooter from "../checkoutFooter";
import Information from "./informationForm";

const InformationPage = (props: any) => {
  const { setModal } = props;
  return (
    <>
      <div className="flex-initial lg:w-3/5 xl:w-3/5">
        <div className="divide-y-2 mt-5 mx-4 sm:mx-4 md:mx-28 lg:mx-28 xl:mx-28">
          <Information setModal={setModal} />
          <hr className="mt-5"/>
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default InformationPage;
