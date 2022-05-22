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
    <Layout>
      <div className="flex flex-wrap justify-center mt-5">
        <div className="relative flex flex-col min-w-0 break-words border border-1 border-gray-300 m-12" style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}>
          <div className="flex-auto">
            <h2 className="flex flex-wrap justify-center mt-4">
              Create Account
            </h2>
            <p className="flex flex-wrap justify-center mb-4 text-gray-600">
              Please Register using account detail below.
            </p>
            <div className="m-6">
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
                      <div className="mb-4 m-6">
                        <Field
                          type="text"
                          className="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white outline-0 border border-gray-200"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                        />
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="name" />
                        </div>
                      </div>

                      <div className="mb-4 m-6">
                        <Field
                          type="text"
                          className="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white outline-0"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                        />
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="name" />
                        </div>
                      </div>

                      <div className="mb-4 m-6">
                        <Field
                          type="phone"
                          className="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white outline-0"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                        />
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="phone" />
                        </div>
                      </div>

                      <div className="mb-4 m-6">
                        <Field
                          type="password"
                          className="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white outline-0"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="password" />
                        </div>
                      </div>

                      <div className="mb-4 m-6">
                        <Field
                          type="password"
                          className="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white outline-0 border border-gray-200"
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
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-2 px-3 leading-normal no-underline text-white my-2 mx-4 px-4"
                        style={{ background: "#40a944" }}
                      >
                        Create
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div className="mx-4 my-2 text-decoration-none">
                <Link href="/home">
                  <a className="text-decoration-none text-black font-weight-light">Return to Store</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-wrap justify-content-center mt-5">
        <div className="card m-5" style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}>
          <div className="card-body">
            <h3 className="d-flex flex-wrap justify-content-center m-3">
              Create Account
            </h3>
            <p className="d-flex flex-wrap justify-content-center mb-4 text-secondary">
              Please Register using account detail below.
            </p>
            <div className="m-3">
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
                      <div className="form-group m-3">
                        <Field
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                        />
                        <div className="invalid-feedback d-block">
                          <ErrorMessage name="name" />
                        </div>
                      </div>

                      <div className="form-group m-3">
                        <Field
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                        />
                        <div className="invalid-feedback d-block">
                          <ErrorMessage name="name" />
                        </div>
                      </div>

                      <div className="form-group m-3">
                        <Field
                          type="phone"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                        />
                        <div className="invalid-feedback d-block">
                          <ErrorMessage name="phone" />
                        </div>
                      </div>

                      <div className="form-group m-3">
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                        <div className="invalid-feedback d-block">
                          <ErrorMessage name="password" />
                        </div>
                      </div>

                      <div className="form-group m-3">
                        <Field
                          type="password"
                          className="form-control"
                          id="confirm_password"
                          name="confirm_password"
                          placeholder="Confirm Password"
                        />
                        <div className="invalid-feedback d-block">
                          <ErrorMessage name="confirm_password" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn text-white my-2 mx-3 px-4"
                        style={{ background: "#40a944" }}
                      >
                        Create
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div className="mx-3 my-2 text-decoration-none">
                <Link href="/home">
                  <a className="text-decoration-none text-black font-weight-light">Return to Store</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Signup;
