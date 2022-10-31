import type { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import DealsFilter from '@/modules/deals/components/dealsFilter';
import DealProductSegment from '@/modules/deals/components/dealProducts';
import ProductSort from '@/modules/deals/components/productSort';

const DealsComponent: NextComponentType = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <Breadcrumb
        title={'Deals'}
        pathArray={[`${t('common:home')}`, `${'Deals'} `]}
        linkArray={['/', '/']}
      />
      <div className="grid grid-cols-1 px-4 lg:grid-cols-5 lg:px-24 xl:grid-cols-5 xl:px-60">
        <div>
          <DealsFilter />
        </div>
        <div className="col-span-4 grid">
          <div className="py-14 px-4 md:px-12 lg:px-12 xl:px-14">
            <ProductSort />
          </div>
          <DealProductSegment />
        </div>
      </div>
    </div>
  );
};

export default DealsComponent;
