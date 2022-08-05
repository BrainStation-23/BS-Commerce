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
      <ToastContainer
        enableMultiContainer
        theme="colored"
        containerId={'bottom-right'}
        position="bottom-right"
      />
      <ToastContainer
        enableMultiContainer
        theme="colored"
        toastClassName="sm:w-max border-2 border-green-500"
        style={
          document.body.clientWidth < 484
            ? document.body.clientWidth > 445
              ? { width: '350px', bottom: '30px', left: '10px' }
              : document.body.clientWidth > 400
              ? { width: '270px', bottom: '30px', left: '10px' }
              : { width: '245px', bottom: '30px', left: '10px' }
            : {}
        }
        containerId={'bottom-left'}
        position="bottom-left"
      />
    </>
  );
};

export default Layout;
