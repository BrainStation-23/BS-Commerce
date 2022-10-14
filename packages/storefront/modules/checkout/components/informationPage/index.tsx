import CheckoutFooter from '../checkoutFooter';
import Information from './informationForm';

interface Props {
  setModal: Function;
}

const InformationPage: React.FC<Props> = ({ setModal }: Props) => {
  // const { setModal } = props;
  return (
    <>
      <div className="flex-initial lg:w-3/5 xl:w-3/5">
        <div className="mx-4 mt-5 divide-y-2 sm:mx-4 md:mx-28 lg:mx-28 xl:mx-28">
          <Information setModal={setModal} />
          <hr className="mt-5" />
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default InformationPage;
