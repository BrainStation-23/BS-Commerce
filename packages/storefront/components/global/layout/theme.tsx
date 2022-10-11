import { useAppDispatch } from 'customHooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

interface theme {
  name: string;
}

const Theme: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const themeList: theme[] = [{ name: 'dark' }, { name: 'light' }];

  return (
    <div className="relative inline-block">
      <button
        className="inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="mr-1">{theme}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        className={`top absolute top-7 z-50 overflow-hidden whitespace-nowrap border bg-white p-4 text-gray-700 transition-all duration-500 ease-linear ${
          open ? 'h-[110px] opacity-100' : 'h-0 opacity-0'
        }`}
        onMouseLeave={() => setOpen(false)}
      >
        {themeList.map((theme) => (
          <li
            key={theme.name}
            className="py-1"
            onClick={() => setTheme(theme.name)}
          >
            <Link href={router.asPath}>
              <a>{theme.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theme;
