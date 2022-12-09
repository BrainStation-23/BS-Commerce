import { useTheme } from 'next-themes';
import { useState } from 'react';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);
  const currentTheme = localStorage.getItem('theme') || 'light';

  return (
    <>
      <label className="absolute top-1.5 right-16 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          checked={currentTheme === 'light' ? false : true}
          onChange={() => {
            currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
          }}
        />
        <div className="peer h-6 w-11 rounded-full border bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white  dark:border-gray-600 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-1 mt-0.5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-1 mt-0.5 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </div>
      </label>
    </>
  );
};

export default ThemeChanger;
