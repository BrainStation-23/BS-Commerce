import type { NextComponentType } from "next";

const HeaderTop: NextComponentType = () => {
  return (
    <>
      <header className="flex justify-center py-2 border border-slate-900">
        <div className="flex justify-between container text-sm">
          <div className="space-x-2">
            <div className="group inline-block relative">
              <button className="inline-flex items-center">
                <span className="mr-1">English</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  English
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  Arabic
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  French
                </li>
              </ul>
            </div>
            <span>|</span>
            <div className="group inline-block relative">
              <button className="inline-flex items-center">
                <span className="mr-1">USD</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  USD
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  EUR
                </li>
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  GBP
                </li>
              </ul>
            </div>
          </div>
          <div className="space-x-3"></div>
        </div>
      </header>
    </>
  );
};

export default HeaderTop;
