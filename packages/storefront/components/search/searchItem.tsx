import React, { FC, useState } from 'react';

import Product from '@/components/search/product';
import { useEffect } from 'react';
import { userAPI } from 'APIs';
import { IProductSearchSchema } from 'models';

const SearchItem: FC<{ searchText: string; setTotalProducts: Function }> = ({
  searchText,
  setTotalProducts,
}) => {
  const [products, setProducts] = useState<IProductSearchSchema[]>([]);
  const [stext, setStext] = useState('');

  const getSearchedProducts = async () => {
    if (searchText) {
      const res = await userAPI.searchProducts(searchText, 1, 1);
      setProducts(res?.values);
      setTotalProducts(res?.resultsCount);
    } else setProducts([]);
  };

  useEffect(() => {
    if (stext != searchText) {
      getSearchedProducts();
      setStext(searchText);
    }
  }, [searchText]);
  return (
    <>
      {searchText.length > 0 &&
        products.map((product) => (
          <Product
            key={product.info.productId}
            product={product}
            imgHeight={177}
            imgWeight={177}
          />
        ))}
    </>
  );
};

export default SearchItem;
