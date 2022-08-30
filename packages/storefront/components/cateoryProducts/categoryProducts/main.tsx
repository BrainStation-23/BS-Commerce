import { FC } from 'react';
import CategoryProducts from '@/components/cateoryProducts/categoryProducts/categoryProducts';

const CategoryProductSegment: FC = () => {
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
