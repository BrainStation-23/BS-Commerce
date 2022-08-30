import CategoryFilter from '@/components/cateoryProducts/filter/main';
import PageTitle from '@/components/global/components/pageTitle';
import CategoryProductSegment from '@/components/cateoryProducts/categoryProducts/main';
import ProductSort from '@/components/cateoryProducts/sort/index';
import { FC } from 'react';
import CategoryBreadcrumb from './categoryBreadcrumb';

interface CategoryNameIdProp {
  name: string;
  id: string;
}

interface props {
  categoryName: string;
  categoryNameAndId: CategoryNameIdProp[];
}

const CategoryPageComponent: FC<props> = (props: props) => {
  const { categoryName, categoryNameAndId } = props;

  //console.log(categoryNameAndId);

  return (
    <div className="">
      {/* <PageTitle title={categoryName} /> */}

      <CategoryBreadcrumb
        title={categoryName}
        categoryNameAndId={categoryNameAndId}
      />

      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
          <div>
            <CategoryFilter />
          </div>

          <div className="col-span-4 flex-col">
            <div className="mt-16 mb-8 lg:px-12 xl:px-14">
              <ProductSort />
            </div>
            <div>
              <CategoryProductSegment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
