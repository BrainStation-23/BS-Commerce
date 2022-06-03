import { FC } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: FC = ({ children }) => {
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
