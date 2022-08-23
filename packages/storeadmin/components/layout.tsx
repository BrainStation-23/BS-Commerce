import type { NextComponentType } from "next";
import HeaderBar from "./headerBar";
import Navbar from "./navbar";
import Viewport from "./viewport";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
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
