import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeUserToken } from 'toolkit/authSlice';

import CartDropdown from '@/components/cart/cartDropdown/dropdownCart';
import Modal from './modal';

interface Properties {}

const HeaderAccount: React.FC<Properties> = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const showCartDropDown = () => {
    setShowCartDropdown(!showCartDropdown);
  };

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const wishlistItems = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );

  const user = useAppSelector((state) => state.persistedReducer.user.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.success('Logged out successfully!');
  };

  const handleClickWishlist = () => {
    if (token) {
      router.push('/wishlist');
    } else {
      toast.error('Please login to your account first.');
      router.push('/account/sign-in');
    }
  };

  const links = [
    { name: 'Register', link: '/account/sign-up' },
    { name: 'Login', link: '/account/sign-in' },
    { name: 'Wishlist', link: '/wishlist' },
    { name: 'Logout', link: '/account/sign-in' },
    { name: `${user}`, link: '/myAccount' },
  ];
  return (
    <>
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          trigger={handleLogout}
          modalTitle="Logout"
        />
      )}
      <div className="flex flex-row items-center gap-x-3">
        <span className="my-0 uppercase">
          {token !== '' ? (
            <div className="flex flex-wrap gap-2">
              <div className="group relative cursor-pointer normal-case">
                <p className='hover:text-green-600'>{links[4].name}</p>
                <div
                  className={`absolute -left-[20px] mt-2 top-[20px] z-50 hidden overflow-hidden whitespace-nowrap bg-white px-6 py-6 shadow-lg transition-all duration-300 ease-in group-hover:inline-block`}
                >
                  <ul>
                    <Link href="/myAccount" passHref>
                      <li className="transition-all duration-100 ease-linear hover:text-green-600">
                        My Profile
                      </li>
                    </Link>
                    <Link href="/order" passHref>
                      <li className="transition-all duration-100 ease-linear hover:text-green-600">
                        Orders
                      </li>
                    </Link>
                    <Link href="/myAccount/addresses" passHref>
                      <li className="transition-all duration-100 ease-linear hover:text-green-600">
                        Manage Addresses
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

              <Link href={links[3].link}>
                <a
                  onClick={() => setModalOn(true)}
                  className="cursor-pointer transition-all duration-100 ease-linear hover:text-green-600"
                >
                  {links[3].name}
                </a>
              </Link>
            </div>
          ) : (
            <>
              <Link href={links[0].link}>
                <a className="cursor-pointer transition-all duration-100 ease-linear hover:text-green-600">
                  {links[0].name}
                </a>
              </Link>
              <span className="mx-1">/</span>
              <Link href={links[1].link}>
                <a className="cursor-pointer transition-all duration-100 ease-linear hover:text-green-600">
                  {links[1].name}
                </a>
              </Link>
            </>
          )}
        </span>
        <button onClick={handleClickWishlist}>
          <div className="flex hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green- h-6 w-6 cursor-pointer transition-all duration-100 ease-linear hover:text-green-600"
              fill={
                wishlistItems?.items?.length! > 0 && token !== ''
                  ? `green`
                  : `none`
              }
              viewBox="0 0 24 24"
              stroke={
                wishlistItems?.items?.length! > 0 && token !== ''
                  ? `none`
                  : `currentColor`
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className=''>
              {wishlistItems?.items?.length! > 0 && token !== ''
                ? wishlistItems?.items?.length
                : 0}
            </span>
          </div>
        </button>
        <span className="z-50 mt-2 text-sm" onClick={(e) => showCartDropDown()}>
          <CartDropdown />
        </span>
        <Link href="/order" passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer transition-all duration-100 ease-linear hover:text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default HeaderAccount;
