import Link from 'next/link';
import React from 'react';

export const HeaderCategory: React.FC<any> = (props: any) => {
  const category = props.category;
  return (
    <div
      key={category.name}
      className="group flex flex-row justify-between text-sm"
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
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {category.hasSubmenu && (
        <div className="relative hidden overflow-hidden bg-white px-6 py-6 shadow-lg transition-all duration-300 ease-in lg:group-hover:block">
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
