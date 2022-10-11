import { FC } from 'react';

export const CategoryPagination: FC = () => {
  return (
    <div>
      <div className="px-x box-border h-auto w-full border text-sm">
        <div className="flex justify-center gap-x-2 py-2">
          <button className="rounded bg-[#f1f1f1] py-2 px-2 font-semibold text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="rounded bg-[#f1f1f1] py-2 px-4 font-semibold text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary">
            1
          </button>
          <button className="rounded bg-[#f1f1f1] py-2 px-4 font-semibold text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary">
            2
          </button>
          <button className="rounded bg-[#f1f1f1] py-2 px-2 font-semibold text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
