import { current } from '@reduxjs/toolkit';
import { FC, useEffect, useState } from 'react';
import ChevronLeft from '../icons/chevronLeft';
import ChevronRight from '../icons/chevronRight';
import LeftArrowIcon from '../icons/leftArrowIcon';

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
  }, []);

  return (
    <>
      <div className={` px-x box-border h-auto w-full border text-sm`}>
        <div className="flex justify-center gap-x-2 py-2">
          <button
            className={`${
              currentPage > 1 ? '' : 'hover:cursor-not-allowed'
            } rounded bg-[#f1f1f1] py-2 px-2 font-semibold text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary`}
            onClick={() => {
              currentPage > 1 && setCurrentPage(currentPage - 1);
              if (paginate && currentPage > 1)
                paginate!((currentPage - 2) * limit!);
            }}
          >
            <ChevronLeft />
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
                          ? 'bg-primary text-white hover:cursor-not-allowed dark:bg-dark_primary'
                          : ' dark:hiver:bg-dark_primary bg-[#f1f1f1] text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary'
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
            }  rounded bg-[#f1f1f1] py-2 px-2 font-semibold text-black hover:bg-primary hover:text-white dark:hover:bg-dark_primary`}
            onClick={() => {
              currentPage < totalPages && setCurrentPage(currentPage + 1);
              if (paginate && currentPage < totalPages)
                paginate!(currentPage * limit!);
            }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};
