import React, { useState, FC } from "react";
import CartDropdown from "../../cart/cartDropdown/dropdownCart";
import allCartList from "../../../allData/cart-data.json";
const HeaderAccount: FC = (props) => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const showCartDropDown = () => {
    setShowCartDropdown(!showCartDropdown);
  };
  return (
    <div className="flex flex-row gap-x-3 items-center">
      <span className="uppercase my-0">Register / Login</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
      <span className="z-50 text-sm" onClick={(e) => showCartDropDown()}>
        <CartDropdown />
      </span>
    </div>
  );
};

export default HeaderAccount;
