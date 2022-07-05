import { useEffect } from 'react';
import Axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppSelector } from 'customHooks/hooks';

import Footer from '@/components/global/components/footer';
import Header from '@/components/global/components/header';
import Viewport from '@/components/viewport';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  let token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );
  // console.log("==============from layout", token);

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
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Layout;
