import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');
import { userAPI } from 'APIs';
import { IOrderResponseData } from 'models';
import OrderMain from '@/components/order/ordersList/index';

interface Props {
  orderProducts: {
    data: {
      orderInfo: IOrderResponseData[];
    };
  };
}

const Order: NextPage<Props> = ({ orderProducts }: Props) => {
  const storedOrderProducts = orderProducts?.data?.orderInfo;

  return (
    <>
      <OrderMain orderProducts={orderProducts} />
    </>
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

export default Order;
