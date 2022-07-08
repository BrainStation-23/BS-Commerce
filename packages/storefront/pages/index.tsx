import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { CustomerProduct, Category } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeFeaturedProducts, storeProducts } from 'toolkit/ProductsSlice';
import { storeCategory } from 'toolkit/categorySlice';

import HomeComponent from '@/components/home';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  category: Category[];
}

const Home: NextPage<Props> = ({ products, featuredProducts, category }: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeCategory(category));
  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // let token = cookie?.parse(context.req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const category = await userAPI.getCategoryList();
  // JSON.parse(JSON.stringify(category));
  console.log(category);
  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      category: category,
    },
  };
};

export default Home;
