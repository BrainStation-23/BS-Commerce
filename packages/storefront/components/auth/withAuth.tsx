import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from 'store/hooks/index';
import Loading from '@/components/global/loader';

const WithAuth = (Component: React.FC) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const isLoggedIn = useAppSelector(
      (state) => state.persistedReducer.auth.access_token
    );
    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/account/sign-in');
      }
    }, []);

    if (!isLoggedIn) return <Loading />;
    else return <Component {...props} />;
  };

  return Auth;
};

export default WithAuth;
