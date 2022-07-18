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

const Details:NextPage<Props> = ({ orderProducts }: Props) => {
    const router = useRouter();
    const id = "" + `${router.query.id}`;
    const storedOrderProducts = orderProducts?.data?.orderInfo;
    const singleOrders = storedOrderProducts?.filter((order: any )=> order.orderId === id);
    const singleOrder = singleOrders[0];
  
    return (
        <div>
            {singleOrder ? <Detail singleOrder={singleOrder}/> : null}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    let token = cookie?.parse(context.req.headers?.cookie);
    const orderProducts = await userAPI.getOrderProducts(token?.token);
    return {
      props: {
        orderProducts: orderProducts,
      },
    };
  };
  

export default Details;