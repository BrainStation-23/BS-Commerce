import Table from "../global/table/table";
import logData from "../../data/log.json";
import { useState } from "react";
import Pagination from "../global/pagination";

const LogIndex = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(7);

  const columns = [
    {
      label: <input type="checkbox" defaultValue="all"></input>,
      path: "select",
      content: (data: any, key: any) => (
        <td>
          <input type="checkbox" defaultValue={key}></input>
        </td>
      ),
    },
    {
      label: "Log level",
      path: "logLevel",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Short message",
      path: "shortMsg",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Created On",
      path: "createdOn",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "view",
      path: "view",
      content: (data: any, key: any) => (
        <td>
          <button style={{ border: "none" }}>
            <span>
              <i className="bi bi-eye"></i>
            </span>
            View
          </button>
        </td>
      ),
    },
  ];

  const paginateData = (data: any) => {
    const start = (activePage - 1) * pageCount;
    const paginatedData = data.slice(start, start + pageCount);
    return paginatedData;
  };

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const paginatedData = paginateData(logData["logData"]);

  return (
    <>
      <div className="card rounded border-1 px-2 mt-3">
        <div className="card-body">
          <p>
            Learn more about{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              log
            </a>
          </p>
          <Table items={paginatedData} columns={columns} />

          <div className="d-flex flex-wrap justify-content-between">
            <Pagination
              totalItems={40}
              pageCount={pageCount}
              activePage={activePage}
              onClickPage={handleClickPage}
            />

            <div className="d-flex flex-wrap justify-content-center">
              <span>
                <span style={{ margin: "10px" }}>Show</span>
                <button
                  className="dropdown"
                  style={{
                    padding: "10px",
                    border: "1px solid gray",
                  }}
                >
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: "10px",
                    }}
                  >
                    {pageCount}
                  </a>
                  <div className="dropdown-menu">
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(7)}
                    >
                      7
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(15)}
                    >
                      15
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(20)}
                    >
                      20
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(50)}
                    >
                      50
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(100)}
                    >
                      100
                    </a>
                  </div>
                </button>
                <span style={{ margin: "10px" }}>items</span>
              </span>
            </div>

            <p>{` ${(activePage - 1) * pageCount + 1} - ${
              (activePage - 1) * pageCount + pageCount
            } of 41 items`}
            <span className="ms-2"><button style={{border: "none"}}><i className="bi bi-arrow-clockwise align-items-center"></i></button></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIndex;
