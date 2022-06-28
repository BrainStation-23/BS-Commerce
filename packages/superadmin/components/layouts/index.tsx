import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer } from "react-toastify";
import { User } from "models";

import "react-toastify/dist/ReactToastify.css";

import { useAppSelector } from "../../redux-hooks";
import { userAPI } from "../../APIs";

import HeaderBar from "./headerBar";
import Sidebar from "./sidebar";

const Layout: NextComponentType = ({ children }) => {
  const [userData, setUserData] = useState<User>();
  const [showSidebar, setShowSidebar] = useState(false);

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

    async function getProfile() {
      const response = await userAPI.getUserProfile();
      setUserData(response?.data);
    }
    getProfile();
  }, []);

  const toggleSidebar = (sideBarStatus: boolean) => {
    setShowSidebar(sideBarStatus);
  };

  if (pathname.includes("/account")) {
    return <>{children}</>;
  }

  return (
    <>
      <ToastContainer />
      <div className="d-flex">
        <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        <div className="d-flex flex-column" style={{ width: "100%" }}>
          <div style={{ height: "56px", width: "100%" }}>
            <HeaderBar
              toggleSidebar={toggleSidebar}
              showSidebar={showSidebar}
              displayName={userData?.displayName}
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
