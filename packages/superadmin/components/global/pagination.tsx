import { FC, useState } from 'react';
import { usePagination } from './usePagination';

interface Props {
  setCurrentPage: any;
  totalCount: any;
  currentPage: any;
  pageSize: any;
  setPageSize: any;
}

const Pagination: FC<Props> = ({
  setCurrentPage,
  totalCount,
  currentPage,
  pageSize,
  setPageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];

  return (
    <div className="d-flex justify-content-between mt-2 flex-wrap">
      <nav>
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 ? 'disabled' : null} `}
            onClick={currentPage === 1 ? () => {} : onPrevious}
          >
            <span className="page-link">
              <i className="bi bi-caret-left-fill align-middle"></i>
            </span>
          </li>
          {paginationRange?.map((pageNumber) => (
            <li
              className={`page-item ${
                currentPage === pageNumber ? 'active' : null
              } `}
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              <a className="page-link" href="#">
                {pageNumber}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              lastPage === currentPage ? 'disabled' : null
            }`}
            onClick={lastPage === currentPage ? () => {} : onNext}
          >
            <span className="page-link">
              <i className="bi bi-caret-right-fill align-middle"></i>
            </span>
          </li>
        </ul>
      </nav>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-2">Show</div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setCurrentPage(1);
            setPageSize(+e.target.value);
          }}
        >
          <option value="7">7</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div className="ms-2">Items</div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {totalCount && (
          <div className="me-3">
            {pageSize * (currentPage - 1) + 1}-
            {pageSize * currentPage <= totalCount
              ? pageSize * currentPage
              : totalCount}{' '}
            of {totalCount} items
          </div>
        )}
        {/* <div>
          <button className="btn btn-light">
            <i className="bi bi-arrow-clockwise align-middle"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Pagination;
