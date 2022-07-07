import type { NextComponentType } from "next";

import CategoryFilter from "@/components/cateoryProducts/filter/main";
import PageTitle from "@/components/global/components/pageTitle";
import CategoryProductSegment from "@/components/cateoryProducts/categoryProducts/main";
import ProductSort from "@/components/cateoryProducts/sort/index";

const CategoryPageComponent: NextComponentType = () => {
  return (
    <div className="mt-20">
      <PageTitle title={"Category Name"} />
      <div className="px-4 lg:px-24 xl:px-60 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div>
          <CategoryFilter />
        </div>
        <div className="grid col-span-4">
          <div className="py-14 px-4 md:px-12 lg:px-12 xl:px-14">
            <ProductSort />
          </div>
          <CategoryProductSegment />
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
