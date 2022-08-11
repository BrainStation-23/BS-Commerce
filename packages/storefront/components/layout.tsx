import { useEffect } from 'react';
import Axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppSelector } from 'customHooks/hooks';

import Footer from '@/components/global/components/footer';
import Header from '@/components/global/components/header';
import Viewport from '@/components/viewport';
import { XCircleIcon } from './global/components/headerIcons';
import Modal from '@/components/comparison';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  let token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );
  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
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
        closeButton={<XCircleIcon size={10} extraClass="hover:fill-red-500" />}
        toastClassName="w-9/12 sm:w-max border-2 border-green-500"
        style={
          document.body.clientWidth < 484
            ? { marginRight: '60px', left: '10px', bottom: '10px' }
            : {}
        }
        containerId={'bottom-left'}
        position="bottom-left"
      />
      {modalState && <Modal setModal={true} />}
    </>
  );
};

export default Layout;
