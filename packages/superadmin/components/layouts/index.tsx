import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";

import { useAppSelector } from "../../redux-hooks";

import Sidebar from "./sidebar";
import Viewport from "./viewport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import global from "./styles/global.module.css";

const Layout: NextComponentType = ({ children }) => {
  const { pathname } = useRouter();
  const router = useRouter();
  const token = useAppSelector((state) => state.persistedReducer.auth.token);

  if (!token && !pathname.includes("/account")) {
    router.push("/account/login");
  } else {
    Axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    // redirect to login if no token found
  }, []);

  const [adjustFullContainer, setAdjustFullContainer] = useState(false);
  const adjustContainer = () => {
    setAdjustFullContainer(!adjustFullContainer);
  };

  if (pathname.includes("/account")) {
    return <>{children}</>;
  }

  return (
    <>
      {/* <Viewport /> */}
      <div className="">
        <ToastContainer />
        <div className="row container-fluid">
          <Sidebar adjustContainer={adjustContainer} />
          <div
            className={
              adjustFullContainer
                ? global.cotaniner_narrow
                : global.container_broad
            }
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
