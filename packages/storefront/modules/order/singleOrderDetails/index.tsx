import { FC, useState, useEffect } from 'react';
import { OrderByUserId } from '@bs-commerce/models';
import { useRouter } from 'next/router';
import withAuth from '@/modules/auth/withAuth';
import { useAppSelector } from 'store/hooks/index';
import { userAPI } from 'APIs';
import Link from 'next/link';
import ChevronLeft from './icons/chevronLeft';
import ChevronRight from './icons/chevronRight';
import Breadcrumb from '@/modules/global/breadcrumbs/breadcrumb';
import OrderSummary from './summary';
import ProductTable from './productTable/productTable';
import ReOrder from '../singleOrder/reOrder';
import { CheckCircleOutlineIcon } from '@/modules/global/layout/headerIcons';
import OrderStatus from './orderStatus';
import useTranslation from 'next-translate/useTranslation';

const SingleOrder: FC = () => {
  const router = useRouter();

  const [singleOrder, setSingleorder] = useState<OrderByUserId>();

  const id = router.query.id;

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );
  const { t } = useTranslation();
  const getSingleOrder = async () => {
    try {
      const singleOrderDetails = await userAPI.getOrderProduct(
        token,
        id as string
      );
      if (singleOrderDetails) setSingleorder(singleOrderDetails);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        title={t('order:order_details')}
        pathArray={[`${t('common:home')}`, `${t('order:order_details')}`]}
        linkArray={['/', '/']}
      />
      <div className="container mx-auto mt-5 px-4 dark:text-dark_text">
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              router.push('/order');
            }}
          >
            <ChevronLeft />
          </button>
          <p className="text-2xl font-semibold">{t('order:order_summary')}</p>
        </div>
        <div className="mt-5 flex items-center gap-x-2">
          <Link href="/order" passHref>
            <p className="cursor-pointer text-sm text-[#7c827f]">
              {t('common:order')}
            </p>
          </Link>
          <ChevronRight />
          <p className="text-sm">{t('order:order_summary')}</p>
        </div>

        <OrderSummary singleOrder={singleOrder!} />
        <OrderStatus status={singleOrder?.orderStatus!} />
        <ProductTable productList={singleOrder?.products!} />
        <ReOrder singleOrder={singleOrder!} />
      </div>
    </>
  );
};

export default withAuth(SingleOrder);
