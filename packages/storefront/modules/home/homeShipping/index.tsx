import { NextComponentType } from 'next';

import Container from '@/modules/global/components/container';
import { ImageCom } from '@/modules/global/components/image';
import useTranslation from 'next-translate/useTranslation';
import StrokePrimaryDarkPrimary from '@/modules/common/icons/handlers/strokePrimaryDarkPrimary';
import TruckIcon from '@/modules/common/icons/truckIcon';
import LifebuoyIcon from '@/modules/common/icons/lifebuoyIconIcon';
import ReceiptRefundIcon from '@/modules/common/icons/receiptRefundIcon';
import SecurePaymentIcon from '@/modules/common/icons/securePaymentIcon';

const HomeShipping: NextComponentType = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container className="container">
        <div className="flex flex-wrap py-16">
          <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <StrokePrimaryDarkPrimary icon={<TruckIcon />} />
            <div>
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:free_shipping.title')}
              </h3>
              <p>{t('home:free_shipping.body')}</p>
            </div>
          </div>
          <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <StrokePrimaryDarkPrimary icon={<LifebuoyIcon />} />
            <div>
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:support.title')}
              </h3>
              <p>{t('home:support.body')}</p>
            </div>
          </div>
          <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <StrokePrimaryDarkPrimary icon={<ReceiptRefundIcon />} />
            <div>
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:return.title')}
              </h3>
              <p>{t('home:return.body')}</p>
            </div>
          </div>
          <div className="flex px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <StrokePrimaryDarkPrimary icon={<SecurePaymentIcon />} />
            <div>
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:payment_secure.title')}
              </h3>
              <p>{t('home:payment_secure.body')}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeShipping;
