import HeaderCategory from '@/modules/common/layout/header/components/headerCategory';
import { NestedCategoryList } from '@bs-commerce/models';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useAppSelector } from 'store/hooks/index';

import ChevronDown from '@/modules/common/icons/chevronDown';
import MenuIcon from '@/modules/common/icons/menuIcon';
import PhoneIcon from '@/modules/common/icons/phoneIcon';
import HeaderAccount from '@/modules/common/layout/header/components/headerAccount';

interface Props {
  stickyClass: string;
  toggleOpen: () => void;
  setShowAllCategory: React.Dispatch<React.SetStateAction<boolean>>;
  showAllCategory: boolean;
  drawer: boolean;
  showUser: boolean;
}

interface menuLink {
  name: string;
  link: object;
  hasSubmenu: boolean;
  submenu?: subLink[];
}

interface LinkInterface {
  pathname: string;
  query: any;
}

interface subLink {
  name: string;
  link: string | LinkInterface;
}

const Navbar: React.FC<Props> = ({
  showUser,
  stickyClass,
  setShowAllCategory,
  showAllCategory,
  toggleOpen,
}: Props) => {
  const { t } = useTranslation();
  const customerNumber = `${t('common:contact_number')}`;

  const categoryList = useAppSelector(
    (state) => state.persistedReducer.category.categoryList
  );

  const makeSubMenu = (category: NestedCategoryList) => {
    let submenu: subLink[] = [];
    category.subCategories?.forEach((subCategory) => {
      const name = subCategory.name;
      const link = {
        pathname: `/collections/${name}`,
        query: {
          categoryId: subCategory.id,
          name: name,
        },
      };
      submenu.push({
        name,
        link,
      });
    });
    return submenu;
  };

  const MenuData: menuLink[] = [
    {
      name: `${t('common:home')}`,
      link: { pathname: '/' },
      hasSubmenu: false,
    },
    {
      name: categoryList[0].name,
      link: {
        pathname: `/collections/${categoryList[0].name}`,
        query: {
          categoryId: categoryList[0].id,
          name: categoryList[0].name,
        },
      },
      hasSubmenu: categoryList[0].subCategories?.length! > 0 ? true : false,
      submenu: makeSubMenu(categoryList[0]),
    },
    {
      name: categoryList[1].name,
      link: {
        pathname: `/collections/${categoryList[1].name}`,
        query: {
          categoryId: categoryList[1].id,
          name: categoryList[1].name,
        },
      },
      hasSubmenu: categoryList[1].subCategories?.length! > 0 ? true : false,
      submenu: makeSubMenu(categoryList[1]),
    },
    {
      name: categoryList[2].name,
      link: {
        pathname: `/collections/${categoryList[2].name}`,
        query: {
          categoryId: categoryList[2].id,
          name: categoryList[2].name,
        },
      },
      hasSubmenu: categoryList[2].subCategories?.length! > 0 ? true : false,
      submenu: makeSubMenu(categoryList[2]),
    },
    {
      name: `${t('common:pages')}`,
      link: { pathname: '/' },
      hasSubmenu: true,
      submenu: [
        { name: `${t('common:about_us')}`, link: '/about' },
        { name: `${t('common:services')}`, link: '/service' },
      ],
    },
    {
      name: `${t('common:contact_us')}`,
      link: { pathname: '/contact' },
      hasSubmenu: false,
    },
  ];

  return (
    <nav className={`flex justify-center ${stickyClass} z-20`}>
      <div className="container px-4">
        <div className="flex flex-row items-center">
          <div
            className="relative mb-3 mr-0 flex w-full cursor-pointer flex-row items-center rounded-lg bg-primary px-4 py-2 text-white dark:bg-dark_primary lg:mb-0 lg:mr-2 lg:w-56 lg:rounded-t-xl lg:rounded-b-none lg:py-3"
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
            <ChevronDown />
            {categoryList ? (
              <div
                className={`translate-y absolute top-[40px] left-0 z-40 flex w-full origin-top flex-col rounded-b-sm bg-white pt-1 text-black shadow-md transition-all duration-500 dark:bg-dark_bg dark:text-dark_text lg:top-[48px] lg:w-56  ${
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
            <ul className="my-0 flex w-full list-none flex-row gap-x-8">
              {MenuData.map((menu) => (
                <li key={menu.name} className="group">
                  <Link
                    href={menu.link}
                    className="relative flex cursor-pointer flex-row items-center justify-between border-b border-slate-200 py-4 capitalize transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary lg:border-none lg:py-0 lg:font-medium"
                  >
                    {menu.name}
                    {menu.hasSubmenu && <ChevronDown size={4} />}
                  </Link>

                  {menu.hasSubmenu && (
                    <div
                      className={`absolute hidden overflow-hidden bg-white px-6 py-6 shadow-lg transition-all duration-300 ease-in dark:bg-dark_bg dark:text-dark_text lg:group-hover:inline-block`}
                    >
                      <ul className="transition-all duration-100 ease-linear">
                        {menu.submenu?.map((menu) => (
                          <li
                            key={menu.name}
                            className="cursor-pointer py-2 text-sm hover:text-primary dark:hover:text-dark_primary"
                          >
                            <Link href={menu.link}>{menu.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto hidden flex-row items-center gap-x-2 text-right text-base text-gray-900 lg:flex">
            {showUser ? (
              <div>
                <HeaderAccount />
              </div>
            ) : (
              <>
                <PhoneIcon />
                <div className="flex flex-col text-sm dark:text-dark_text">
                  <span>{customerNumber}</span>
                  <span className="flex flex-row items-center gap-x-1">
                    {t('common:customer_support')}
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