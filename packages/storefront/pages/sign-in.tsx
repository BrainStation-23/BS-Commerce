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
    <div className="flex flex-wrap justify-center mt-5">
      <div
        className="relative flex flex-col min-w-0 rounded break-words border border-1 border-gray-300 m-12"
        style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}
      >
        <div className="flex-auto">
          <h2 className="flex flex-wrap justify-center mt-4">Login</h2>
          <p className="flex flex-wrap justify-center mb-4 text-gray-600">
            Please login using account detail below.
          </p>
          <div className="m-6">
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
                    <div className="flex flex-wrap justify-between">
                      <button
                        type="submit"
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-2 px-3 leading-normal no-underline text-white my-3 mx-4 px-4"
                        style={{ background: "#40a944" }}
                      >
                        Sign In
                      </button>
                      <div className="mx-4 my-3 text-decoration-none">
                        <Link href="/forgot-password">
                          <a className="text-decoration-none text-black font-weight-light">
                            Forgot your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="mx-4 mt-2 mb-3 text-decoration-none">
              <Link href="/sign-up">
                <a className="text-decoration-none text-black font-weight-light">
                  Create account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="d-flex flex-wrap justify-content-center mt-5">
    //     <div className="card m-5" style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}>
    //       <div className="card-body">
    //       <h3 className="d-flex flex-wrap justify-content-center m-3">Login</h3>
    //       <p className="d-flex flex-wrap justify-content-center mb-4 text-secondary">
    //         Please login using account detail below.
    //       </p>
    //       <div className="m-3">
    //         <Formik
    //           initialValues={{
    //             phone: "",
    //             password: "",
    //           }}
    //           onSubmit={(values, actions) => {
    //             const data = {
    //               phone: values.phone,
    //               password: values.password,
    //             };
    //             handleSignin(data);
    //             actions.setSubmitting(false);
    //           }}
    //           validationSchema={loginSchema}
    //         >
    //           {(formikprops) => {
    //             return (
    //               <Form onSubmit={formikprops.handleSubmit}>
    //                 <div className="form-group m-3">
    //                   <Field
    //                     type="phone"
    //                     className="form-control"
    //                     id="phone"
    //                     name="phone"
    //                     placeholder="Phone"
    //                   />
    //                   <div className="invalid-feedback d-block">
    //                     <ErrorMessage name="phone" />
    //                   </div>
    //                 </div>

    //                 <div className="form-group m-3">
    //                   <Field
    //                     type="password"
    //                     className="form-control"
    //                     id="password"
    //                     name="password"
    //                     placeholder="Password"
    //                   />
    //                   <div className="invalid-feedback d-block">
    //                     <ErrorMessage name="password" />
    //                   </div>
    //                 </div>
    //                 <div className="d-flex flex-wrap justify-content-between">
    //                   <button
    //                     type="submit"
    //                     className="btn text-white my-3 mx-3 px-4"
    //                     style={{ background: "#40a944" }}
    //                   >
    //                     Sign In
    //                   </button>
    //                   <div className="mx-3 my-3 text-decoration-none">
    //                     <Link href="/forgot-password">
    //                       <a className="text-decoration-none text-black font-weight-light">
    //                         Forgot your password?
    //                       </a>
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </Form>
    //             );
    //           }}
    //         </Formik>
    //         <div className="mx-3 my-2 text-decoration-none">
    //           <Link href="/sign-up">
    //             <a className="text-decoration-none text-black font-weight-light">
    //               Create account
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signin;

// phone no: 01715969546
// Pass: P@ssword123
