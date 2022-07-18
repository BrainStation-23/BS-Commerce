import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { CustomerProduct, Category, Wishlist } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCategory } from 'toolkit/categorySlice';
import {
  storeFeaturedProducts,
  storeProducts,
  storeWishlist,
} from 'toolkit/ProductsSlice';

import HomeComponent from '@/components/home';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  category: Category[];
  wishlistedProducts: Wishlist;
}

const Home: NextPage<Props> = ({
  products,
  featuredProducts,
  category,
  wishlistedProducts,
}: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeCategory(category));
  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));
  dispatch(storeWishlist(wishlistedProducts));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const category = await userAPI.getCategoryList();
  // JSON.parse(JSON.stringify(category));
  const wishlistedProducts = await userAPI.getCustomerWishlist(token.token);

  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      category: category,
      wishlistedProducts: wishlistedProducts,
    },
  };
};

export default Home;
