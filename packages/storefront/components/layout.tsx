import type { NextComponentType } from "next";
import Footer from "./global/components/footer";
import Header from "./global/components/header";
import Viewport from "./viewport";
import { useEffect } from "react";
import { useAppSelector } from "customHooks/hooks";
import { useSelector } from "react-redux";
import Axios from "axios";

const Layout: NextComponentType = ({ children }: any) => {
<<<<<<< HEAD
    let token = useSelector((state: any) => state.persistedReducer.auth.access_token);
    useEffect(() => {
        Axios.defaults.headers.common = {
            Authorization: `Bearer ${token}`,
        };
    }, [token]);
    return (
        <>
            <Viewport />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
=======
  let token = useSelector(
    (state: any) => state.persistedReducer.auth.access_token
  );
  useEffect(() => {
    Axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }, [token]);
  return (
    <>
      <Viewport />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
>>>>>>> b358c3a9b0285e138bc387e1166d6192754c7efa
};

export default Layout;
