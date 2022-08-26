import React, { FC } from 'react';

import { useAppSelector } from 'customHooks/hooks';
import Product from '@/components/search/product';

const SearchItem: FC<{ searchText: string }> = ({ searchText }) => {
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );

  return (
    <>
      {products.map((product, index) => {
        return product.info.name
          .toLowerCase()
          .match(searchText.toLowerCase()) || searchText === '' ? (
          <Product
            key={index}
            product={product}
            imgHeight={177}
            imgWeight={177}
          />
        ) : (
          ''
        );
      })}
    </>
  );
};

export default SearchItem;
