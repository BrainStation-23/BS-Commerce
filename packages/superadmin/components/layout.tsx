import type { NextComponentType } from "next";
import HeaderBar from "./headerBar";
import Navbar from "./navbar";
import Viewport from "./viewport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout: NextComponentType = ({ children }) => {
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
      <ToastContainer />
    </>
  );
};

export default Layout;
