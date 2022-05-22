import type { NextComponentType } from "next";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Viewport />
      <Header />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
