import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";

import { registerSchema } from "../global/schemas/loginSchema";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";

interface Values {
  firstname: string;
  lastname: string;
  phone: string;
  password: string;
  confirm_password: string;
}

const Signup = () => {
  const router = useRouter();
  const baseUrl = "http://localhost:3000";

  async function handleSignin(data: Values) {
    console.log(data);
  }

  return (
    <>
        <Breadcrumb title="Create Account" pathArray={["Home", "Create Account"]} linkArray={["/home", "/account/sign-up"]} />
      <div className="flex flex-wrap justify-center">
        <div
          className="flex flex-col my-20 py-7 mx-3"
          style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}
        >
          <h2 className="text-3xl mx-3 text-center text-gray-800">
            Create Account
          </h2>
          <p className="text-center mt-2 mb-6 text-gray-500 mx-5">
            Please Register using account detail below.
          </p>
          <div className="m-5 sm:m-5 my-3 md:mx-10 lg:mx-10 xl:mx-10">
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
                        className="w-full p-2 outline-0 placeholder-gray-600"
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
                        className="w-full p-2 outline-0 placeholder-gray-600"
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
                        className="w-full p-2 outline-0 placeholder-gray-600"
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
                        className="w-full p-2 outline-0 placeholder-gray-600"
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
                        className="w-full p-2 outline-0 placeholder-gray-600"
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
                      className="rounded py-2 my-2 w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 bg-green-600/100 hover:bg-black text-white"
                    >
                      Sign Up
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
    </>
  );
};

export default Signup;
