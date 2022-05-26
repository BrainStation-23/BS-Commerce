import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import Footer from "./footer";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: NextComponentType = (props: any) => {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <Viewport />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
