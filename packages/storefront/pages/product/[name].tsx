import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product } from '@bs-commerce/models';

import ProductDetailsComponent from '@/modules/productPage';

interface SingleProduct {
  product: Product;
}

const ProductDetails: NextPage<SingleProduct> = ({ product }) => {
  return (
    <>
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
