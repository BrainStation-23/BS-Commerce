import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { registerSchema } from "../schemas/loginSchema";
import { signup } from "../store/actions/userActions";
import Layout from "../components/layout";
import Link from "next/link";

const Signup: NextComponentType = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSignin(data: any) {
    dispatch(signup(data, router));
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div
        className="flex flex-col my-20 py-7 sm:mx-3 md:mx-5"
        style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}
      >
        <h2 className="text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-500 mx-5">
          Please Register using account detail below.
        </p>
        <div className="sm:mx-3 my-1 md:mx-10">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              phone: "",
              password: "",
              confirm_password: "",
            }}
            onSubmit={(values, actions) => {
              const data = {
                firstName: values.firstname,
                lastName: values.lastname,
                phone: values.phone,
                password: values.password,
              };
              handleSignin(data);
              actions.setSubmitting(false);
            }}
            validationSchema={registerSchema}
          >
            {(formikprops) => {
              return (
                <Form onSubmit={formikprops.handleSubmit}>
                  <div className="mb-4">
                    <Field
                      type="text"
                      className="w-full p-2 outline-0 placeholder-gray-800"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <div className="errMsg text-red-600">
                      <ErrorMessage name="name" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Field
                      type="text"
                      className="w-full p-2 outline-0 placeholder-gray-800"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <div className="errMsg text-red-600">
                      <ErrorMessage name="name" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Field
                      type="phone"
                      className="w-full p-2 outline-0 placeholder-gray-800"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                    <div className="errMsg text-red-600">
                      <ErrorMessage name="phone" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Field
                      type="password"
                      className="w-full p-2 outline-0 placeholder-gray-800"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="errMsg text-red-600">
                      <ErrorMessage name="password" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Field
                      type="password"
                      className="w-full p-2 outline-0 placeholder-gray-800"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                    />
                    <div className="errMsg text-red-600">
                      <ErrorMessage name="confirm_password" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-green-600/100 hover:bg-black rounded text-center py-2 my-2 sm:w-full md:w-1/4"
                  >
                    Create
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div className="my-2 text-decoration-none">
            <Link href="/home">
              <a className="text-decoration-none text-gray-800 font-weight-light">
                Return to Store
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
