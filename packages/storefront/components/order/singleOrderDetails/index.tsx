import { FC, useState, useEffect } from 'react';
import { OrderByUserId } from 'models';
import { useRouter } from 'next/router';
import withAuth from '@/components/auth/withAuth';
import { useAppSelector } from 'customHooks/hooks';
import { userAPI } from 'APIs';

const SingleOrder: FC = () => {
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

  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="flex">
          <p className="text-2xl font-semibold">Order Summary</p>
        </div>
      </div>
    </>
  );
};

export default withAuth(SingleOrder);
