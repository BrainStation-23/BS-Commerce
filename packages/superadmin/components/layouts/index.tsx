import type { NextComponentType } from "next";

import Sidebar from "./sidebar";
import { useState, useEffect } from "react";
import global from "./styles/global.module.css";
import Viewport from "./viewport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout: NextComponentType = ({ children }) => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  const [adjustFullContainer, setAdjustFullContainer] = useState(false);
  const adjustContainer = () => {
    setAdjustFullContainer(!adjustFullContainer);
  };
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
