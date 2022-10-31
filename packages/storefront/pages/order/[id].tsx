import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
// import SingleOrderDetails from '@/modules/order/singleOrder';
import SingleOrder from '@/modules/order/components/singleOrder';
import { useRouter } from 'next/router';

const Details: NextPage = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  if (!ready) return null;

  return (
    <>
      <SingleOrder />
    </>
  );
};

export default Details;
