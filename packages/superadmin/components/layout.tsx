import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import HeaderBar from "./headerBar";
import Navbar from "./navbar";
import Viewport from "./viewport";

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
    </>
  );
};

export default Layout;
