import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
// import SingleOrderDetails from '@/modules/order/singleOrder';
import { useRouter } from 'next/router';
import SingleAddressDetails from '@/modules/myAccount/addresses/components/singleAddressDetails';

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
      <SingleAddressDetails />
    </>
  );
};

export default Details;
