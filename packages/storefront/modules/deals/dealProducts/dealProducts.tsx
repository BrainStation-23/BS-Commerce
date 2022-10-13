import type { NextComponentType } from 'next';

import { useAppSelector } from 'store/hooks/index';
import DealProductCard from '@/modules/deals/dealProducts/dealProductCard/dealProductCard';

const DealProductSegment: NextComponentType = () => {
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  return (
    <>
      <div>
        <div className="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-3 xl:gap-3">
          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <DealProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default DealProductSegment;
