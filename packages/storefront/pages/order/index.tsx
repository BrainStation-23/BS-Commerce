import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');
import { userAPI } from 'APIs';
import { IOrderResponseData } from 'models';
import OrderMain from '@/components/order/ordersList/index';

const Order: NextPage = () => {
  // const storedOrderProducts = orderProducts?.data?.orderInfo;

  return (
    <>
      <OrderMain />
    </>
  );
};

export default Order;
