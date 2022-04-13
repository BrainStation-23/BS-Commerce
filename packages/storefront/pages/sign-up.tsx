import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { registerSchema } from "../schemas/loginSchema";
import { signup } from "../store/actions/userActions";
import Layout from "../components/layout";

const Signup: NextComponentType = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSignin(data: any) {
    dispatch(signup(data, router));
  }

  return (
    <Layout>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <div className="card m-5" style={{ width: " 25rem ", height: "auto" }}>
          <div className="card-body">
            <h5 className="d-flex flex-wrap justify-content-center">Sign-Up</h5>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                phone: "",
                password: "",
                confirm_password: ""
              }}
              onSubmit={(values, actions) => {
                const data = {
                    firstname: values.firstname,
                    lastname: values.lastname,
                    phone: values.phone,
                    password: values.password
                }
                handleSignin(data);
                actions.setSubmitting(false);
              }}
              validationSchema={registerSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="firstname" className="form-label">
                        First Name
                        <span className="text-danger"> * </span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                      />
                      <div className="invalid-feedback d-block">
                        <ErrorMessage name="name" />
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="lastname" className="form-label">
                        Last Name
                        <span className="text-danger"> * </span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                      />
                      <div className="invalid-feedback d-block">
                        <ErrorMessage name="name" />
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                        <span className="text-danger"> * </span>
                      </label>
                      <Field
                        type="phone"
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

                    <div className="form-group mb-3">
                      <label htmlFor="confirm_password" className="form-label">
                        Confirm Password{" "}
                        <span className="text-danger"> * </span>
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        id="confirm_password"
                        name="confirm_password"
                      />
                      <div className="invalid-feedback d-block">
                        <ErrorMessage name="confirm_password" />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-outline-dark">
                      Sign-up
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

export default Signup;
