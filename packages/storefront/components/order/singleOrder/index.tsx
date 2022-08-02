import { FC } from 'react';
import { IOrderResponseData } from 'models';
import Detail from '@/components/order/singleOrder/detail';
import withAuth from '@/components/auth/withAuth';
interface Props {
  orderProduct: {
    data: IOrderResponseData;
  };
}

const SingleOrderDetails: FC<Props> = ({ orderProduct }: Props) => {
  const singleOrder = orderProduct?.data;
  return <div>{singleOrder ? <Detail singleOrder={singleOrder} /> : null}</div>;
};

export default withAuth(SingleOrderDetails);
