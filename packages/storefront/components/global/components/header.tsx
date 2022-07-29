import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NextComponentType } from 'next';
import { useState, useEffect } from 'react';

import { useAppSelector } from 'customHooks/hooks';

import Currency from '@/components/global/components/currency';
import HeaderAccount from '@/components/global/components/header-account';
import Language from '@/components/global/components/languages';
import Search from '@/components/global/components/search';
import { HeaderCategory } from './headerCategory';

import {
  ChevronDownIcon,
  MenuIcon,
  PhoneIcon,
  XCircleIcon,
} from './headerIcons';

import { MenuData } from './headerData';

const Header: NextComponentType = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const [showAllCategory, setShowAllCategory] = useState<boolean>(false);
  const [menu, setMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState('relative');
  const customerNumber = '+880 1674314359';
  const { pathname } = useRouter();

  const categoryList = useAppSelector(
    (state) => state.persistedReducer.category.categoryList
  );

  // console.log(categoryList);
  // const minNavbarHeight = `h-[` + (categoryList.length * 30 + 100) + `px]`; // e.g., h-[5*30 + 100px] => h[250px]
  // console.log(minNavbarHeight);

  const toggleOpen = () => {
    setShowAllCategory(!showAllCategory);
  };

  const closeMenu = () => {
    setMenu(!menu);
  };

  const setStickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight >= 140) {
        setStickyClass(
          'lg:fixed lg:top-0 lg:left-0 lg:z-40 lg:bg-white/95 lg:w-full lg:shadow-lg'
        );
        setShowUser(true);
        setShowAllCategory(false);
      } else {
        setStickyClass('relative');
        setShowUser(false);
      }
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
            <MenuIcon />
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`flex justify-center ${stickyClass} z-20`}>
        <div className="container px-4">
          <div className="flex flex-row items-center">
            <div
              className="relative mb-3 mr-0 flex w-full cursor-pointer flex-row items-center rounded-lg bg-green-600 px-4 py-2 text-white lg:mb-0 lg:mr-2 lg:w-56 lg:rounded-t-xl lg:rounded-b-none lg:py-3"
              onClick={toggleOpen}
            >
              <MenuIcon size={6} />
              <span className="ml-4 mr-auto font-medium">All Categories</span>
              <ChevronDownIcon />
              {categoryList ? (
                <div
                  className={`absolute top-[40px] left-0 z-40 flex w-full flex-col rounded-b-sm bg-white pt-1 text-black shadow-md transition-all duration-500 ease-in lg:top-[48px] lg:w-56 ${
                    showAllCategory ? `h-auto lg:h-60` : 'h-0 opacity-0' //h-[350px]
                  }`}
                  // onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  //   e.stopPropagation()
                  // }
                >
                  <ul>
                    {categoryList?.map((category) => (
                      <li key={category.id}>
                        <HeaderCategory category={category} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>

            {/* Menu */}
            <div
              className={`fixed top-0 z-40 flex h-full w-72 flex-col gap-y-5 bg-slate-50 px-4 py-2 shadow-2xl transition-all duration-300 ease-linear lg:static lg:z-10 lg:h-fit lg:bg-slate-50/0 lg:p-0 lg:px-8 lg:shadow-none ${
                menu ? 'left-0' : '-left-72'
              }`}
            >
              <span
                className="ml-auto mb-2 cursor-pointer lg:hidden"
                onClick={() => setMenu(!menu)}
              >
                <XCircleIcon />
              </span>

              <div className="w-full lg:hidden">
                <Search placeholder="Search our store" />
              </div>
              <div className="lg:hidden">
                <HeaderAccount />
              </div>
              <div className="flex flex-row items-center text-right text-sm text-gray-900 lg:hidden">
                <span className="mr-2">
                  <PhoneIcon />
                </span>

                <div className="flex flex-col">
                  <span>+880 1674314359</span>
                  <span className="flex flex-row items-center gap-x-1">
                    Customer Support
                  </span>
                </div>
              </div>
              <ul className="my-0 flex w-full list-none flex-col lg:flex-row lg:gap-x-6">
                {MenuData.map((menu) => (
                  <li key={menu.name} className="group">
                    <Link href={menu.link}>
                      <a
                        className="relative flex cursor-pointer flex-row items-center justify-between border-b border-slate-200 py-4 capitalize transition-all duration-100 ease-linear hover:text-green-600 lg:border-none lg:py-0 lg:font-medium"
                        onClick={closeMenu}
                      >
                        {menu.name}
                        {menu.hasSubmenu && <ChevronDownIcon size={4} />}
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
              {showUser ? (
                <div>
                  <HeaderAccount />
                </div>
              ) : (
                <>
                  <PhoneIcon />
                  <div className="flex flex-col">
                    <span>{customerNumber}</span>
                    <span className="flex flex-row items-center gap-x-1">
                      Customer Support
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
