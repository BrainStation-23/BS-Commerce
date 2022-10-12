import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CustomerSignInRequest } from '@bs-commerce/models';

import { config } from 'config';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'store/hooks/index';
import { storeCustomerDetails, storeUserDetails } from 'store/slices/userSlice';
import { storeUserToken } from 'store/slices/authSlice';
import { loginSchema } from '@/components/global/schemas/loginSchema';
import { storeWishlist } from 'store/slices/productsSlice';
import { storeAllCartItems } from 'store/slices/cartSlice';

import Loading from '@/components/global/loader';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import WithoutAuth from '@/components/auth/withoutAuth';
import FacebookLogo from '@/components/account/icons/facebookLogo';
import GoogleLogo from '@/components/account/icons/googleLogo';
import { storeAddresses } from 'store/slices/customerAddressSlice';
import { storeCompare } from 'store/slices/compareSlice';

// import FacebookLogo from '../../public/facebook.svg';
// import GoogleLogo from '../../public/google.svg';

const Signin: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);

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
      const token = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await token.json();
      if ('code' in res! && res.code === 200 && 'data' in res!) {
        dispatch(storeUserToken(res.data.token));
        await userAPI.getCustomer(res?.data?.token).then((response) => {
          dispatch(storeCustomerDetails(response?.data));
          dispatch(storeAddresses(response?.data?.addresses!));
        });
        fetchCart(res?.data?.token);
        fetchWislist(res?.data?.token);
        fetchCompare();
        router.push('/');
        toast.success('Logged in successfully!', {
          containerId: 'bottom-right',
        });
      } else {
        toast.error('Something went wrong', {
          containerId: 'bottom-right',
        });
      }
    } catch (err) {
      toast.error('Invalid username or password.', {
        containerId: 'bottom-right',
      });
    } finally {
      setLoader(false);
    }
  }

  if (loader) return <Loading />;
  return (
    <>
      <Breadcrumb
        title={`${t('common:account')}`}
        pathArray={[`${t('common:home')}`, `${t('common:account')}`]}
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
          <h2 className="mx-3 text-center text-3xl text-gray-800">
            {t('common:login')}
          </h2>
          <p className="mx-5 mt-2 mb-6 text-center text-gray-500">
            {t('login:login_form_header')}
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
                        placeholder={t('login:username')}
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
                        placeholder={t('login:password')}
                      />
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                      <button
                        type="submit"
                        className="my-2 w-full rounded bg-primary py-2 capitalize text-white hover:bg-black dark:bg-dark_primary sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4"
                      >
                        {t('login:signin')}
                      </button>

                      <div
                        id="forgotPasswordDiv"
                        className="text-decoration-none my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3"
                      >
                        <Link href="/account/forgot-password">
                          <a className="text-decoration-none font-weight-light text-gray-600 hover:text-gray-500">
                            {t('login:forgot_password')}
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
                    className="text-decoration-none font-weight-light text-gray-600 hover:text-primary"
                  >
                    {t('login:create_account')}
                  </a>
                </Link>
              </div>
              <div className="mt-3">
                <p className="ml-1 text-gray-600">{t('login:social_login')}</p>
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
                  <p className="ml-1 text-gray-600">{t('common:or')}</p>
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
