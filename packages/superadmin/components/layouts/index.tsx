import type { NextComponentType } from "next";
import HeaderBar from "./headerBar";
import Sidebar from "./sidebar";
import { useEffect } from "react";
const Layout: NextComponentType = ({ children }) => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <HeaderBar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
