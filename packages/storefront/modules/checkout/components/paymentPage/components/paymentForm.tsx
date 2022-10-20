import CheckoutFooter from '@/modules/checkout/components/checkoutFooter';
import ContactDetails from '@/modules/checkout/components/paymentPage/components/contactDetails';
import PaymentDetails from '@/modules/checkout/components/paymentPage/components/paymentDetails';
import PromotionalCodeField from '@/modules/checkout/components/paymentPage/components/promotionalCodeField';
import useTranslation from 'next-translate/useTranslation';
interface Props {
  setModal: Function;
}

const PaymentForm: React.FC<Props> = (props) => {
  const { setModal } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="flex-initial lg:w-3/5">
        <div className="mx-4 sm:mx-4 md:mx-28">
          <ContactDetails setModal={setModal} />
          <br />
          <PromotionalCodeField placeholder={t('checkout:promo_code_label')} />
          <br />
          <PaymentDetails />
          <hr className="mt-2" />
          <CheckoutFooter />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
