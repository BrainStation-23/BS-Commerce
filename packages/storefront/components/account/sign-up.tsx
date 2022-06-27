import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";

import { registerSchema } from "../global/schemas/loginSchema";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";
import { userAPI } from "APIs";
import { CreateCustomerRequest } from "models";

const Signup = () => {
  const router = useRouter();

  async function handleSignUp(data: CreateCustomerRequest) {
    try {
      userAPI.signUp(data).then((response: any) => {
        if (response?.code !== 200) {
          console.log("**********************", response);
        } else {
          router.push("/account/sign-in");
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Breadcrumb
        title="Create Account"
        pathArray={["Home", "Create Account"]}
        linkArray={["/home", "/account/sign-up"]}
      />
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
                phone: "",
                otp: "",
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                const data = {
                  phone: "01793110268",
                  otp: "1111",
                  email: values.email,
                  password: values.password,
                };
                handleSignUp(data);
                actions.setSubmitting(false);
              }}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    {/* <div className="mb-4">
                      <Field
                        type="text"
                        className="w-full p-2 outline-0 placeholder-gray-600"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div> */}

                    {/* <div className="mb-4">
                      <Field
                        type="text"
                        className="w-full p-2 outline-0 placeholder-gray-600"
                        id="otp"
                        name="otp"
                        placeholder="Otp"
                      />
                    </div> */}

                    <div className="mb-4">
                      <Field
                        type="email"
                        className="w-full p-2 outline-0 placeholder-gray-600"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        className="w-full p-2 outline-0 placeholder-gray-600"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
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
