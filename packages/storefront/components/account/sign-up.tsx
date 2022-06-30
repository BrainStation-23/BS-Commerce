import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";

import { registerSchema } from "../global/schemas/loginSchema";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";
import { userAPI } from "APIs";
import { CreateCustomerRequest } from "models";
import { useState } from "react";
import Loading from "../global/loader";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();
  const [isPhoneSignUp, setIsPhoneSignUP] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignUp(data: CreateCustomerRequest) {
    try {
      setLoading(true);
      userAPI.signUp(data).then((response: any) => {
        if (response?.code !== 201) {
          if (response.response.data.error === "CUSTOMER_EMAIL_ALREADY_EXITS") {
            toast.warning("User with this email already exists");
            setLoading(false);
          } else if (
            response.response.data.error === "CUSTOMER_PHONE_ALREADY_EXITS"
          ) {
            toast.warning("User with this phone number already exists");
            setLoading(false);
          }
        } else {
          setTimeout(() => {
            setLoading(false);
            toast.success("Account created successfully! Please login to continue.")
            router.push("/account/sign-in");
          }, 1000);
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error("User creation failed. Try again.");
    }
  }

  if (loading) {
    return <Loading />;
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
                const data = isPhoneSignUp
                  ? {
                      phone: values.phone,
                      otp: values.otp,
                      password: values.password,
                    }
                  : {
                      email: values.email,
                      otp: "123",
                      password: values.password,
                    };
                handleSignUp(data);
                actions.setSubmitting(false);
              }}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    {isPhoneSignUp && (
                      <>
                        <div className="mb-4">
                          <Field
                            type="text"
                            className="w-full p-2 outline-0 placeholder-gray-600"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <Field
                            type="text"
                            className="w-full p-2 outline-0 placeholder-gray-600"
                            id="otp"
                            name="otp"
                            placeholder="Otp"
                            required
                          />
                        </div>
                      </>
                    )}

                    {!isPhoneSignUp && (
                      <div className="mb-4">
                        <Field
                          type="email"
                          className="w-full p-2 outline-0 placeholder-gray-600"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    )}

                    <div className="mb-4">
                      <Field
                        type="password"
                        className="w-full p-2 outline-0 placeholder-gray-600"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded py-2 my-2 w-full bg-green-600/100 hover:bg-black text-white"
                    >
                      Sign Up
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <button
              onClick={() => setIsPhoneSignUP(!isPhoneSignUp)}
              className="rounded py-2 my-2 w-full bg-green-600/100 hover:bg-black text-white"
            >
              {!isPhoneSignUp
                ? "Sign Up With Mobile Number"
                : "Sign Up With Email"}
            </button>
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
