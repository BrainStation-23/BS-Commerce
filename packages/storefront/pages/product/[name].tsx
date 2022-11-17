import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product } from '@bs-commerce/models';

import ProductDetailsComponent from '@/modules/productPage';
import Head from 'next/head';

interface SingleProduct {
  product: Product;
}

const ProductDetails: NextPage<SingleProduct> = ({ product }) => {
  const tags = product.tags?.join(', ');

  return (
    <>
      <Head>
        <meta name="item" content={product.info.name} />
        <meta name="tags" content={tags} />
        <meta name="description" content={product.info.shortDescription} />
      </Head>
      <ProductDetailsComponent product={product}></ProductDetailsComponent>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  //const pID = context.query.id as string;
  //const res = await userAPI.getPublicProductsById(pID);

  const pUniqueName = context?.params?.name! as string;
  const res = await userAPI.getPublicProductByUniqueName(pUniqueName);

  return {
    props: {
      product: res,
    },
  };
};

export default ProductDetails;
