import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import {
  CustomerProduct,
  Wishlist,
  NestedCategoryList,
} from '@bs-commerce/models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCategory } from 'toolkit/categorySlice';
import {
  storeFeaturedProducts,
  storeProducts,
  storeWishlist,
} from 'toolkit/productsSlice';

import HomeComponent from '@/components/home';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  categories: NestedCategoryList[];
  wishlistedProducts: Wishlist;
}

const Home: NextPage<Props> = ({
  products,
  featuredProducts,
  categories,
  wishlistedProducts,
}: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeCategory(categories));
  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));
  dispatch(storeWishlist(wishlistedProducts));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const reqCookie = context.req.headers.cookie;
  const token = reqCookie === undefined ? undefined : cookie.parse(reqCookie);
  const allProducts = await userAPI.getPublicProducts();
  
  const featuredProducts = await userAPI.getFeaturedProducts();
  const responseCategory = await userAPI.getCategoryList();
  // console.log(responseCategory?.data);

  // JSON.parse(JSON.stringify(category));
  let wishlistedProducts;
  if (reqCookie) {
    wishlistedProducts = await userAPI.getCustomerWishlist(token?.token);
  } else {
    wishlistedProducts = [];
  }

  return {
    props: {
      products: allProducts?.data?.products,
      featuredProducts: featuredProducts,
      categories: responseCategory?.data?.categories,
      wishlistedProducts: wishlistedProducts,
    },
  };
};

export default Home;
