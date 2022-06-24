import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import HeaderBar from "./headerBar";
import Navbar from "./navbar";
import Viewport from "./viewport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout: NextComponentType = ({ children }) => {
  const { pathname } = useRouter();

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
      <ToastContainer />
    </>
  );
};

export default Layout;
