import type { NextComponentType } from "next";

import DealProducts from "@/components/deals/dealProducts/dealProducts";

const DealProductSegment: NextComponentType = () => {
  return (
    <>
      <div>
        <div className="px-6">
          <DealProducts />
        </div>
      </div>
    </>
  );
};

export default DealProductSegment;
