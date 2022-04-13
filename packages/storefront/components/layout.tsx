import type { NextComponentType } from "next";
import Footer from "./footer";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: NextComponentType = (props) => {
  const { children } = props;
  return (
    <>
      <Viewport />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
