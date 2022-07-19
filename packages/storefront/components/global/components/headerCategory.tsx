import Link from 'next/link';
import React from 'react';

export const HeaderCategory: React.FC<any> = (props: any) => {
  const category = props.category;
  return (
    <div className="group">
      <div
        key={category.name}
        className="flex flex-row justify-between text-sm"
      >
        <Link href={category.link} as={`/collections/${category.name}`}>
          <a className="cursor-pointer capitalize transition-all duration-100 ease-linear hover:text-green-600">
            {category.name}
          </a>
        </Link>
        <div className="">
          {category.hasSubmenu && (
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
          )}
        </div>
      </div>
      {category.hasSubmenu && (
        <div className="absolute right-[50px] top-0 z-50 hidden overflow-hidden bg-white px-6 py-6 shadow-lg transition-all duration-300 ease-in lg:group-hover:block">
          <ul className="">
            {category.submenu?.map((menu) => (
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
    </div>
  );
};
