import { useAppSelector } from 'customHooks/hooks';
import React from 'react';
import Loading from '../global/loader';

const WithAuth = (Component: React.FC) => {
  const Auth = (props: any) => {
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

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  return Auth;
};

export default WithAuth;
