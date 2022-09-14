import { current } from '@reduxjs/toolkit';
import { FC, useEffect, useState } from 'react';

export const Pagination: FC<{
  totalPages: number;
  setCurrentPage: Function;
  currentPage: number;
  paginate?: Function;
  limit?: number;
}> = ({ totalPages, setCurrentPage, currentPage, paginate, limit }) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    let pageArray = [];
    for (let index = 0; index < 100; index++) {
      pageArray.push(index + 1);
    }
    setPages(pageArray);
  });

  return (
    <>
      <div className={` px-x box-border h-auto w-full border text-sm`}>
        <div className="flex justify-center gap-x-2 py-2">
          <button
            className={`${
              currentPage > 1 ? '' : 'hover:cursor-not-allowed'
            } rounded bg-[#f1f1f1] py-2 px-2 font-semibold text-black hover:bg-[#40a944] hover:text-white`}
            onClick={() => {
              currentPage > 1 && setCurrentPage(currentPage - 1);
              if (paginate && currentPage > 1)
                paginate!((currentPage - 2) * limit!);
            }}
          >
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
          <>
            {pages &&
              pages.map(
                (page, index) =>
                  index < totalPages && (
                    <button
                      key={index}
                      className={`rounded py-2 px-4 font-semibold ${
                        currentPage === index + 1
                          ? 'bg-[#40a944] text-white hover:cursor-not-allowed'
                          : ' bg-[#f1f1f1] text-black hover:bg-[#40a944] hover:text-white'
                      } `}
                      onClick={() => {
                        setCurrentPage(index + 1);
                        if (paginate) paginate!(index * limit!);
                      }}
                    >
                      {index + 1}
                    </button>
                  )
              )}
          </>
          <button
            className={`${
              currentPage < totalPages ? '' : 'hover:cursor-not-allowed'
            } rounded bg-[#f1f1f1] py-2 px-2 font-semibold text-black hover:bg-[#40a944] hover:text-white`}
            onClick={() => {
              currentPage < totalPages && setCurrentPage(currentPage + 1);
              if (paginate && currentPage < totalPages)
                paginate!(currentPage * limit!);
            }}
          >
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
    </>
  );
};
