import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import { config } from 'config';
import { userAPI } from 'APIs';
import { storeUserToken } from 'toolkit/authSlice';
import { storeCustomerDetails } from 'toolkit/userSlice';
import { useAppDispatch } from 'customHooks/hooks';
import { CreateCustomerRequest, CustomerSignInRequest } from 'models';
import { registerSchema } from '@/components/global/schemas/loginSchema';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import Loading from '@/components/global/loader';
import WithoutAuth from '@/components/auth/withoutAuth';

const Signup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isPhoneSignUp, setIsPhoneSignUP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [otp, setOtp] = useState('');
  const [userName, setUserName] = useState('');

  const toggleClass = 'transform translate-x-5';
  let username = '';
  let loggedInUsingEmail = false;

  async function handleSignin(data: CustomerSignInRequest) {
    try {
      setLoading(true);
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
      });
      router.push('/');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error('Failed to login', {
        containerId: 'bottom-right',
      });
    }
  }

  async function handleSignUp(data: CreateCustomerRequest) {
    //console.log(data);
    try {
      setLoading(true);
      await userAPI.signUp(data).then((response: any) => {
        if (response?.code !== 201) {
          if (response.response.data.error === 'CUSTOMER_EMAIL_ALREADY_EXITS') {
            toast.warning('User with this email already exists', {
              containerId: 'bottom-right',
            });
            setLoading(false);
          } else if (
            response.response?.data?.error === 'CUSTOMER_PHONE_ALREADY_EXITS'
          ) {
            toast.warning('User with this phone number already exists', {
              containerId: 'bottom-right',
            });
            setLoading(false);
          }
        } else {
          setLoading(true);
          const loginData = data.email
            ? {
                email: data.email,
                password: data.password,
              }
            : {
                phone: data.phone,
                password: data.password,
              };
          handleSignin(loginData);
          setLoading(false);
          toast.success('Account created successfully!', {
            containerId: 'bottom-right',
          });
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error('User creation failed. Try again.', {
        containerId: 'bottom-right',
      });
    }
  }

  async function handleOTPRequest(data: string, setFieldValue: Function) {
    try {
      const res = await userAPI.sendOTP(data).then((response: any) => {
        if (response?.code !== 200) {
          if (response.response.data.error === 'CUSTOMER_EMAIL_ALREADY_EXITS') {
            toast.warning('User with this email already exists', {
              containerId: 'bottom-right',
            });
          } else if (
            response.response?.data?.error === 'CUSTOMER_PHONE_ALREADY_EXITS'
          ) {
            toast.warning('User with this phone number already exists', {
              containerId: 'bottom-right',
            });
          }
        } else {
          const responseMessage = response?.data?.message!.split(' ');
          const otpValue = responseMessage![responseMessage?.length! - 1];
          setFieldValue('otp', otpValue);
          setOtp(otpValue);
          setToggle(!toggle);
        }
      });
    } catch (error) {
      toast.error('Failed to send OTP. Try again.', {
        containerId: 'bottom-right',
      });
    }
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* {modalOn && (
        <OtpModal
          setModalOn={setModalOn}
          setChoice={setChoice}
          modalTitle="Send OTP"
          bodyText={otp}
        />
      )} */}
      <Breadcrumb
        title="Create Account"
        pathArray={['Home', 'Create Account']}
        linkArray={['/', '/account/sign-up']}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="my-20 mx-3 flex flex-col py-7"
          style={{ width: ' 35rem ', height: 'auto', background: '#f3f3f3' }}
        >
          <h2 className="mx-3 text-center text-3xl text-gray-800">
            Create Account
          </h2>
          <p className="mx-5 mt-2 mb-6 text-center text-gray-500">
            Please Register using account detail below.
          </p>
          <div className="m-5 my-3 sm:m-5 md:mx-10 lg:mx-10 xl:mx-10">
            <Formik
              initialValues={{
                username: '',
                otp: '',
                name: '',
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
                      otp: parseInt(values.otp),
                      name: values.name,
                      password: values.password,
                    })
                  : (data = {
                      phone: values.username,
                      otp: parseInt(values.otp),
                      name: values.name,
                      password: values.password,
                    });
                handleSignUp(data);
                actions.setSubmitting(false);
              }}
              validationSchema={registerSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    <div className="mb-4">
                      <Field
                        type="username"
                        className="w-full p-2 placeholder-gray-600 outline-0"
                        id="username"
                        name="username"
                        placeholder="Email or phone number"
                      />
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="username" />
                      </div>
                    </div>

                    <div className="mb-2 flex flex-wrap justify-between">
                      <div className="w-3/5">
                        <Field
                          type="otp"
                          className="w-full p-2 placeholder-gray-600 outline-0"
                          id="otp"
                          name="otp"
                          placeholder="OTP"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3">
                        <button
                          disabled={toggle ? true : false}
                          id="toggle-btn"
                          className={`flex h-6 w-12 cursor-pointer items-center rounded-full
                            ${
                              formikprops.values.username !== ''
                                ? 'bg-green-600/100'
                                : 'bg-gray-400'
                            }`}
                          onClick={() => {
                            if (formikprops.values.username !== '') {
                              handleOTPRequest(
                                formikprops?.values?.username!,
                                formikprops.setFieldValue
                              );
                            }
                          }}
                        >
                          {/* Switch */}
                          <div
                            className={
                              'h-5 w-5 transform rounded-full bg-white shadow-md duration-300 ease-in-out' +
                              (!toggle ? null : toggleClass)
                            }
                          ></div>
                        </button>
                        <p>Verify</p>
                      </div>
                    </div>
                    <div className="errMsg mb-4 text-red-600">
                      <ErrorMessage name="otp" />
                    </div>

                    {toggle && (
                      <>
                        <div className="mb-4">
                          <Field
                            type="name"
                            className="w-full p-2 placeholder-gray-600 outline-0"
                            id="name"
                            name="name"
                            placeholder="Full name"
                          />
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="name" />
                          </div>
                        </div>

                        <div className="mb-4">
                          <Field
                            type="password"
                            className="w-full p-2 placeholder-gray-600 outline-0"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                          />
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="password" />
                          </div>
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      onClick={() => {
                        if (!toggle) {
                          toast.error(
                            'Please verify the email/phone you typed.',
                            {
                              containerId: 'bottom-right',
                            }
                          );
                        }
                      }}
                      className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black"
                    >
                      Sign Up
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <div className="text-decoration-none my-2">
              <Link href="/">
                <a className="text-decoration-none font-weight-light text-gray-800">
                  Return to Store
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithoutAuth(Signup);
