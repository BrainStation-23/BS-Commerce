import type { GetServerSideProps, NextPage } from "next";
import { userAPI } from "APIs";

import { Wishlist } from "models";
import { useAppDispatch } from "customHooks/hooks";
import { storeWishlist } from "toolkit/ProductsSlice";

import WishlistComponent from "@/components/wishlist";

var cookie = require('cookie');

interface Props {
   wishlistedproducts: Wishlist
}

const Wishlist: NextPage<Props> = ({  wishlistedproducts }) => {
  const dispatch = useAppDispatch();
  dispatch(storeWishlist( wishlistedproducts));

  return (
    <>
        <WishlistComponent />
    </>
  );
};

export default Wishlist;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);

  const res = await userAPI.getCustomerWishlist(token.token);

  return {
    props: {
       wishlistedproducts: res,
    },
  };
};
