import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { userAPI } from 'APIs';
import { loginSchema } from '@/components/global/schemas/loginSchema';
import { ForgotPasswordRequest } from 'models';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { NextComponentType } from 'next';

const ForgotPassword: NextComponentType = () => {
  async function handleForgotPassword(values: ForgotPasswordRequest) {}

  return (
    <>
      <Breadcrumb
        title="Account"
        pathArray={['Home', 'Account']}
        linkArray={['/home', '/account/forgot-password']}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="flex flex-col my-20 py-7 mx-3"
          style={{ width: ' 35rem ', height: 'auto', background: '#f3f3f3' }}
        >
          <h2 className="text-center mx-3 text-3xl text-gray-800">
            Reset Your Password
          </h2>
          <p className="text-center mt-2 mb-6 text-gray-500 mx-5">
            We will send you a code to reset your password.
          </p>
          <div className="m-5 sm:m-5 my-3 md:mx-10 lg:mx-10 xl:mx-10">
            <Formik
              initialValues={{
                username: '',
              }}
              onSubmit={(values, actions) => {
                const data = {
                  username: values.username,
                };
                handleForgotPassword(data);
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
                        className="w-full p-2 outline-0 placeholder-gray-600"
                        id="username"
                        name="username"
                        placeholder="Username"
                      />
                      <div className="errMsg text-red-600 outline-0">
                        <ErrorMessage name="username" />
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                      <button
                        type="submit"
                        className="rounded py-2 my-2 w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 bg-green-600/100 hover:bg-black text-white"
                      >
                        Submit
                      </button>

                      <div className="my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3 text-decoration-none">
                        <Link href="/account/sign-in">
                          <a className="text-decoration-none text-gray-600 hover:text-gray-500 font-weight-light">
                            Cancel
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
