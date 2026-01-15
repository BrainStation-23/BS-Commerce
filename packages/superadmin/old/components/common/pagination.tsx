import _ from "lodash";

const Pagination = ({
    totalItems,
    pageCount,
    activePage,
    onClickPage,
}: any) => {
    const totalPages = Math.ceil(totalItems / pageCount);
    const pages = _.range(1, totalPages + 1, 1);

    if (totalItems <= pageCount) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <button
                    style={{ border: "1px solid white"}}
                    onClick={() =>
                        activePage - 1 >= 1 ? onClickPage(activePage - 1) : null
                    }
                    className="page-item"
                >
                    <a><i className="bi bi-caret-left-fill"></i></a>
                </button>
                {pages.map((page) => {
                    return (
                        <div key={page}>
                            <li
                                onClick={() => onClickPage(page)}
                                className={
                                    page === activePage
                                        ? "page-item active"
                                        : "page-item"
                                }
                            >
                                <a className="page-link">{page}</a>
                            </li>
                        </div>
                    );
                })}
                <button
                    style={{ border: "1px solid white" }}
                    onClick={() =>
                        activePage + 1 <= totalPages
                            ? onClickPage(activePage + 1)
                            : null
                    }
                    className="page-item"
                >
                    <a><i className="bi bi-caret-right-fill"></i></a>
                </button>
            </ul>
        </nav>
    );
};

export default Pagination;
