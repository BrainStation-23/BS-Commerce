import type { NextComponentType } from 'next';

import { useAppSelector } from 'customHooks/hooks';
import CategoryProductCard from '@/components/cateoryProducts/categoryProducts/categoryProductCard/categoryProductCard';

const CategoryProductSegment: NextComponentType = () => {
  const products = useAppSelector(
    (state) => state.persistedReducer.product.categorizedProduct
  );

  return (
    <>
      <div>
        {products && products[0] ? (
          <div className="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-3 xl:gap-3">
            {products.map((product, index) => (
              <CategoryProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="m-auto text-center">
            There is no product in this category
          </p>
        )}
      </div>
    </>
  );
};

export default CategoryProductSegment;
