import React, { useEffect, useState } from "react";
import Link from "next/link";
import CartDropdown from "../../cart/cartDropdown/dropdownCart";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import { useRouter } from "next/router";
import { storeUserToken } from "toolkit/authSlice";

interface Properties {}

const HeaderAccount: React.FC<Properties> = (props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const showCartDropDown = () => {
    setShowCartDropdown(!showCartDropdown);
  };
  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(""));
    router.push("/account/sign-in");
  };

  const links = [
    { name: "Register", link: "/account/sign-up" },
    { name: "Login", link: "/account/sign-in" },
    { name: "Wishlist", link: "/wishlist" },
    { name: "Logout", link: "/home" },
  ];
  return (
    <div className="flex flex-row items-center gap-x-3">
      <span className="uppercase my-0">
        {token !== "" ? (
          <Link href={links[0].link}>
            <a
              onClick={() => handleLogout()}
              className="hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer"
            >
              {links[3].name}
            </a>
          </Link>
        ) : (
          <>
            <Link href={links[0].link}>
              <a className="hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer">
                {links[0].name}
              </a>
            </Link>
            <span className="mx-1">/</span>
            <Link href={links[1].link}>
              <a className="hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer">
                {links[1].name}
              </a>
            </Link>
          </>
        )}
      </span>
      <Link href="/wishlist" passHref>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Link>
      <span className="z-50 text-sm" onClick={(e) => showCartDropDown()}>
        <CartDropdown />
      </span>
    </div>
  );
};

export default HeaderAccount;
