import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { CustomerProduct } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeFeaturedProducts, storeProducts } from 'toolkit/ProductsSlice';

import HomeComponent from '@/components/home';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
}

const Home: NextPage<Props> = ({ products, featuredProducts }: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // let token = cookie?.parse(context.req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
    },
  };
};

export default Home;
