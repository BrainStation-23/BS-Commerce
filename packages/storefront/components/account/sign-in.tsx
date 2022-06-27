import { userAPI } from "APIs";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";
import { useCookies } from "react-cookie";
import { CustomerSignInRequest } from "models";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { storeUserToken } from "toolkit/authSlice";
import axios from "axios";

var cookie = require("cookie");
var escapeHtml = require("escape-html");
var http = require("http");
var url = require("url");

const Signin = () => {
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  const dispatch = useDispatch();

  async function handleSignin(data: CustomerSignInRequest) {
    const token = await fetch("http://localhost:3002/api/signin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const datass = await token.json();
    console.log("999999999999999999999999999999", datass);
    dispatch(storeUserToken(datass?.data?.token));
    // localStorage.setItem("token", datass?.data?.token);
    setCookie("access_token", datass?.data?.token);
    // axios.defaults.headers.post['Authorization'] = `Bearer ${datass?.data?.token}`;
    // console.log('headers ======>', axios.defaults.headers.common['Authorization']);

    window.location.href = "/home";
    // userAPI.signIn(data).then((response: any) => {
    //   if (response?.code != 200) {
    //     alert(response.response.data.error);
    //   } else {
    //     // dispatch(storeUserToken(response?.data.token));
    //     // // let expires = new Date();
    //     // // expires.setTime(expires.getTime() + response?.data.expires_in * 1000);
    //     // // setCookie("access_token", response?.data.token, { path: "/", expires });
    //     // res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
    //     //   httpOnly: true,
    //     //   maxAge: 60 * 60 * 24 * 7 // 1 week
    //     // }));

    //     window.location.href = "/home";
    //   }
  }

  return (
    <>
      <Breadcrumb
        title="Account"
        pathArray={["Home", "Account"]}
        linkArray={["/home", "/account/sign-in"]}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="flex flex-col my-20 py-7 mx-3"
          style={{
            width: " 35rem ",
            height: "auto",
            background: "#f3f3f3",
          }}
        >
          <h2 className="text-3xl mx-3 text-center text-gray-800">Login</h2>
          <p className="text-center mt-2 mb-6 text-gray-500 mx-5">
            Please login using account detail below.
          </p>
          <div className="m-5 sm:m-5 my-3 md:mx-10 lg:mx-10 xl:mx-10">
            <Formik
              initialValues={{
                phone: "",
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                const data = {
                  phone: "01717584939",
                  email: values.email,
                  password: values.password,
                };
                handleSignin(data);
                actions.setSubmitting(false);
              }}
              //validationSchema={loginSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    {/* <div className="mb-4">
                      <Field
                        type="text"
                        className="w-full p-2 placeholder-gray-600 outline-0"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                      <div className="errMsg text-red-600 outline-0">
                        <ErrorMessage name="username" />
                      </div>
                    </div> */}

                    <div className="mb-4">
                      <Field
                        type="text"
                        className="w-full p-2 placeholder-gray-600 outline-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      {/* <div className="errMsg text-red-600 outline-0">
                        <ErrorMessage name="username" />
                      </div> */}
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        className="w-full p-2 placeholder-gray-600 outline-0"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                      {/* <div className="errMsg text-red-600">
                        <ErrorMessage name="password" />
                      </div> */}
                    </div>
                    <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                      <button
                        type="submit"
                        className="rounded py-2 my-2 w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 bg-green-600/100 hover:bg-black text-white"
                      >
                        Sign In
                      </button>

                      <div className="my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3 text-decoration-none">
                        <Link href="/account/forgot-password">
                          <a className="text-decoration-none text-gray-600 hover:text-gray-500 font-weight-light">
                            Forgot your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="flex flex-wrap">
              <div className="text-decoration-none mt-3">
                <Link data-testid="create-account-link" href="/account/sign-up">
                  <a
                    data-testid="create-account-page"
                    className="text-decoration-none text-gray-600 hover:text-green-600/100 font-weight-light"
                  >
                    Create account
                  </a>
                </Link>
              </div>
              <div className="mt-3">
                <p className="text-gray-600 ml-1">or sign in with</p>
              </div>
              <div className="flex flex-wrap">
                <button className="mt-3 flex flex-wrap">
                  <img
                    className="md:ml-2 lg:ml-2 xl:ml-2 mt-1"
                    src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                    height={15}
                    width={15}
                  />
                  <p className="ml-2 mt-1 text-xs">Google</p>
                </button>
                <div className="mt-3">
                  <p className="text-gray-600 ml-1">or</p>
                </div>
                <button className="mt-3 flex flex-wrap">
                  <img
                    src="https://cdn.cdnlogo.com/logos/f/9/facebook.svg"
                    height={38}
                    width={35}
                  />
                  <p className="mt-1 text-xs">Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

// phone no: 012345673139
//email: sbs@gmail.com
// Pass: 123456
