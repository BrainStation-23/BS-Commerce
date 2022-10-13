import React, { FC, useState, useEffect } from 'react';

import { userAPI } from 'APIs';
import { IProductSearchSchema } from '@bs-commerce/models';
import Product from '@/modules/search/product';

const SearchItem: FC<{
  searchText: string;
  setTotalProducts: Function;
  currentPage: number;
  limit: number;
}> = ({ searchText, setTotalProducts, currentPage, limit }) => {
  const [products, setProducts] = useState<IProductSearchSchema[]>([]);
  const [stext, setStext] = useState('');
  const [sCurrentPage, setCurrentPage] = useState(1);
  const [sLimit, setLimit] = useState(limit);

  const getSearchedProducts = async () => {
    if (searchText) {
      const res = await userAPI.searchProducts(searchText, currentPage, limit);
      setProducts(res?.products!);
      setTotalProducts(res?.totalItemsFound);
    } else setProducts([]);
  };

  useEffect(() => {
    if (stext != searchText) {
      getSearchedProducts();
      setStext(searchText);
    }
  }, [searchText]);
  useEffect(() => {
    if (sCurrentPage != currentPage) {
      getSearchedProducts();
      setCurrentPage(currentPage);
    }
  }, [currentPage, limit]);
  return (
    <>
      {searchText.length > 0 &&
        products &&
        products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            imgHeight={177}
            imgWeight={177}
          />
        ))}
    </>
  );
};

export default SearchItem;
