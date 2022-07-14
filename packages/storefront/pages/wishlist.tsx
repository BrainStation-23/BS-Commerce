import type { GetServerSideProps, NextPage } from "next";
import { userAPI } from "APIs";

import { Wishlist } from "models";

import WishlistComponent from "@/components/wishlist";

const Wishlist: NextPage = () => {
  return (
    <>
        <WishlistComponent />
    </>
  );
};

export default Wishlist;
