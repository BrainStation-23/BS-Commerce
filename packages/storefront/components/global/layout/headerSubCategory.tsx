import { subCategoryList } from 'models';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronRightIcon, MinusSolidIcon, PlusSolidIcon } from './headerIcons';

interface Props {
  category: subCategoryList;
  showSub?: boolean;
  level: number;
}

const HeaderSubCategory: React.FC<Props> = ({
  category,
  showSub,
  level,
}: Props) => {
  const [showSubCategory, setShowSubCategory] = useState(showSub);
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpandClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setExpand(!expand);
  };

  // const toggleShowSubCategory = (show: boolean) => {
  //   if (show === false) {
  //     // console.log('toggling1');
  //     let timeOutFunction = setTimeout(function () {
  //       setShowSubCategory(false);
  //       console.log('toggling');
  //     }, 500);
  //   } else {
  //     window.clearTimeout();
  //     setShowSubCategory(show);
  //   }
  // };

  return (
    <>
      {category ? (
        <div
          className="w-full"
          /** For hover effect only in large screen */
          onMouseEnter={() =>
            document.body.clientWidth > 1023 && setShowSubCategory(true)
          }
          onMouseLeave={() => {
            document.body.clientWidth > 1023 && setShowSubCategory(false);
          }}
        >
          <div className="flex cursor-pointer flex-row items-center justify-between px-3 py-1 text-sm transition-all duration-100 ease-linear hover:text-green-600">
            <span className="grow">
              <Link
                href={{
                  pathname: `/collections/${category.name}`,
                  query: {
                    categoryId: category.id,
                    name: category.name,
                  },
                }}
                //as={`/collections/${category.name}`}
              >
                <a className={`${`ml-` + level} lg:ml-0`}>{category.name}</a>
              </Link>
            </span>

            <span className="hidden lg:block">
              {category.subCategories ? <ChevronRightIcon /> : ''}
            </span>
            <span
              className="block lg:hidden"
              onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                handleExpandClick(e)
              }
            >
              {category.subCategories ? (
                expand ? (
                  <MinusSolidIcon size={4} />
                ) : (
                  <PlusSolidIcon size={4} />
                )
              ) : (
                ''
              )}
            </span>
          </div>

          {/* render on lg+ screen */}
          <div className="hidden lg:block">
            {category.subCategories ? (
              <div
                className={`absolute top-0 left-56 z-50 h-auto w-56 origin-left bg-white shadow-lg transition-all duration-300 ease-in hover:block lg:h-60 ${
                  showSubCategory ? 'scale-x-100' : 'scale-x-0'
                }`}
              >
                <ul className="pl-2">
                  {showSubCategory &&
                    category.subCategories?.map((category: subCategoryList) => (
                      <li key={category.name}>
                        <HeaderSubCategory
                          category={category}
                          level={level + 1}
                          // showSubCategory1={showSubCategory}
                        />
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* render on sm screen */}
          <div className={`lg:hidden`}>
            {category.subCategories && expand ? (
              <ul className="pl-2">
                {category.subCategories.map((category: subCategoryList) => (
                  <li key={category.name}>
                    <HeaderSubCategory category={category} level={level + 1} />
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default HeaderSubCategory;
