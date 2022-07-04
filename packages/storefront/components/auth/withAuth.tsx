import { useAppSelector } from "customHooks/hooks";
import { NextComponentType } from "next";
import SignIn from "pages/account/sign-in";
import React from "react";

const withAuth = (Component: React.Fc) => {
    const Auth = (props: any) => {
      // Login data added to props via redux-store (or use react context for example)
      const isLoggedIn = useAppSelector(state => state.persistedReducer.auth.access_token);
  
      // If user is not logged in, return login component
      if (!isLoggedIn) {
        // return (
        //   <SignIn />
        // );
        window.location.href = '/account/sign-in'
      }
  
      // If user is logged in, return original component
      return (
        <Component {...props} />
      );
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;