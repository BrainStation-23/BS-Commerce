import type { NextComponentType } from "next";
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
