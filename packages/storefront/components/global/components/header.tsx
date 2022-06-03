import type { NextComponentType } from "next";
import { useState, useEffect } from "react";

const Header: NextComponentType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");

  const allCategories = [
    { name: "vegetable" },
    { name: "fruits" },
    { name: "salads" },
    { name: "fish & seafood" },
    { name: "fresh meat" },
    { name: "butter & eggs" },
    { name: "milk" },
    { name: "oil & vinegars" },
    { name: "bread" },
  ];

  const menus = [
    { name: "home" },
    { name: "shop" },
    { name: "product" },
    { name: "blog" },
    { name: "pages" },
    { name: "contact" },
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const setStickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight >= 140
        ? setStickyClass(
            "lg:fixed lg:top-0 lg:left-0 lg:z-50 lg:bg-white/95 lg:w-full lg:shadow-lg"
          )
        : setStickyClass("static");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setStickyNavbar);

    return () => {
      window.removeEventListener("scroll", setStickyNavbar);
    };
  }, []);

  return (
    <>
      {/* Top portion */}
      <header className="hidden lg:flex justify-center py-2 border-b border-slate-200">
        <div className="flex justify-between container text-sm px-3">
          <div className="space-x-2">
            <div className="group inline-block relative">
              <button className="inline-flex items-center">
                <span className="mr-1">English</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  English
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  Arabic
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  French
                </li>
              </ul>
            </div>
            <span>|</span>
            <div className="group inline-block relative">
              <button className="inline-flex items-center">
                <span className="mr-1">USD</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  USD
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  EUR
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  GBP
                </li>
              </ul>
            </div>
          </div>
          <div className="space-x-3"></div>
        </div>
      </header>
      {/* Middle portion */}
      <div className="flex justify-center py-4 mb-2">
        <div className="flex justify-between items-center container px-3">
          <span className="text-2xl font-bold">BS Commerce</span>
          <div className="hidden lg:flex flex-row items-center justify-between h-12 border border-slate-200 rounded-full text-sm w-2/4">
            <input
              className="ml-4 bg-white focus:outline-none"
              type="search"
              name="search"
              placeholder="Search our store"
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
          <div className="hidden lg:flex flex-row gap-x-3">
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
            <span className="bg-slate-300 rounded-full ml-2 px-1 text-sm">
              0
            </span>
          </div>
          <span
            className="lg:hidden border border-gray-700 p-1"
            onClick={() => setMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* Navbar */}
      <nav className={`flex justify-center ${stickyClass}`}>
        <div className="container px-3">
          <div className="flex flex-row items-center">
            <div
              className="flex flex-row items-center relative rounded-xl mb-3 lg:mb-0 lg:rounded-t-xl lg:rounded-b-none bg-green-600 text-white px-4 py-4 font-medium w-full lg:w-72 cursor-pointer mr-2"
              onClick={toggleOpen}
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="ml-4 mr-auto">All Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div
              className={`z-50 flex flex-col gap-y-4 absolute overflow-hidden bg-white text-black text-base w-full lg:w-72 px-4 py-3 top-[143px] lg:top-[57px] rounded-b-sm shadow-md transition-all duration-500 ease-in ${
                isOpen ? "h-[380px]" : "h-0 opacity-0"
              }`}
            >
              {allCategories.map((category) => (
                <div key={category.name}>
                  <a className="capitalize">{category.name}</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:hidden h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div
              className={`shadow-2xl fixed bg-slate-50 lg:static lg:bg-slate-50/0 h-screen lg:h-fit w-72 top-0 z-50 lg:shadow-none p-8 lg:p-0 transition-all duration-500 ease-in ${
                menu ? "left-0" : "-left-72"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-auto lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => setMenu(!menu)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <ul className="list-none flex lg:flex-row flex-col lg:gap-x-6 my-0">
                {menus.map((menu) => (
                  <li key={menu.name}>
                    <a className="lg:font-medium flex flex-row capitalize justify-between items-center border-b border-slate-200 py-4 lg:border-none lg:py-0">
                      {menu.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden ml-auto lg:flex flex-col text-sm text-gray-900 text-right">
              <span>+880 1674314359</span>
              <span className="flex flex-row items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>{" "}
                Customer Support
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
