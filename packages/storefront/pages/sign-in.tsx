import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { loginSchema } from "../schemas/loginSchema";
import { signin } from "../store/actions/userActions";
import Layout from "../components/layout";

const Signin: NextComponentType = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSignin(data: any) {
    dispatch(signin(data, router));
  }

  return (
    <Layout>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <div className="card m-5" style={{ width: " 25rem ", height: "auto" }}>
          <div className="card-body">
            <h5 className="d-flex flex-wrap justify-content-center">Sign-In</h5>
            <Formik
              initialValues={{
                phone: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                handleSignin(values);
                actions.setSubmitting(false);
              }}
              validationSchema={loginSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                        <span className="text-danger"> * </span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                      />
                      <div className="invalid-feedback d-block">
                        <ErrorMessage name="phone" />
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                        <span className="text-danger"> * </span>
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                      />
                      <div className="invalid-feedback d-block">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-around">
                      <p>Are you new? Click</p>
                      <Link href="/sign-up">
                        <a className="d-flex justify-content-end">register.</a>
                      </Link>
                      <Link href="/forgot-password">
                        <a className="d-flex justify-content-end">
                          Forgot Password?
                        </a>
                      </Link>
                    </div>

                    <button type="submit" className="btn btn-outline-dark">
                      Sign-In
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
