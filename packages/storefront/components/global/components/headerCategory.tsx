import Link from 'next/link';
import React, { useState } from 'react';
import { HeaderSubCategory } from './headerSubCategory';

export const HeaderCategory: React.FC<any> = (props: any) => {
  const category = props.category;
  const [subOff, settt] = useState(false);
  return (
    <>
      {category ? (
        <div className="group relative">
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
            {console.log(category)}
          </div>
          {category.subCategories ? (
            <div className=" absolute  -right-[180px] -top-[10px] z-50 hidden bg-white px-10 py-6 shadow-lg transition-all duration-300 ease-in hover:block lg:group-hover:block">
              <ul className="">
                {category.subCategories?.map((subCategory) => (
                  <HeaderSubCategory category={subCategory} subOff={subOff} />
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
