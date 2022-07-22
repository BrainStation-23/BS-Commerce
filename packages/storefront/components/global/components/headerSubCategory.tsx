import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronRightIcon } from './headerIcons';

interface Props {
  category: any;
  subOff?: boolean;
}

export const HeaderSubCategory: React.FC<Props> = ({
  category,
  subOff,
}: Props) => {
  const [showSubCategory, setShowSubCategory] = useState(subOff);

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
          className="group "
          // style={{ outline: '1px solid red' }}
        >
          <li
            key={category.name}
            className="w-full cursor-pointer text-sm transition-all duration-100 ease-linear hover:text-green-600"
            onMouseEnter={() => setShowSubCategory(true)}
            onMouseLeave={() => setShowSubCategory(false)}
          >
            <div className="flex cursor-pointer flex-row items-center justify-between px-3 py-1 transition-all duration-100 ease-linear hover:text-green-600">
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
                <a className="">{category.name}</a>
              </Link>
              {/* {console.log(category)} */}

              {category.subCategories ? <ChevronRightIcon /> : ''}
            </div>
          </li>

          {category.subCategories ? (
            <div
              className={`absolute top-0 left-56 z-50 h-60 w-56 bg-white shadow-lg transition-all duration-300 ease-in hover:block ${
                showSubCategory ? '' : 'hidden'
              }`}
            >
              <ul className="">
                {category.subCategories?.map((category: any) => (
                  <li key={category.name}>
                    <HeaderSubCategory
                      category={category}
                      // showSubCategory1={showSubCategory}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // }
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};
