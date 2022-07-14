import type { NextComponentType } from "next";

import CategoryProducts from "@/components/cateoryProducts/categoryProducts/categoryProducts";

const CategoryProductSegment: NextComponentType = () => {
  return (
    <>
      <div>
        <div className="px-6">
          <CategoryProducts />
        </div>
      </div>
    </>
  );
};

export default CategoryProductSegment;
