import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Axios from "axios";
import { ToastContainer } from "react-toastify";
import jwt from "jsonwebtoken";
import "react-toastify/dist/ReactToastify.css";

import { useAppSelector } from "../redux-hooks";

import HeaderBar from "./headerBar";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: NextComponentType = ({ children }) => {
  const { pathname } = useRouter();
  const router = useRouter();
  const token = useAppSelector((state) => state.persistedReducer.auth.token);
  // console.log(token);

  // try {
  //   let decoded = jwt.verify(token, "@BS23@!46");
  //   console.log(decoded);
  // } catch (error: any) {
  //   console.log(error);
  // }

  useEffect(() => {
    if (!token && !pathname.includes("/account")) {
      router.push("/account/login");
    } else {
      Axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
    }
  }, []);

  if (pathname.includes("/account")) {
    return <>{children}</>;
  }

  return (
    <>
      <Viewport />
      <HeaderBar />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          {children}
        </div>
      </div>
      <ToastContainer theme="colored"/>

    </>
  );
};

export default Layout;
