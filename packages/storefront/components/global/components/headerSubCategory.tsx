import Link from 'next/link';
import React, { useState } from 'react';

export const HeaderSubCategory: React.FC<any> = (props: any) => {
  const category = props.category;
  const subOff = props.subOff;
  const showSubCategory1 = props.showSubCategory;
  const [showSubCategory, setShowSubCategory] = useState(subOff);

  return (
    <>
      {category ? (
        <div className="group relative">
          <li
            key={category.name}
            className="w-full cursor-pointer py-2 text-sm transition-all duration-100 ease-linear hover:text-green-600"
            onMouseEnter={() => setShowSubCategory(true)}
            onMouseLeave={() => setShowSubCategory(false)}
          >
            <div className="flex flex-row justify-between">
              <Link
                href={{
                  pathname: `/collections/${category.name}`,
                  query: {
                    categoryId: category.id,
                    name: category.name,
                  },
                }}
                as={`/collections/${category.name}`}
              >
                <a className="cursor-pointer capitalize transition-all duration-100 ease-linear hover:text-green-600">
                  {category.name}
                </a>
              </Link>
              {/* {console.log(category)} */}

              {category.subCategories ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              ) : (
                ''
              )}
            </div>
          </li>

          {category.subCategories ? (
            <div
              className={` absolute -right-[160px] top-[4px] z-50 bg-white  px-10 py-6 shadow-lg transition-all duration-300 ease-in hover:block ${
                showSubCategory ? '' : 'hidden'
              }`}
            >
              <ul className="">
                {category.subCategories?.map((subCategory) => (
                  <HeaderSubCategory
                    category={subCategory}
                    showSubCategory1={showSubCategory}
                  />
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
