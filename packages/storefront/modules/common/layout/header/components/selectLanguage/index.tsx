import { useAppDispatch } from 'store/hooks/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { setCurrencyLanguage } from 'store/slices/currencySlice';

interface language {
  name: string;
}

const Language: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const languageList: language[] = [
    { name: 'English' },
    { name: 'German' },
    { name: 'French' },
  ];
  const dispatch = useAppDispatch();
  const languageOnclick = async (currencyName: string) => {
    dispatch(setCurrencyLanguage(currencyName));
  };
  return (
    <div className="relative inline-block">
      <button
        className="inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="mr-1">{router.locale}</span>
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
        className={`top absolute top-7 z-50 overflow-hidden whitespace-nowrap border bg-white p-4 text-gray-700 transition-all duration-500 ease-linear dark:bg-dark_bg dark:text-dark_text ${
          open ? 'h-[90px] opacity-100' : 'h-0 opacity-0'
        }`}
        onMouseLeave={() => setOpen(false)}
      >
        {router?.locales?.map((locale) => (
          <li
            key={locale}
            className={`py-1 ${
              locale === router.locale
                ? 'text-primary dark:text-dark_primary'
                : ''
            }`}
            onClick={() => languageOnclick(locale)}
          >
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
