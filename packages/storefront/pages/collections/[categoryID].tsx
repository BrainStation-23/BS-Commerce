import { useEffect, useState } from 'react';
import { useAppDispatch } from 'customHooks/hooks';
import { storeBrands, storeCategorizedProduct } from 'toolkit/productsSlice';
import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product } from 'models';

import CategoryPageComponent from '@/components/cateoryProducts';
import { Brand } from 'models';

// var cookie = require('cookie');

interface SingleProduct {
  products: Product[];
  name: string;
  brands: Brand[];
}
if (typeof window !== 'undefined')
  var sortOption = document.getElementById('selectSortOptions');

const CategoryProductsPage: NextPage<SingleProduct> = ({
  products,
  name,
  brands,
}) => {
  // const [sortOption, setSortOption] = useState('asc');
  const dispatch = useAppDispatch();

  const setCategorizedProduct = async () => {
    dispatch(storeCategorizedProduct(products));
  };
  const setBrands = async () => {
    console.log(brands);

    dispatch(storeBrands(brands));
  };
  useEffect(() => {
    setCategorizedProduct();
    setBrands();
  });
  return <CategoryPageComponent categoryName={name} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryId = context.query.categoryId;
  const name = context?.query?.name;
  const orderBy = context?.query?.orderBy;
  const minPrice = context?.query?.minPrice;
  const maxPrice = context?.query?.maxPrice;
  const brand = context?.query?.brand;
  // const sortOption = document.getElementById("selectSortOptions");
  console.log('XXXXXXXXX', orderBy);
  console.log('XXXXXXXXX', brand);

  const res = await userAPI.getPublicProductByCategoryId(
    categoryId as string,
    orderBy as string,
    parseFloat(minPrice as string) as number,
    parseFloat(maxPrice as string) as number,
    brand as string
  );
  // console.log('XXXXXXXXX', res?.data?.products);

  var products = res?.data?.products;

  const res2 = await userAPI.getBrands();

  // console.log(res2.data);
  console.log(res?.data?.brands);

  return {
    props: {
      products,
      brands: res?.data?.brands,
      name: name,
    },
  };
};

export default CategoryProductsPage;
