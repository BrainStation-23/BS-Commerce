import type { NextComponentType } from 'next';

import CategoryFilter from '@/components/cateoryProducts/filter/main';
import PageTitle from '@/components/global/components/pageTitle';
import CategoryProductSegment from '@/components/cateoryProducts/categoryProducts/main';
import ProductSort from '@/components/cateoryProducts/sort/index';
import { FC } from 'react';

interface props {
  categoryName: string;
}

const CategoryPageComponent: FC<props> = (props: props) => {
  const { categoryName } = props;
  return (
    <div className="mt-20">
      <PageTitle title={categoryName} />
      <div className="grid grid-cols-1 px-4 lg:grid-cols-5 lg:px-24 xl:grid-cols-5 xl:px-60">
        <div>
          <CategoryFilter />
        </div>
        <div className="col-span-4 grid">
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
