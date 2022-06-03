import type { NextComponentType } from "next";
import Footer from "./global/components/footer";
import Header from "./global/components/header";
import Viewport from "./viewport";

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Viewport />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
