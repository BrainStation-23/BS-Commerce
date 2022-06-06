import React from "react";

interface Properties {
  placeholder: string;
}

const Search: React.FC<Properties> = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-between h-12 border border-slate-200 rounded-full text-sm w-full`}
    >
      <input
        className="ml-4 bg-white focus:outline-none"
        type="search"
        name="search"
        placeholder={`${props.placeholder}`}
      />
      <div className="flex justify-center bg-green-600 w-14 h-full rounded-r-full hover:bg-stone-900 transition-all duration-200 ease-linear cursor-pointer">
        <button type="submit" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
