// Swiper.js doesn't support loop with multiple rows.
// so to achive loop with multiple rows ,
// multiple products were grouped here as a single Component.
import { CustomerProduct } from '@bs-commerce/models';

import VerticalProduct from '@/modules/global/components/product/verticalProduct';
import { Component } from 'react';

const ProductRow: React.FC<{ products: CustomerProduct[] }> = ({
  products,
}) => {
  return (
    <>
      <div className="grid grid-rows-2">
        {products[0] ? (
          <div className="float-left">
            <VerticalProduct product={products[0]} />
          </div>
        ) : (
          ''
        )}
        {products[1] ? (
          <div className="float-left">
            <VerticalProduct product={products[1]} />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ProductRow;
