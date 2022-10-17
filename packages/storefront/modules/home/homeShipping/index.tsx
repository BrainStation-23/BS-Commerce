import { NextComponentType } from 'next';

import TruckIcon from '@/modules/common/icons/truckIcon';
import useTranslation from 'next-translate/useTranslation';
import Container from '@/modules/global/components/container';
import LifebuoyIcon from '@/modules/common/icons/lifebuoyIconIcon';
import ReceiptRefundIcon from '@/modules/common/icons/receiptRefundIcon';
import SecurePaymentIcon from '@/modules/common/icons/securePaymentIcon';
import ShippingDetails from '@/modules/home/homeShipping/components/shippingDetails';
import StrokePrimaryDarkPrimary from '@/modules/common/icons/handlers/strokePrimaryDarkPrimary';

const HomeShipping: NextComponentType = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className="flex flex-wrap py-16">
        <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
          <StrokePrimaryDarkPrimary icon={<TruckIcon />} />
          <ShippingDetails
            title={t('home:free_shipping.title')}
            body={t('home:free_shipping.body')}
          />
        </div>
        <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
          <StrokePrimaryDarkPrimary icon={<LifebuoyIcon />} />
          <ShippingDetails
            title={t('home:support.title')}
            body={t('home:support.body')}
          />
        </div>
        <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
          <StrokePrimaryDarkPrimary icon={<ReceiptRefundIcon />} />
          <ShippingDetails
            title={t('home:return.title')}
            body={t('home:return.body')}
          />
        </div>
        <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
          <StrokePrimaryDarkPrimary icon={<SecurePaymentIcon />} />
          <ShippingDetails
            title={t('home:payment_secure.title')}
            body={t('home:payment_secure.body')}
          />
        </div>
      </Container>
    </>
  );
};

export default HomeShipping;
