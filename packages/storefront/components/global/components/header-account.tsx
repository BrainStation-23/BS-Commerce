import React from "react";

interface Properties {}

const HeaderAccount: React.FC<Properties> = (props) => {
  return (
    <div className="flex flex-row gap-x-3">
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
      <span className="bg-slate-300 rounded-full ml-2 px-1 text-sm">0</span>
    </div>
  );
};

export default HeaderAccount;
