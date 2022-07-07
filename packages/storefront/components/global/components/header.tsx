import Link from 'next/link';

import { useRouter } from 'next/router';
import type { NextComponentType, GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

import { useAppSelector } from 'customHooks/hooks';

import { getCategoryList } from 'models';
import Currency from '@/components/global/components/currency';
import HeaderAccount from '@/components/global/components/header-account';
import Language from '@/components/global/components/languages';
import Search from '@/components/global/components/search';
import { userAPI } from 'APIs';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await userAPI.getCategoryList();
  console.log(res);
  return {
    props: {
      menuItems: res,
    },
  };
};
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
  const [stickyClass, setStickyClass] = useState('relative');
  const customerNumber = '+880 1674314359';
  const { pathname } = useRouter();
  const categories = useAppSelector(
    (state) => state.persistedReducer.category.category
  );

  console.log(categories);

  const allCategories: menuLink[] = [];
  categories.categories.forEach((category) => {
    allCategories.push({
      name: category.name,
      link: `/collections/${category.id}`,
      hasSubmenu: false,
    });
  });
  // const allCategories: menuLink[] = [
  //   { name: "vegetable", link: "/", hasSubmenu: true },
  //   { name: "fruits", link: "/", hasSubmenu: true },
  //   { name: "salads", link: "/", hasSubmenu: true },
  //   { name: "fish & seafood", link: "/", hasSubmenu: false },
  //   { name: "fresh meat", link: "/", hasSubmenu: false },
  //   { name: "butter & eggs", link: "/", hasSubmenu: false },
  //   { name: "milk", link: "/", hasSubmenu: false },
  //   { name: "oil & vinegars", link: "/", hasSubmenu: false },
  //   { name: "bread", link: "/", hasSubmenu: false },
  // ];

  const menus: menuLink[] = [
    {
      name: 'home',
      link: '/',
      hasSubmenu: true,
      submenu: [
        { name: 'Home - 1', link: '/' },
        { name: 'Home - 2', link: '/' },
        { name: 'Home - 3', link: '/' },
      ],
    },
    {
      name: 'shop',
      link: '/',
      hasSubmenu: true,
      submenu: [
        { name: 'Cucumber', link: '/' },
        { name: 'Papaya', link: '/' },
        { name: 'Mango', link: '/' },
      ],
    },
    {
      name: 'product',
      link: '/',
      hasSubmenu: true,
      submenu: [
        { name: 'Simple Product', link: '/' },
        { name: 'Variable Product', link: '/' },
        { name: 'Affiliate Product', link: '/' },
      ],
    },
    { name: 'blog', link: '/', hasSubmenu: false },
    {
      name: 'pages',
      link: '/',
      hasSubmenu: true,
      submenu: [
        { name: 'About Us', link: '/about' },
        { name: 'Service', link: '/service' },
        { name: 'FAQ', link: '/faq' },
      ],
    },
    { name: 'contact', link: '/contact', hasSubmenu: false },
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
            'lg:fixed lg:top-0 lg:left-0 lg:z-50 lg:bg-white/95 lg:w-full lg:shadow-lg'
          )
        : setStickyClass('relative');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setStickyNavbar);

    return () => {
      window.removeEventListener('scroll', setStickyNavbar);
    };
  }, []);

  // put the pathname in 'includes' where header needs to be hidden

  if (pathname.includes('/checkout')) {
    return null;
  }

  return (
    <>
      {/* Top portion */}
      <header className="hidden justify-center border-b border-slate-200 py-2 lg:flex">
        <div className="container flex justify-between px-4 text-sm">
          <div className="space-x-2">
            <Language />
            <span>|</span>
            <Currency />
          </div>
          <div className="space-x-3"></div>
        </div>
      </header>
      {/* Middle portion */}
      <div className="mb-2 flex justify-center py-4 lg:pt-8 lg:pb-6">
        <div className="container flex items-center justify-between px-4">
          <span className="text-3xl font-bold">
            <Link href="/">
              <a>BS Commerce</a>
            </Link>
          </span>
          <span className="hidden w-2/5 lg:inline-block lg:w-[479px]">
            <Search placeholder="Search our store" />
          </span>
          <span className="hidden lg:inline-block">
            <HeaderAccount />
          </span>

          <span
            className="border border-gray-700 p-1 lg:hidden"
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
              className="relative mb-3 mr-0 flex w-full cursor-pointer flex-row items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white lg:mb-0 lg:mr-2 lg:w-56 lg:rounded-t-xl lg:rounded-b-none lg:py-3"
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
              className={`absolute top-[40px] z-40 flex w-11/12 flex-col gap-y-4 overflow-hidden rounded-b-sm bg-white px-4 py-3 text-base text-black shadow-md transition-all duration-500 ease-in md:w-[96%] lg:top-[48px] lg:w-56 ${
                isOpen ? 'h-[350px]' : 'h-0 opacity-0'
              }`}
            >
              {allCategories.map((category) => (
                <div
                  key={category.name}
                  className="flex flex-row justify-between text-sm"
                >
                  <Link href={category.link}>
                    <a className="cursor-pointer capitalize transition-all duration-100 ease-linear hover:text-green-600">
                      {category.name}
                    </a>
                  </Link>
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
              className={`fixed top-0 z-40 flex h-full w-72 flex-col items-center gap-y-8 bg-slate-50 px-4 py-2 shadow-2xl transition-all duration-300 ease-linear lg:static lg:h-fit lg:bg-slate-50/0 lg:p-0 lg:px-8 lg:shadow-none ${
                menu ? 'left-0' : '-left-72'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto mb-2 h-10 w-10 lg:hidden"
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
              <div className="w-full lg:hidden">
                <Search placeholder="Search our store" />
              </div>
              <div className="lg:hidden" onClick={closeMenu}>
                <HeaderAccount />
              </div>
              <div className="flex flex-row items-center text-right text-sm text-gray-900 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-7 w-7"
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
              <ul className="my-0 flex w-full list-none flex-col lg:flex-row lg:gap-x-6">
                {menus.map((menu) => (
                  <li key={menu.name} className="group">
                    <Link href={menu.link}>
                      <a
                        className="relative flex cursor-pointer flex-row items-center justify-between border-b border-slate-200 py-4 capitalize transition-all duration-100 ease-linear hover:text-green-600 lg:border-none lg:py-0 lg:font-medium"
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
                        className={`absolute hidden overflow-hidden bg-white px-6 py-6 shadow-lg transition-all duration-300 ease-in lg:group-hover:inline-block`}
                      >
                        <ul className="">
                          {menu.submenu?.map((menu) => (
                            <li
                              key={menu.name}
                              className="cursor-pointer py-2 text-sm transition-all duration-100 ease-linear hover:text-green-600"
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

            <div className="ml-auto hidden flex-row items-center gap-x-2 text-right text-sm text-gray-900 lg:flex">
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
