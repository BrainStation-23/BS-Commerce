import {
  ChevronDownIcon,
  MenuIcon,
  PhoneIcon,
  XCircleIcon,
} from '../layout/headerIcons';
import { MenuData } from '../layout/headerData';
import Link from 'next/link';
import { useAppSelector } from 'customHooks/hooks';
import HeaderCategory from './headerCategory';

import HeaderAccount from './header-account';
import Search from './search';

interface Props {
  stickyClass: string;
  toggleOpen: () => void;
  setShowAllCategory: React.Dispatch<React.SetStateAction<boolean>>;
  showAllCategory: boolean;
  drawer: boolean;
  showUser: boolean;
}

const Navbar: React.FC<Props> = ({
  showUser,
  stickyClass,
  setShowAllCategory,
  showAllCategory,
  toggleOpen,
}: Props) => {
  const customerNumber = '+880 1674314359';

  const categoryList = useAppSelector(
    (state) => state.persistedReducer.category.categoryList
  );

  return (
    <nav className={`flex justify-center ${stickyClass} z-20`}>
      <div className="container px-4">
        <div className="flex flex-row items-center">
          <div
            className="relative mb-3 mr-0 flex w-full cursor-pointer flex-row items-center rounded-lg bg-primary px-4 py-2 text-white lg:mb-0 lg:mr-2 lg:w-56 lg:rounded-t-xl lg:rounded-b-none lg:py-3"
            onClick={toggleOpen}
            onMouseEnter={() =>
              document.body.clientWidth > 768 && setShowAllCategory(true)
            }
            onMouseLeave={() =>
              document.body.clientWidth > 768 && setShowAllCategory(false)
            }
          >
            <MenuIcon size={6} />
            <span className="ml-4 mr-auto font-medium">All Categories</span>
            <ChevronDownIcon />
            {categoryList ? (
              <div
                className={`translate-y absolute top-[40px] left-0 z-40 flex w-full origin-top flex-col rounded-b-sm bg-white pt-1 text-black shadow-md transition-all duration-500 lg:top-[48px] lg:w-56  ${
                  showAllCategory
                    ? `h-auto scale-y-100 lg:h-60`
                    : 'h-0 scale-y-0' //h-[350px]
                }`}
              >
                <ul>
                  {showAllCategory &&
                    categoryList?.map((category) => (
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
            className={`static z-10 hidden h-fit bg-slate-50 bg-slate-50/0 p-0 px-8 shadow-none lg:flex`}
          >
            <ul className="my-0 flex w-full list-none flex-row gap-x-6">
              {MenuData.map((menu) => (
                <li key={menu.name} className="group">
                  <Link href={menu.link}>
                    <a className="relative flex cursor-pointer flex-row items-center justify-between border-b border-slate-200 py-4 capitalize transition-all duration-100 ease-linear hover:text-primary lg:border-none lg:py-0 lg:font-medium">
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
                            className="cursor-pointer py-2 text-sm transition-all duration-100 ease-linear hover:text-primary"
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
  );
};

export default Navbar;
