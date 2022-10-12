import { useEffect } from 'react';
import Axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from 'store/hooks/index';

import Footer from '@/components/global/layout/footer';
import Header from '@/components/global/layout/header';
import Viewport from '@/components/viewport';
import { XCircleIcon } from './global/layout/headerIcons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  setCartModalState,
  setLoginModalState,
  setModalState,
} from 'store/slices/modalSlice';
import ModalLogin from '@/components/global/components//modal/modal';
import CartModal from '@/components/global/components/modal/cartModal';
import ComparisonModal from '@/components/comparison';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  let token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
  );

  const modalStateLogin = useAppSelector(
    (state) => state.persistedReducer.modal.setModalLogin
  );

  const modalStateCart = useAppSelector(
    (state) => state.persistedReducer.modal?.setModalCart?.showModal
  );

  const modalProduct = useAppSelector(
    (state) => state.persistedReducer.modal?.setModalCart?.product
  );

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const closeCartModal = () => {
    setShowCartModal(false);
    dispatch(setCartModalState({ showModal: false }));
  };

  useEffect(() => {
    dispatch(setModalState(false));
    dispatch(setLoginModalState(false));
    dispatch(setCartModalState({ showModal: false }));
  }, [router.asPath]);

  useEffect(() => {
    Axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }, [token]);
  useEffect(() => {
    dispatch(setModalState(false));
  }, [router.asPath]);

  return (
    <>
      {modalState && <ComparisonModal setModal={true} />}
      {modalStateLogin && (
        <ModalLogin
          setModalOn={setModalOn}
          setChoice={setChoice}
          modalTitle="You need to login first."
          bodyText="Proceed to login?"
        />
      )}

      {modalStateCart && (
        <CartModal
          open={modalStateCart}
          onClose={closeCartModal}
          product={modalProduct!}
        />
      )}
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
        toastClassName="w-full border-2 border-primary"
        style={
          document.body.clientWidth < 484
            ? {
                marginRight: '60px',
                left: '10px',
                bottom: '50px',
                width: '75%',
              }
            : {}
        }
        containerId={'bottom-left'}
        position="bottom-left"
      />
    </>
  );
};

export default Layout;
