import { useAppSelector } from 'customHooks/hooks';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  setModal: Function;
}

const ContactDetails: React.FC<Props> = (props) => {
  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );
  const { t } = useTranslation();

  const { setModal } = props;
  return (
    <>
      <div className="flex flex-col flex-wrap rounded-lg border px-5">
        <div className="my-3 flex flex-wrap justify-between text-sm lg:items-center xl:items-center">
          <div className="flex flex-col flex-wrap gap-0 sm:flex-col sm:gap-0 md:flex-row md:gap-6 lg:flex-row lg:gap-6 xl:flex-row xl:gap-6">
            <p className="text-gray-500">{t('checkout:contact')}</p>
            <p>{shippingInfo?.phoneNumber}</p>
          </div>
          <button
            onClick={() => {
              const obj = {
                info: true,
                ship: false,
                pay: false,
              };
              setModal(obj);
            }}
            className="ml-10 text-sm"
            style={{ border: 'none' }}
          >
            {t('checkout:change')}
          </button>
        </div>
        <hr />
        <div className="my-3 flex flex-wrap justify-between text-sm lg:items-center xl:items-center">
          <div className="flex flex-col flex-wrap gap-0 sm:flex-col sm:gap-0 md:flex-row md:gap-6 lg:flex-row lg:gap-6 xl:flex-row xl:gap-6">
            <p className="text-gray-500">{t('checkout:ship_to')}</p>
            <p>{shippingInfo?.addressLine1}</p>
          </div>
          <button
            onClick={() => {
              const obj = {
                info: true,
                ship: false,
                pay: false,
              };
              setModal(obj);
            }}
            className="ml-10 text-sm"
            style={{ border: 'none' }}
          >
            {t('checkout:change')}
          </button>
        </div>
        <hr />
        <div className="my-3 flex flex-col flex-wrap gap-0 text-sm sm:flex-col sm:gap-0 md:flex-row md:gap-6 lg:flex-row lg:gap-6 xl:flex-row xl:gap-6">
          <p className="text-gray-500">{t('checkout:method')}</p>
          <p>{t('checkout:standard')} . {t('checkout:free')}</p>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
