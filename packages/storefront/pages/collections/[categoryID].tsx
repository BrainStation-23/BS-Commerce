import { useEffect } from 'react';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCategorizedProduct } from 'toolkit/ProductsSlice';
import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product } from 'models';

import CategoryPageComponent from '@/components/cateoryProducts';

var cookie = require('cookie');

interface SingleProduct {
  products: Product[];
}

const CategoryProductsPage: NextPage<SingleProduct> = ({ products }) => {
  const dispatch = useAppDispatch();
  const handleCartItemDelete = async () => {
    dispatch(storeCategorizedProduct(products));
  };
  useEffect(() => {
    handleCartItemDelete();
  });
  return (
    <>
      {console.log(products)}
      <CategoryPageComponent />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);
  const cID = context?.query?.id;
  const res = await userAPI.getPublicProductByCategoryId(cID, token);
  console.log(res);

  return {
    props: {
      products: res,
    },
  };
};

export default CategoryProductsPage;
