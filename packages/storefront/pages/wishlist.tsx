import type { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { Wishlist } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeWishlist } from 'toolkit/productsSlice';

import WishlistComponent from '@/components/wishlist';

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
