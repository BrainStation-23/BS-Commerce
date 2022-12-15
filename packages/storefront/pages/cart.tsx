import type { GetServerSideProps, NextPage } from 'next';

import CartComponent from '@/modules/cart/index';
import { ResponseItem } from '@bs-commerce/models';
import { userAPI } from 'APIs';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { storeAllCartItems } from 'store/slices/cartSlice';
var cookie = require('cookie');

interface Props {
  cartProducts: ResponseItem[];
}

const CartPage: NextPage<Props> = ({ cartProducts }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(storeAllCartItems(cartProducts));
  }, [dispatch, cartProducts]);

  return (
    <>
      <div>
        <CartComponent />
      </div>
    </>
  );
};

export default CartPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const reqCookie = context.req.headers.cookie;
  const token = reqCookie === undefined ? undefined : cookie.parse(reqCookie);
  let response;
  if (reqCookie) {
    response = await userAPI.getCart(token.token);
  }
  return {
    props: {
      cartProducts: response?.data?.items!,
    },
  };
};
