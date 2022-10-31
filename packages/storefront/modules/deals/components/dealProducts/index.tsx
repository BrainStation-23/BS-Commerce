import type { NextComponentType } from 'next';

import DealProducts from '@/modules/deals/components/dealProducts/components/dealProducts';

const DealProductSegment: NextComponentType = () => {
  return (
    <div className="px-6">
      <DealProducts />
    </div>
  );
};

export default DealProductSegment;
