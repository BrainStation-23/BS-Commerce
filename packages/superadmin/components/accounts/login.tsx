import { useRouter } from "next/router";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { SignInRequest } from "models";
import { useAppDispatch } from "../../redux-hooks";

import { userAPI } from "../../APIs";
import { saveToken } from "../../toolkit/AuthSlice";
import { loginSchema } from "../../components/global/schemas/loginSchema";

// interface Values {
//   email: string;
//   password: string;
// }

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  async function handleLogin(data: SignInRequest) {
    const response = await userAPI.signin(data, router);
    if (response?.data.token) {
      dispatch(saveToken(response?.data.token!));
    }
    console.log(response);
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <span className="w-100 mb-3 pb-3 border-bottom border-1 flex-grow-1 text-center h1">
        Admin area demo
      </span>
      <span className="w-100 pb-3 mb-0 border-bottom border-1 flex-grow-1 text-center h5 text-muted">
        Welcome, please sign in!
      </span>
      {/* input form */}
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            username: values.username,
            password: values.password,
          };
          handleLogin(data);
          actions.setSubmitting(false);
        }}
        validationSchema={loginSchema}
      >
        {(formikprops) => {
          return (
            <Form
              onSubmit={formikprops.handleSubmit}
              className="w-100 d-flex flex-column align-items-center"
            >
              <div
                className="w-100 d-flex flex-column align-items-center pt-4"
                style={{ backgroundColor: "#f9f9f9" }}
              >
                <div className="form-group row mb-lg-3 w-50">
                  <label
                    htmlFor="email"
                    className="col-lg-2 col-form-label text-center text-lg-end"
                  >
                    Email:
                  </label>
                  <div className="col-lg-10">
                    <Field
                      type="email"
                      className="form-control "
                      id="email"
                      name="username"
                      placeholder="Email"
                    />
                    <div className="text-danger">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <div className="form-group row mb-lg-3 w-50">
                  <label
                    htmlFor="password"
                    className="col-lg-2 col-form-label text-center text-lg-end"
                  >
                    Password:
                  </label>
                  <div className="col-lg-10">
                    <Field
                      type="password"
                      className="form-control "
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="text-danger">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me?
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4 mb-4 px-5 py-1"
              >
                {/* <Link href={""}> */}
                <a className="text-decoration-none text-white">LOG IN</a>
                {/* </Link> */}
              </button>
            </Form>
          );
        }}
      </Formik>

      <span className="w-100 mb-3 pb-3 border-bottom border-1 flex-grow-1 text-center h2">
        Defaults for admin area
      </span>
      <span className="text-muted">Admin email: admin@yourstore.com</span>
      <span className="text-muted">Admin password: Admin123#</span>
    </div>
  );
};
export default Login;
