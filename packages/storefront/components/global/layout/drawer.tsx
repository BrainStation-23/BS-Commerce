import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeUserToken } from 'toolkit/authSlice';

import CartDropdown from '@/components/cart/cartDropdown/dropdownCart';
import Modal from '../components/modal/modal';
import { resetAddress } from 'toolkit/customerAddressSlice';
import { resetUserDetails } from 'toolkit/userSlice';
import { resetWishilist } from 'toolkit/productsSlice';
import { resetCart } from 'toolkit/cartSlice';
import { useSelector } from 'react-redux';
import { setModalState } from 'toolkit/modalSlice';

import {
  ChevronLeftIcon,
  GearOutlineIcon,
  MapPinOutlineIcon,
  ShoppingBagOutlineIcon,
  UserOutlineIcon,
} from './headerIcons';

interface Props {
  drawer: boolean;
  closeDrawer: () => void;
}

const Drawer: React.FC<Props> = ({ drawer, closeDrawer }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );
  const customer = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );

  const user: string = customer.name
    ? customer.name
    : customer.email
    ? customer.email
    : '';

  const getUsername = (name: string): string => {
    let computedName = '';
    const length = name.length;
    if (length > 20) {
      computedName = name.slice(0, 19);
      computedName += '...';
    } else computedName = name;

    return computedName;
  };

  const handleButtonClick = (path: string) => {
    closeDrawer();
    router.push(path);
  };

  const handleAuthState = () => {
    closeDrawer();
    if (token) {
      localStorage.clear();
      dispatch(resetAddress());
      dispatch(resetUserDetails());
      dispatch(resetWishilist());
      dispatch(resetCart());
      dispatch(storeUserToken(''));
      router.push('/account/sign-in');
      toast.error('Logged out successfully!', {
        containerId: 'bottom-right',
      });
    } else {
      router.push('/account/sign-in');
    }
  };

  return (
    <div
      className={`fixed top-0 z-50 flex h-full w-full flex-col justify-between bg-white px-8 py-4 transition duration-200 ease-in lg:hidden ${
        drawer ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="">
        <div className="">
          <button className="mr-4 text-green-600" onClick={() => closeDrawer()}>
            <ChevronLeftIcon />
          </button>
          <span className="text-3xl font-medium text-green-600">
            BS Commerce
          </span>
        </div>
        <div className="font-medium">
          <div className="my-5 border-b border-t py-4">
            <button
              className="mb-3 flex flex-row items-center"
              onClick={() => handleButtonClick('/myAccount')}
            >
              <div className="m-2 inline rounded-full border border-gray-700 p-2">
                <UserOutlineIcon />
              </div>
              <button className="flex flex-col">
                <span>My Account</span>
                <span>{getUsername(user)}</span>
              </button>
            </button>

            <button
              className="flex"
              onClick={() => handleButtonClick('/order')}
            >
              <ShoppingBagOutlineIcon />
              <span className="ml-2">My Order</span>
            </button>
          </div>

          <button
            className="mb-4 flex"
            onClick={() => handleButtonClick('/myAccount/addresses')}
          >
            <MapPinOutlineIcon />
            <span className="ml-2">Address</span>
          </button>

          {/* <button className="flex">
            <GearOutlineIcon />
            <span className="ml-2">Settings</span>
          </button> */}
        </div>
      </div>
      <button
        className="w-full rounded-full border-2 border-green-600 py-2 text-green-600"
        onClick={() => handleAuthState()}
      >
        {token ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Drawer;
