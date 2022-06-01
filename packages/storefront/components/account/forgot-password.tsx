import { Formik, Form, Field, ErrorMessage } from "formik";
import { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumbs from "../global/breadcrumbs";
import Button from "../global/button/button";
import { loginSchema } from "../global/schemas/loginSchema";

const ForgotPassword: NextComponentType = (props: any) => {
  const router = useRouter();

  const handleForgotPassword = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Breadcrumbs route={router.asPath} />
      <div className="flex flex-wrap justify-center">
        <div
          className="flex flex-col my-20 py-7 sm:mx-4 md:mx-5"
          style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}
        >
          <h2 className="text-center mx-3 text-3xl text-gray-800">
            Reset Your Password
          </h2>
          <p className="text-center mt-2 mb-6 text-gray-500 mx-5">
            We will send you a code to reset your password.
          </p>
          <div className="sm:m-5 my-3 md:mx-10">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                const data = {
                  email: values.email,
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
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="phone" />
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:justify-end md:justify-between">
                      
                    <button type="submit" className="rounded py-2 my-2 sm:w-full md:w-1/4 bg-green-600/100 hover:bg-black text-white">Submit</button>

                    <div className=" sm:my-0 md:my-3 text-decoration-none">
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
