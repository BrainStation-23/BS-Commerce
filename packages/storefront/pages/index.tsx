import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { CustomerProduct, Wishlist } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeFeaturedProducts, storeProducts, storeWishlist } from 'toolkit/productsSlice';

import HomeComponent from '@/components/home';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  wishlistedProducts: Wishlist
}

const Home: NextPage<Props> = ({ products, featuredProducts, wishlistedProducts }: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));
  dispatch(storeWishlist(wishlistedProducts));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const wishlistedProducts = await userAPI.getCustomerWishlist(token.token);

  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      wishlistedProducts: wishlistedProducts,
    },
  };
};

export default Home;
