import type { NextComponentType } from "next";
import Footer from "./global/components/footer";
import FooterTop from "./global/components/footer-top";
import HeaderMiddle from "./global/components/header-middle";
import HeaderTop from "./global/components/header-top";
import Navbar from "./global/components/navbar";
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
