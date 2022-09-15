import { useEffect, useState } from 'react';
import { useAppDispatch } from 'customHooks/hooks';
import {
  storeBrands,
  storeCategorizedProduct,
  storeTotalNumberOfProducts,
} from 'toolkit/productsSlice';
import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product, Brand, CustomerProduct } from '@bs-commerce/models';

import CategoryPageComponent from '@/components/cateoryProducts';

interface CategoryNameIdProp {
  name: string;
  id: string;
}
interface SingleProduct {
  products: CustomerProduct[];
  name: string;
  brands: string[];
  categoryNameAndId: CategoryNameIdProp[];
  totalProducts: number;
}
if (typeof window !== 'undefined')
  var sortOption = document.getElementById('selectSortOptions');

const CategoryProductsPage: NextPage<SingleProduct> = ({
  products,
  name,
  brands,
  categoryNameAndId,
  totalProducts,
}) => {
  const dispatch = useAppDispatch();
  const setCategorizedProduct = async () => {
    dispatch(storeCategorizedProduct(products));
  };
  const setBrands = async () => {
    dispatch(storeBrands(brands));
  };
  const setTotalPoducts = async () => {
    dispatch(storeTotalNumberOfProducts(totalProducts));
  };
  useEffect(() => {
    setCategorizedProduct();
    setBrands();
    setTotalPoducts();
  });

  return (
    <CategoryPageComponent
      categoryName={name}
      categoryNameAndId={categoryNameAndId}
      products={products}
      totalProducts={totalProducts}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryId = context.query.categoryId;
  const name = context?.query?.name;
  const orderBy = context?.query?.orderBy;
  const minPrice = context?.query?.minPrice;
  const maxPrice = context?.query?.maxPrice;
  const brand = context?.query?.brand ? context?.query?.brand : '';
  const skip = context?.query?.skip ? context?.query?.skip : '';
  const limit = context?.query?.limit ? context?.query?.limit : '';
  const res = await userAPI.getPublicProductByCategoryId(
    categoryId as string,
    orderBy as string,
    parseFloat(minPrice as string) as number,
    parseFloat(maxPrice as string) as number,
    brand as string,
    parseInt(skip as string) as number,
    parseInt(limit as string) as number
  );
  let totalProducts;
  let products;
  if ('data' in res!) {
    products = res?.data?.products ? res?.data?.products : [];
    totalProducts = res?.data?.totalProducts ? res?.data?.totalProducts : 0;
  }
  // console.log(res2.data);
  // console.log(res?.data?.brands);

  // const categroyDetailsRes = await userAPI.getCategoryDetailsById(
  //   categoryId as string
  // );

  let categoryNameAndId: CategoryNameIdProp[] = [];

  // if ('data' in categroyDetailsRes!) {
  //   for (let i = 0; i < categroyDetailsRes?.data?.ancestors.length; i++) {
  //     const ancestorDetailsRes = await userAPI.getCategoryDetailsBySlug(
  //       categroyDetailsRes?.data?.ancestors[i].slug
  //     );
  //     if ('data' in ancestorDetailsRes!) {
  //       categoryNameAndId.push({
  //         name: ancestorDetailsRes?.data?.name,
  //         id: ancestorDetailsRes?.data?.id,
  //       });
  //     }
  //   }
  //   categoryNameAndId.push({
  //     name: name as string,
  //     id: '',
  //   });
  // }
  let brands;
  if ('data' in res!) brands = res?.data?.brands ? res?.data?.brands : [];
  return {
    props: {
      products,
      brands: brands,
      name: name,
      categoryNameAndId,
      totalProducts,
    },
  };
};

export default CategoryProductsPage;
