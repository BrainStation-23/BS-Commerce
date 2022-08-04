import { useEffect } from 'react';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCategorizedProduct } from 'toolkit/productsSlice';
import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product } from 'models';

import CategoryPageComponent from '@/components/cateoryProducts';

// var cookie = require('cookie');

interface SingleProduct {
  products: Product[];
  name: string;
}

const CategoryProductsPage: NextPage<SingleProduct> = ({ products, name }) => {
  const dispatch = useAppDispatch();

  const handleCartItemDelete = async () => {
    dispatch(storeCategorizedProduct(products));
  };
  useEffect(() => {
    handleCartItemDelete();
  });
  return <CategoryPageComponent categoryName={name} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryId = context.query.categoryId;
  const name = context?.query?.name;
  const res = await userAPI.getPublicProductByCategoryId(categoryId as string);
  var products = res;
  return {
    props: {
      products,
      name: name,
    },
  };
};

export default CategoryProductsPage;
