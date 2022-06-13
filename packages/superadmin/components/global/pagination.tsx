import _ from "lodash";
import React from "react";

const Pagination = (props: any) => {
  const { totalItems, pageCount, activePage, onClickPage } = props;
  const totalPages = Math.ceil(totalItems / pageCount);
  const pages = _.range(1, totalPages + 1, 1);

  if (totalItems <= pageCount) return null;

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            onClick={() =>
              activePage - 1 >= 1 ? onClickPage(activePage - 1) : null
            }
            className="page-item"
          >
            <a className="page-link">Previous</a>
          </li>
          {pages.map((page, index) => {
            return (
              <React.Fragment key={index}>
                <li
                  onClick={() => onClickPage(page)}
                  className={
                    page === activePage ? "page-item active" : "page-item"
                  }
                >
                  <a className="page-link">{page}</a>
                </li>
              </React.Fragment>
            );
          })}

          <li
            onClick={() =>
              activePage + 1 <= totalPages ? onClickPage(activePage + 1) : null
            }
            className="page-item"
          >
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
