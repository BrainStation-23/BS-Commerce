import type { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { Wishlist } from '@bs-commerce/models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'store/hooks';
import { storeWishlist } from 'store/slices/productsSlice';

import WishlistComponent from '@/modules/wishlist';

interface Props {
  wishlistedProducts: Wishlist;
}

const Wishlist: NextPage<Props> = ({ wishlistedProducts }: Props) => {
  const dispatch = useAppDispatch();
  dispatch(storeWishlist(wishlistedProducts));

  return <WishlistComponent />;
};

export default Wishlist;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const reqCookie = context.req.headers.cookie;
  const token = reqCookie === undefined ? undefined : cookie.parse(reqCookie);
  let wishlistedProducts;
  if (reqCookie) {
    wishlistedProducts = await userAPI.getCustomerWishlist(token.token);
  }

  return {
    props: {
      wishlistedProducts: wishlistedProducts || [],
    },
  };
};
