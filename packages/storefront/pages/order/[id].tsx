import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
var cookie = require('cookie');
import { IOrderResponseData } from 'models';
import { userAPI } from 'APIs';
import Detail from '@/components/order/detail';

interface Props {
  orderProducts: IOrderResponseData[];
}

const Details: NextPage<Props> = ({ orderProducts }: Props) => {
  const singleOrder = orderProducts?.data;
  return <div>{singleOrder ? <Detail singleOrder={singleOrder} /> : null}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const token = cookie?.parse(context.req.headers?.cookie);
  const orderProducts = await userAPI.getOrderProduct(token?.token, id);
  return {
    props: {
      orderProducts: orderProducts,
    },
  };
};

export default Details;
