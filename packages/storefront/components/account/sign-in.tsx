import Link from 'next/link';
import Image from 'next/image';

import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CustomerSignInRequest } from 'models';

import { config } from 'config';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCustomerDetails, storeUserDetails } from 'toolkit/userSlice';
import { storeUserToken } from 'toolkit/authSlice';
import { loginSchema } from '@/components/global/schemas/loginSchema';
import { storeWishlist } from 'toolkit/productsSlice';
import { storeAllCartItems } from 'toolkit/cartSlice';

import Loading from '@/components/global/loader';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import WithoutAuth from '@/components/auth/withoutAuth';
import FacebookLogo from '@/components/account/icons/facebookLogo';
import GoogleLogo from '@/components/account/icons/googleLogo';
import { storeAddresses } from 'toolkit/customerAddressSlice';
import { storeCompare } from 'toolkit/compareSlice';

// import FacebookLogo from '../../public/facebook.svg';
// import GoogleLogo from '../../public/google.svg';

const Signin: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  let username = '';
  let loggedInUsingEmail = false;

  const fetchWislist = async (token: string) => {
    const wishlistedProducts = await userAPI.getCustomerWishlist(token);
    dispatch(storeWishlist(wishlistedProducts!));
  };

  const fetchCart = async (token: string) => {
    const cartProducts = await userAPI.getCart(token);
    dispatch(storeAllCartItems(cartProducts?.data?.items!));
  };

  const fetchCompare = async () => {
    const compareProducts = await userAPI.getCompare();
    if ('data' in compareProducts!)
      dispatch(storeCompare(compareProducts?.data!));
  };

  async function handleSignin(data: CustomerSignInRequest) {
    try {
      setLoader(true);
      const token = await fetch(config?.signIn, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const datass = await token.json();
      dispatch(storeUserToken(datass?.data?.token));

      await userAPI.getCustomer(datass?.data?.token).then((response) => {
        dispatch(storeCustomerDetails(response?.data));
        dispatch(storeAddresses(response?.data?.addresses!));
      });

      fetchCart(datass?.data?.token);
      fetchWislist(datass?.data?.token);
      fetchCompare();
      setLoader(false);
      router.push('/');
      //router.back();
      toast.success('Logged in successfully!', {
        containerId: 'bottom-right',
      });
    } catch (err) {
      setLoader(false);
      toast.error('Invalid username or password.', {
        containerId: 'bottom-right',
      });
    }
  }

  if (loader) return <Loading />;
  return (
    <>
      <Breadcrumb
        title="Account"
        pathArray={['Home', 'Account']}
        linkArray={['/', '/account/sign-in']}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="my-20 mx-3 flex flex-col py-7"
          style={{
            width: ' 35rem ',
            height: 'auto',
            background: '#f3f3f3',
          }}
        >
          <h2 className="mx-3 text-center text-3xl text-gray-800">Login</h2>
          <p className="mx-5 mt-2 mb-6 text-center text-gray-500">
            Please login using account detail below.
          </p>
          <div className="m-5 my-3 sm:m-5 md:mx-10 lg:mx-10 xl:mx-10">
            <Formik
              initialValues={{
                email: '',
                phone: '',
                username: '',
                password: '',
              }}
              onSubmit={(values, actions) => {
                let data;
                let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
                const isEmail = regex.test(values.username);
                username = values.username;
                isEmail
                  ? (loggedInUsingEmail = true)
                  : (loggedInUsingEmail = false);
                isEmail
                  ? (data = {
                      email: values.username,
                      password: values.password,
                    })
                  : (data = {
                      phone: values.username,
                      password: values.password,
                    });
                handleSignin(data);
                actions.setSubmitting(false);
              }}
              validationSchema={loginSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    <div className="mb-4">
                      <Field
                        type="text"
                        className="w-full p-2 placeholder-gray-600 outline-0"
                        id="email"
                        name="username"
                        placeholder="Enter email or phone number"
                      />
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="username" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        className="w-full p-2 placeholder-gray-600 outline-0"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                      <button
                        type="submit"
                        className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4"
                      >
                        Sign In
                      </button>

                      <div
                        id="forgotPasswordDiv"
                        className="text-decoration-none my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3"
                      >
                        <Link href="/account/forgot-password">
                          <a className="text-decoration-none font-weight-light text-gray-600 hover:text-gray-500">
                            Forgot your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="flex flex-wrap">
              <div className="text-decoration-none mt-3">
                <Link data-testid="create-account-link" href="/account/sign-up">
                  <a
                    data-testid="create-account-page"
                    className="text-decoration-none font-weight-light text-gray-600 hover:text-green-600/100"
                  >
                    Create account
                  </a>
                </Link>
              </div>
              <div className="mt-3">
                <p className="ml-1 text-gray-600">or sign in with</p>
              </div>
              <div className="flex flex-wrap">
                <button className="mx-1 mt-3 flex flex-wrap">
                  <GoogleLogo />
                  {/* <Image
                    className="mt-1 md:ml-2 lg:ml-2 xl:ml-2"
                    src={GoogleLogo}
                    alt="google-logo"
                    height={15}
                    width={15}
                  /> */}
                  <p className="ml-1 mt-1 text-xs">Google</p>
                </button>
                <div className="mt-3">
                  <p className="ml-1 text-gray-600">or</p>
                </div>
                <button className="mx-1 mt-3 flex flex-wrap">
                  <FacebookLogo />
                  {/* <Image
                    src={FacebookLogo}
                    alt="facebook-logo"
                    height={38}
                    width={35}
                  /> */}
                  <p className="mt-1 text-xs">Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithoutAuth(Signin);
