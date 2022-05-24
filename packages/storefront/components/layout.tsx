import type { NextComponentType } from "next";
import Footer from "./footer";
import FooterTop from "./footer-top";
import HeaderMiddle from "./header-middle";
import HeaderTop from "./header-top";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Viewport />
      <HeaderTop />
      <HeaderMiddle />
      <Navbar />
      <main>{children}</main>
      <FooterTop />
      <Footer />
    </>
  );
};

export default Layout;
