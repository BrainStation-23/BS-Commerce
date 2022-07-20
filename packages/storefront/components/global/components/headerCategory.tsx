import Link from 'next/link';
import React from 'react';
import { HeaderSubCategory } from './headerSubCategory';

export const HeaderCategory: React.FC<any> = (props: any) => {
  const category = props.category;
  return (
    <>
      {category ? (
        <div className="group">
          <div
            key={category.name}
            className="flex flex-row justify-between text-sm"
          >
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
            {console.log(category)}

            <div className="">
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
          </div>
          {category.subCategories ? (
            <div className=" absolute -right-[130px] top-[0] z-50 hidden bg-white px-6 py-6 shadow-lg transition-all duration-300 ease-in hover:block lg:group-hover:block">
              <ul className="">
                {category.subCategories?.map((subCategory) => (
                  <HeaderSubCategory category={subCategory} />
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
