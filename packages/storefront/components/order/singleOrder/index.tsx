import { FC, useState, useEffect } from 'react';
import { OrderByUserId } from 'models';
import { useRouter } from 'next/router';
import Detail from '@/components/order/singleOrder/detail';
import withAuth from '@/components/auth/withAuth';
import { useAppSelector } from 'customHooks/hooks';
import { userAPI } from 'APIs';

const SingleOrderDetails: FC = () => {
  const [singleOrder, setSingleorder] = useState<OrderByUserId>();
  const router = useRouter();
  const id = `${router.query.id}`;

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const getSingleOrder = async () => {
    try {
      const singleOrderDetails = await userAPI.getOrderProduct(
        token,
        id as string
      );
      if (singleOrderDetails) setSingleorder(singleOrderDetails);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleOrder();
  }, []);

  // const singleOrder = orderProduct?.data;
  return <div>{singleOrder ? <Detail singleOrder={singleOrder} /> : null}</div>;
  // return <>hello</>;
};

export default withAuth(SingleOrderDetails);
