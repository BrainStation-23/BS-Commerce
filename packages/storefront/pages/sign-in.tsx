import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { loginSchema } from "../schemas/loginSchema";
import { signin } from "../store/actions/userActions";

const Signin: NextComponentType = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSignin(data: any) {
    dispatch(signin(data, router));
  }

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div
          className="flex flex-col my-20 py-7 sm:mx-3 md:mx-5"
          style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}
        >
          <h2 className="text-center text-gray-800">Login</h2>
          <p className="text-center text-gray-500 mx-5">
            Please login using account detail below.
          </p>
          <div className="sm:m-5 my-3 md:mx-10">
            <Formik
              initialValues={{
                phone: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                const data = {
                  phone: values.phone,
                  password: values.password,
                };
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
                        type="phone"
                        className="w-full p-2 placeholder-gray-800 outline-0"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                      <div className="errMsg text-red-600 outline-0">
                        <ErrorMessage name="phone" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        className="w-full p-2 placeholder-gray-800 outline-0"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:justify-end md:justify-between">
                      <button
                        type="submit"
                        className="text-white bg-green-600/100 hover:bg-black rounded text-center py-2 my-2 sm:w-full md:w-1/4"
                      >
                        Sign In
                      </button>
                      <div className=" sm:my-0 md:my-3 text-decoration-none">
                        <Link href="/forgot-password">
                          <a className="text-decoration-none text-gray-600 hover:text-gray-500 font-weight-light">
                            Forgot your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="text-decoration-none mt-3">
              <Link href="/sign-up">
                <a className="text-decoration-none text-gray-600 hover:text-gray-500 font-weight-light">
                  Create account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

// phone no: 01715969546
// Pass: P@ssword123
