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
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3 mt-1">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                // stroke="#40a944"
                strokeWidth="1"
                viewBox="0 0 32 32"
                className="h-10 w-10"
              >
                <path d="M11.403 27.46a.502.502 0 0 1-.422-.232l-2.415-3.795-3.795-2.415a.502.502 0 0 1-.085-.775L6.1 18.828a.496.496 0 0 1 .533-.113l2.62 1.008 6.402-7.396-8.067-5.459a.5.5 0 0 1-.073-.767l1.414-1.414a.505.505 0 0 1 .55-.107l9.397 4.027.81-.936A7.495 7.495 0 0 1 25.339 5.1c.887 0 1.56.673 1.56 1.5 0 2.228-.937 4.288-2.57 5.712l-.937.811 4.027 9.397a.503.503 0 0 1-.106.551l-1.414 1.414a.52.52 0 0 1-.401.145.505.505 0 0 1-.366-.218l-5.459-8.068-7.396 6.402 1.008 2.62a.5.5 0 0 1-.113.533l-1.415 1.414a.5.5 0 0 1-.354.147zm-5.569-6.95 3.363 2.14a.496.496 0 0 1 .153.153l2.14 3.363.745-.744-1.018-2.645a.5.5 0 0 1 .14-.558l8.087-7.001c.106-.094.251-.138.393-.118s.269.098.349.216l5.436 8.033.746-.746-4.038-9.422a.5.5 0 0 1 .133-.575l1.212-1.049a6.497 6.497 0 0 0 2.226-4.897c0-.335-.225-.56-.5-.56-1.938 0-3.724.812-4.958 2.227l-1.048 1.211a.498.498 0 0 1-.575.133L9.396 5.633l-.746.746 8.033 5.436a.499.499 0 0 1 .098.742L9.78 20.643a.501.501 0 0 1-.558.14l-2.645-1.018-.743.745z" />
              </svg> */}
              <StrokePrimaryDarkPrimary icon={<TruckIcon />} />
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:free_shipping.title')}
              </h3>
              <p>{t('home:free_shipping.body')}</p>
            </div>
          </div>
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3 mt-1">
              <StrokePrimaryDarkPrimary icon={<LifebuoyIcon />} />
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:support.title')}
              </h3>
              <p>{t('home:support.body')}</p>
            </div>
          </div>
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3 mt-1">
              <StrokePrimaryDarkPrimary icon={<ReceiptRefundIcon />} />
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">
                {t('home:return.title')}
              </h3>
              <p>{t('home:return.body')}</p>
            </div>
          </div>
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3 mt-1">
              <StrokePrimaryDarkPrimary icon={<SecurePaymentIcon />} />
            </div>
            <div className="">
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
