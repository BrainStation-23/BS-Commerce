import { useState, useEffect } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Currency from "./currency";
import HeaderAccount from "./header-account";
import Language from "./languages";
import Search from "./search";

interface menuLink {
  name: string;
  link: string;
  hasSubmenu: boolean;
  submenu?: subLink[];
}

interface subLink {
  name: string;
  link: string;
}

const Header: NextComponentType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const customerNumber = "+880 1674314359";
  const { pathname } = useRouter();

  const allCategories: menuLink[] = [
    { name: "vegetable", link: "/", hasSubmenu: true },
    { name: "fruits", link: "/", hasSubmenu: true },
    { name: "salads", link: "/", hasSubmenu: true },
    { name: "fish & seafood", link: "/", hasSubmenu: false },
    { name: "fresh meat", link: "/", hasSubmenu: false },
    { name: "butter & eggs", link: "/", hasSubmenu: false },
    { name: "milk", link: "/", hasSubmenu: false },
    { name: "oil & vinegars", link: "/", hasSubmenu: false },
    { name: "bread", link: "/", hasSubmenu: false },
  ];

  const menus: menuLink[] = [
    {
      name: "home",
      link: "/",
      hasSubmenu: true,
      submenu: [
        { name: "Home - 1", link: "/" },
        { name: "Home - 2", link: "/" },
        { name: "Home - 3", link: "/" },
      ],
    },
    {
      name: "shop",
      link: "/",
      hasSubmenu: true,
      submenu: [
        { name: "Cucumber", link: "/" },
        { name: "Papaya", link: "/" },
        { name: "Mango", link: "/" },
      ],
    },
    {
      name: "product",
      link: "/",
      hasSubmenu: true,
      submenu: [
        { name: "Simple Product", link: "/" },
        { name: "Variable Product", link: "/" },
        { name: "Affiliate Product", link: "/" },
      ],
    },
    { name: "blog", link: "/", hasSubmenu: false },
    {
      name: "pages",
      link: "/",
      hasSubmenu: true,
      submenu: [
        { name: "About Us", link: "/about" },
        { name: "Service", link: "/service" },
        { name: "FAQ", link: "/faq" },
      ],
    },
    { name: "contact", link: "/contact", hasSubmenu: false },
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setMenu(!menu);
  };

  const setStickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight >= 140
        ? setStickyClass(
            "lg:fixed lg:top-0 lg:left-0 lg:z-50 lg:bg-white/95 lg:w-full lg:shadow-lg"
          )
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setStickyNavbar);

    return () => {
      window.removeEventListener("scroll", setStickyNavbar);
    };
  }, []);

  // put the pathname in 'includes' where header needs to be hidden

  if (pathname.includes("/checkout")) {
    return null;
  }

  return (
    <>
      {/* Top portion */}
      <header className="hidden lg:flex justify-center py-2 border-b border-slate-200">
        <div className="flex justify-between container text-sm px-4">
          <div className="space-x-2">
            <Language />
            <span>|</span>
            <Currency />
          </div>
          <div className="space-x-3"></div>
        </div>
      </header>
      {/* Middle portion */}
      <div className="flex justify-center py-4 mb-2 lg:pt-8 lg:pb-6">
        <div className="flex justify-between items-center container px-4">
          <span className="text-3xl font-bold">
            <Link href="/">
              <a>BS Commerce</a>
            </Link>
          </span>
          <span className="hidden lg:inline-block w-2/5 lg:w-[479px]">
            <Search placeholder="Search our store" />
          </span>
          <span className="hidden lg:inline-block">
            <HeaderAccount />
          </span>

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
        <div className="container px-4">
          <div className="flex flex-row items-center">
            <div
              className="flex flex-row items-center relative rounded-lg mb-3 lg:mb-0 lg:rounded-t-xl lg:rounded-b-none bg-green-600 text-white px-4 py-2 lg:py-3 font-medium w-full lg:w-56 cursor-pointer mr-0 lg:mr-2"
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
              className={`z-50 flex flex-col gap-y-4 absolute overflow-hidden bg-white text-black text-base w-[calc(464px-2rem)] w-dnd md:w-[96%] lg:w-56 px-4 py-3 top-[40px] lg:top-[48px] rounded-b-sm shadow-md transition-all duration-500 ease-in ${
                isOpen ? "h-[350px]" : "h-0 opacity-0"
              }`}
            >
              {allCategories.map((category) => (
                <div
                  key={category.name}
                  className="flex flex-row justify-between text-sm"
                >
                  <a className="capitalize hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer">
                    {category.name}
                  </a>
                  <div className="md:hidden">
                    {category.hasSubmenu && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Menu */}
            <div
              className={`fixed flex flex-col gap-y-8 items-center bg-slate-50 lg:static lg:bg-slate-50/0 h-full lg:h-fit w-72 top-0 z-50 lg:shadow-none px-4 lg:px-8 py-2 lg:p-0 transition-[left] duration-300 ease-linear ${
                menu ? "left-0 dnd-shadow" : "-left-72"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 ml-auto lg:hidden mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                onClick={() => setMenu(!menu)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="lg:hidden w-full">
                <Search placeholder="Search our store" />
              </div>
              <div className="lg:hidden" onClick={closeMenu}>
                <HeaderAccount />
              </div>
              <div className="lg:hidden flex flex-row text-sm items-center text-gray-900 text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 mr-2"
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
                </svg>
                <div className="flex flex-col">
                  <span>+880 1674314359</span>
                  <span className="flex flex-row items-center gap-x-1">
                    Customer Support
                  </span>
                </div>
              </div>
              <ul className="w-full list-none flex lg:flex-row flex-col lg:gap-x-6 my-0">
                {menus.map((menu) => (
                  <li key={menu.name} className="group">
                    <Link href={menu.link}>
                      <a
                        className="relative lg:font-medium flex flex-row capitalize justify-between items-center border-b border-slate-200 py-4 lg:border-none lg:py-0 hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer"
                        onClick={closeMenu}
                      >
                        {menu.name}
                        {menu.hasSubmenu && (
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
                        )}
                      </a>
                    </Link>

                    {menu.hasSubmenu && (
                      <div
                        className={`hidden overflow-hidden absolute lg:group-hover:inline-block transition-all duration-300 ease-in bg-white shadow-lg px-6 py-6`}
                      >
                        <ul className="">
                          {menu.submenu?.map((menu) => (
                            <li
                              key={menu.name}
                              className="py-2 hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer text-sm"
                            >
                              <Link href={menu.link}>
                                <a>{menu.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden ml-auto lg:flex flex-row text-sm text-gray-900 text-right items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              </svg>
              <div className="flex flex-col">
                <span>{customerNumber}</span>
                <span className="flex flex-row items-center gap-x-1">
                  Customer Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
