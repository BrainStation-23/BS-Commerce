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
    <div className="">
      <PageTitle title={categoryName} />

      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
          <div>
            <CategoryFilter />
          </div>

          <div className="col-span-4 grid">
            <div className="mt-16 mb-8 px-4 md:px-12 lg:px-12 xl:px-14">
              <ProductSort />
            </div>

            <CategoryProductSegment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
