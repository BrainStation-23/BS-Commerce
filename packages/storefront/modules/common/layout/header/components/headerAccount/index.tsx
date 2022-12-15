import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import { storeUserToken } from 'store/slices/authSlice';

import CartDropdown from '@/modules/cart/components/cartDropdown';
import HeartIcon from '@/modules/common/icons/heartIcon';
import Modal from '@/modules/common/modal/modal';
import useTranslation from 'next-translate/useTranslation';
import { resetCart } from 'store/slices/cartSlice';
import { resetCompare } from 'store/slices/compareSlice';
import { resetAddress } from 'store/slices/customerAddressSlice';
import { setModalState } from 'store/slices/modalSlice';
import { resetWishilist } from 'store/slices/productsSlice';
import { resetUserDetails } from 'store/slices/userSlice';

interface Properties {}

const HeaderAccount: React.FC<Properties> = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [modalOnWishlist, setModalOnWishlist] = useState(false);
  const [choice, setChoice] = useState(false);
  const [modalCmp, setModalCmp] = useState(false);

  const comparisonProducts = useAppSelector(
    (state) => state?.persistedReducer?.compare?.compareList?.items
  );

  const showCartDropDown = () => {
    setShowCartDropdown(!showCartDropdown);
  };

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const wishlistItems = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );

  const customer = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );

  const user = customer?.name
    ? customer?.name
    : customer?.email
    ? customer?.email
    : customer?.phone;

  const handleLogout = () => {
    localStorage.removeItem('persist:root');
    dispatch(resetAddress());
    dispatch(resetUserDetails());
    dispatch(resetWishilist());
    dispatch(resetCart());
    dispatch(resetCompare());
    dispatch(storeUserToken(''));
    router.push('/account/sign-in');
    toast.error('Logged out successfully!', {
      containerId: 'bottom-right',
    });
  };

  const getUsername = (name: string): string => {
    let computedName = '';
    const length = name.length;
    if (length > 20) {
      computedName = name.slice(0, 19);
      computedName += '...';
    } else computedName = name;

    return computedName;
  };

  const handleClickWishlist = () => {
    if (token) {
      router.push('/wishlist');
    } else {
      setModalOnWishlist(true);
    }
  };

  const links = [
    { name: `${t('common:register')}`, link: '/account/sign-up' },
    { name: `${t('common:login')}`, link: '/account/sign-in' },
    { name: `${t('common:wishlist')}`, link: '/wishlist' },
    { name: `${t('common:logout')}`, link: '/account/sign-in' },
    { name: `${user}`, link: '/myAccount' },
  ];
  return (
    <>
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          trigger={handleLogout}
          modalTitle={t('common:logout')}
          bodyText={t('common:are_you_sure')}
        />
      )}
      {modalOnWishlist && (
        <Modal
          setModalOn={setModalOnWishlist}
          setChoice={setChoice}
          modalTitle="You need to login first."
          bodyText="Proceed to login?"
        />
      )}

      <div className="flex flex-col gap-x-3 lg:flex-row lg:items-center">
        <span className="my-0 uppercase">
          {token !== '' ? (
            <div className="flex flex-wrap gap-2">
              <div
                className="group relative cursor-pointer normal-case"
                id="NavProfileDiv"
              >
                <p
                  className="hover:text-primary dark:text-dark_text dark:hover:text-dark_primary"
                  id="user-name"
                >
                  {getUsername(links[4].name)}
                </p>
                <div
                  id="navProfileDropdown"
                  className={`absolute -left-[20px] top-[20px] z-40 hidden overflow-hidden whitespace-nowrap bg-white  px-6 py-6 text-left shadow-lg transition-all duration-300 ease-in group-hover:inline-block dark:bg-dark_bg dark:text-dark_text`}
                >
                  <ul className="">
                    <Link href="/wishlist" passHref legacyBehavior>
                      <li className="transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary">
                        {t('common:wishlist')}
                      </li>
                    </Link>
                    <li
                      className="transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary"
                      onClick={() => {
                        comparisonProducts[0]
                          ? dispatch(setModalState(!modalCmp))
                          : toast.warning('Comparision list is empty.', {
                              containerId: 'bottom-right',
                            });
                      }}
                    >
                      {t('common:comparison')}
                    </li>
                    <Link href="/myAccount" passHref legacyBehavior>
                      <li className="transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary ">
                        {t('common:profile')}
                      </li>
                    </Link>
                    <Link href="/myAccount/addresses" passHref legacyBehavior>
                      <li className="transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary">
                        {t('common:manage_addresses')}
                      </li>
                    </Link>
                    <Link href="/order" passHref legacyBehavior>
                      <li className="transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary">
                        {t('common:orders')}
                      </li>
                    </Link>
                    <hr className="my-2" />
                    <Link href="#" passHref legacyBehavior>
                      <li
                        onClick={() => setModalOn(true)}
                        className="transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary"
                      >
                        {links[3].name}
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link
                href={links[0].link}
                id="registerbtn"
                className="cursor-pointer transition-all duration-100 ease-linear hover:text-primary dark:text-dark_text dark:hover:text-dark_primary"
              >
                {links[0].name}
              </Link>
              <span className="mx-1 dark:text-dark_text">/</span>
              <Link
                href={links[1].link}
                id="login"
                className="cursor-pointer transition-all duration-100 ease-linear hover:text-primary dark:text-dark_text"
              >
                {links[1].name}
              </Link>
            </>
          )}
        </span>
        <div className="flex flex-row items-center gap-x-1">
          <button type="button" onClick={handleClickWishlist}>
            <div
              className={`${
                wishlistItems?.items?.length! > 0 && token !== ''
                  ? 'fill-primary stroke-primary dark:fill-dark_primary dark:stroke-dark_primary'
                  : 'fill-white stroke-dark_bg dark:fill-dark_bg dark:stroke-dark_text'
              } flex text-base hover:stroke-primary hover:text-primary dark:text-dark_text dark:hover:stroke-dark_primary dark:hover:text-dark_primary`}
            >
              <HeartIcon height="h-6" width="w-6" />
              <div>
                {wishlistItems?.items?.length! > 0 && token !== ''
                  ? wishlistItems?.items?.length
                  : 0}
              </div>
            </div>
          </button>
          <span
            className="z-30 mt-2 text-sm"
            onClick={(e) => {
              if (document.body.clientWidth >= 1024) {
                //showCartDropDown();
              } else {
                router.push('/cart');
              }
            }}
          >
            <CartDropdown />
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderAccount;
