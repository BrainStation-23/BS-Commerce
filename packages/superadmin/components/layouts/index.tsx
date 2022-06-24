import type { NextComponentType } from "next";

import Sidebar from "./sidebar";
import { useState, useEffect } from "react";
import global from "./styles/global.module.css";
import Viewport from "./viewport";
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
        <div className="row">
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
