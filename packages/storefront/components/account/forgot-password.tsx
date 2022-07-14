import Link from 'next/link';

import { NextComponentType } from 'next';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { ForgotPasswordRequest } from 'models';
import { loginSchema } from '@/components/global/schemas/loginSchema';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import WithoutAuth from '@/components/auth/withoutAuth';

const ForgotPassword: NextComponentType = () => {
  async function handleForgotPassword(values: ForgotPasswordRequest) {}

  return (
    <>
      <Breadcrumb
        title="Account"
        pathArray={['Home', 'Account']}
        linkArray={['/', '/account/forgot-password']}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="my-20 mx-3 flex flex-col py-7"
          style={{ width: ' 35rem ', height: 'auto', background: '#f3f3f3' }}
        >
          <h2 className="mx-3 text-center text-3xl text-gray-800">
            Reset Your Password
          </h2>
          <p className="mx-5 mt-2 mb-6 text-center text-gray-500">
            We will send you a code to reset your password.
          </p>
          <div className="m-5 my-3 sm:m-5 md:mx-10 lg:mx-10 xl:mx-10">
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
                        className="w-full p-2 placeholder-gray-600 outline-0"
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
                        className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4"
                      >
                        Submit
                      </button>

                      <div className="text-decoration-none my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3">
                        <Link href="/account/sign-in">
                          <a className="text-decoration-none font-weight-light text-gray-600 hover:text-gray-500">
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

<<<<<<< HEAD
export default withoutAuth(ForgotPassword);
=======
export default WithoutAuth(ForgotPassword);
>>>>>>> c75f0f21a236b02d585ee38a7e7948bca1efaec3
