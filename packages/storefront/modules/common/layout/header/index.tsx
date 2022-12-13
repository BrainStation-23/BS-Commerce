import type { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import BottomNavigationBar from '@/modules/common/layout/header/components//bottomNavigationBar';
import Navbar from '@/modules/common/layout/header/components//navbar';
import Drawer from '@/modules/common/layout/header/components/drawer';
import HeaderAccount from '@/modules/common/layout/header/components/headerAccount';
import Search from '@/modules/common/layout/header/components/search';
import Currency from '@/modules/common/layout/header/components/selectCurrency';
import Language from '@/modules/common/layout/header/components/selectLanguage';
import ThemeChanger from '@/modules/common/layout/header/components/themeChanger';

const Header: NextComponentType = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const [showAllCategory, setShowAllCategory] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [stickyClass, setStickyClass] = useState<string>('relative');

  const { pathname } = useRouter();
  const { t } = useTranslation();

  // console.log(categoryList);
  // const minNavbarHeight = `h-[` + (categoryList.length * 30 + 100) + `px]`; // e.g., h-[5*30 + 100px] => h[250px]
  // console.log(minNavbarHeight);

  const toggleOpen = () => {
    setShowAllCategory(!showAllCategory);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  const openDrawer = () => {
    setDrawer(true);
  };

  const setStickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight >= 140) {
        setStickyClass(
          'lg:fixed lg:top-0 lg:left-0 lg:z-40 lg:bg-white/95 dark:lg:bg-dark_bg lg:w-full lg:shadow-lg'
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
          <div className="h-5 space-x-3">
            <Language />
            <span>|</span>
            <Currency />
            <ThemeChanger />
          </div>
          <div className="space-x-3"></div>
        </div>
      </header>

      {/* Middle portion */}
      <div className="mb-2 flex justify-center py-4 lg:pt-8 lg:pb-6">
        <div className="container flex items-center justify-between px-4">
          <span className="text-3xl font-bold">
            <Link href="/">
              {/* <a>BS Commerce</a> */}
              {t('common:site_name')}
            </Link>
          </span>
          <span className="hidden w-2/5 lg:inline-block lg:w-[479px]">
            <Search placeholder={t('common:search_placeholder')} />
          </span>
          <span className="hidden lg:inline-block">
            <HeaderAccount />
          </span>
          {/* <span
          className="border border-gray-700 p-1 lg:hidden"
          onClick={() => setDrawer(!drawer)}
          id="menuToggler"
        >
          <MenuIcon />
        </span> */}
        </div>
      </div>

      {/* Navbar */}
      <Navbar
        drawer={drawer}
        setShowAllCategory={setShowAllCategory}
        showAllCategory={showAllCategory}
        showUser={showUser}
        stickyClass={stickyClass}
        toggleOpen={toggleOpen}
      />

      <Drawer drawer={drawer} closeDrawer={closeDrawer} />
      <BottomNavigationBar openDrawer={openDrawer} />
    </>
  );
};

export default Header;
