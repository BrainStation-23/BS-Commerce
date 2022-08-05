import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from 'customHooks/hooks';
import Loading from '@/components/global/loader';

const WithAuth = (Component: React.FC) => {
  const Auth = (props: any) => {
    const router = useRouter();
    // Login data added to props via redux-store (or use react context for example)
    const isLoggedIn = useAppSelector(
      (state) => state.persistedReducer.auth.access_token
    );

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      // return (
      //   <SignIn />
      // );
      window.location.href = '/account/sign-in';
    }
    const pushRouter = () => {
      router.push('/account/sign-in');
    };
    useEffect(() => {
      if (!isLoggedIn) {
        // return (
        //   <SignIn />
        // );
        window.location.href = '/account/sign-in';
        router.push('/account/sign-in');
      }
    }, []);

    // If user is logged in, return original component
    if (!isLoggedIn) return <Loading />;
    else return <Component {...props} />;
  };

  return Auth;
};

export default WithAuth;
