import ContactDetails from '@/components/checkout/paymentPage/subsections/contactDetails';
import PaymentDetails from '@/components/checkout/paymentPage/subsections/paymentDetails';
import PromotionalCodeField from '@/components/global/components/promotionalCodeField';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  setModal: Function;
}

const Payment: React.FC<Props> = (props) => {
  const { setModal } = props;
  const { t } = useTranslation();

  return (
    <>
      <ContactDetails setModal={setModal} />
      <br />
      <PromotionalCodeField placeholder={t('checkout:promo_code_label')} />
      <br />
      <PaymentDetails />
    </>
  );
};

export default Payment;
