import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { Cart, CustomerProduct } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeAllCartItems } from 'toolkit/cartSlice';
import { storeFeaturedProducts, storeProducts } from 'toolkit/ProductsSlice';

import HomeComponent from '@/components/home';
import { renderToStringWithData } from '@apollo/client/react/ssr';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  cartData: Cart;
}

const Home: NextPage<Props> = ({
  products,
  featuredProducts,
  cartData,
}: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeAllCartItems(cartData.items!));
  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let token = cookie?.parse(context.req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const cartData = await userAPI.getCart(token.token);
  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      cartData: cartData || [],
    },
  };
};

export default Home;
