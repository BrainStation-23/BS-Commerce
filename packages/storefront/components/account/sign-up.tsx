import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { userAPI } from 'APIs';
import { CreateCustomerRequest } from 'models';
import { registerSchema } from '@/components/global/schemas/loginSchema';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';

const Signup = () => {
  const router = useRouter();
  const [isPhoneSignUp, setIsPhoneSignUP] = useState(false);

  async function handleSignUp(data: CreateCustomerRequest) {
    try {
      userAPI.signUp(data).then((response: any) => {
        if (response?.code !== 201) {
          if (response.response.data.error === 'CUSTOMER_EMAIL_ALREADY_EXITS') {
            alert('User with this email already exists');
          } else if (
            response.response.data.error === 'CUSTOMER_PHONE_ALREADY_EXITS'
          ) {
            alert('User with this phone number already exists');
          }
        } else {
          router.push('/account/sign-in');
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Breadcrumb
        title="Create Account"
        pathArray={['Home', 'Create Account']}
        linkArray={['/home', '/account/sign-up']}
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
                phone: '',
                otp: '',
                email: '',
                password: '',
              }}
              onSubmit={(values, actions) => {
                const data = isPhoneSignUp
                  ? {
                      phone: values.phone,
                      otp: values.otp,
                      password: values.password,
                    }
                  : {
                      email: values.email,
                      otp: '123',
                      password: values.password,
                    };
                handleSignUp(data);
                actions.setSubmitting(false);
              }}
              validationSchema={registerSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    {isPhoneSignUp && (
                      <>
                        <div className="mb-4">
                          <Field
                            type="text"
                            className="w-full p-2 placeholder-gray-600 outline-0"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            required
                          />
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="phone" />
                          </div>
                        </div>

                        <div className="mb-4">
                          <Field
                            type="text"
                            className="w-full p-2 placeholder-gray-600 outline-0"
                            id="otp"
                            name="otp"
                            placeholder="Otp"
                            required
                          />
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="otp" />
                          </div>
                        </div>
                      </>
                    )}

                    {!isPhoneSignUp && (
                      <div className="mb-4">
                        <Field
                          type="email"
                          className="w-full p-2 placeholder-gray-600 outline-0"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    )}

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
                    <button
                      type="submit"
                      className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black"
                    >
                      Sign Up
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <button
              onClick={() => setIsPhoneSignUP(!isPhoneSignUp)}
              className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black"
            >
              {!isPhoneSignUp
                ? 'Sign Up With Mobile Number'
                : 'Sign Up With Email'}
            </button>
            <div className="text-decoration-none my-2">
              <Link href="/home">
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

export default Signup;
