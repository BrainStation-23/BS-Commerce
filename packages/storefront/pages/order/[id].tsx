import React, { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
var cookie = require('cookie');
import { IOrderResponseData } from 'models';
import { userAPI } from 'APIs';
import Detail from '@/components/order/detail';

interface Props {
  orderProduct: {
    data: IOrderResponseData
  };
}

const Details: NextPage<Props> = ({ orderProduct }: Props) => {
  
  const singleOrder = orderProduct?.data;
  return <div>{singleOrder ? <Detail singleOrder={singleOrder} /> : null}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.query?.id;
  let token = cookie?.parse(context.req.headers?.cookie);
  const orderProduct = await userAPI.getOrderProduct(token?.token, id);
  return {
    props: {
      orderProduct: orderProduct,
    },
  };
};

export default Details;
